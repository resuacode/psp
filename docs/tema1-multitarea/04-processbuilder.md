# La Clase ProcessBuilder

## Introducción

`ProcessBuilder` es la clase principal en Java para crear y configurar procesos del sistema operativo. Reemplaza a las APIs obsoletas y proporciona mayor flexibilidad y control.

## Constructor

```java
// Crear con comando y argumentos
ProcessBuilder pb = new ProcessBuilder("comando", "arg1", "arg2");

// Crear con lista de argumentos
List<String> comandos = Arrays.asList("java", "-version");
ProcessBuilder pb = new ProcessBuilder(comandos);
```

## Métodos Principales

### command()
Establece o obtiene el comando a ejecutar:

```java
ProcessBuilder pb = new ProcessBuilder();
pb.command("notepad.exe", "archivo.txt");

// O también
pb.command(Arrays.asList("java", "-cp", ".", "MiClase"));
```

### directory()
Establece el directorio de trabajo:

```java
pb.directory(new File("/home/usuario/proyecto"));
```

### environment()
Accede a las variables de entorno:

```java
Map<String, String> env = pb.environment();
env.put("MI_VARIABLE", "valor");
env.remove("VARIABLE_INNECESARIA");
```

### redirectInput(), redirectOutput(), redirectError()
Redirige los flujos estándar:

```java
// Redirigir entrada desde archivo
pb.redirectInput(new File("entrada.txt"));

// Redirigir salida a archivo
pb.redirectOutput(new File("salida.txt"));

// Redirigir errores al mismo flujo que la salida
pb.redirectErrorStream(true);
```

## Ejemplo Completo

```java
import java.io.*;
import java.util.Map;

public class EjemploProcessBuilder {
    public static void main(String[] args) {
        try {
            // Crear ProcessBuilder
            ProcessBuilder pb = new ProcessBuilder("java", "-version");
            
            // Configurar directorio de trabajo
            pb.directory(new File(System.getProperty("user.home")));
            
            // Configurar variables de entorno
            Map<String, String> env = pb.environment();
            env.put("JAVA_OPTS", "-Xmx512m");
            
            // Redirigir error estándar a salida estándar
            pb.redirectErrorStream(true);
            
            // Ejecutar el proceso
            Process proceso = pb.start();
            
            // Leer la salida
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(proceso.getInputStream()))) {
                
                String linea;
                while ((linea = reader.readLine()) != null) {
                    System.out.println(linea);
                }
            }
            
            // Esperar a que termine
            int exitCode = proceso.waitFor();
            System.out.println("Proceso terminado con código: " + exitCode);
            
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

## Buenas Prácticas

### 1. Gestión de Recursos
```java
try (BufferedReader reader = new BufferedReader(
        new InputStreamReader(proceso.getInputStream()))) {
    // Leer salida
} // Se cierra automáticamente
```

### 2. Manejo de Timeout
```java
boolean terminado = proceso.waitFor(5, TimeUnit.SECONDS);
if (!terminado) {
    proceso.destroyForcibly();
    System.out.println("Proceso terminado por timeout");
}
```

### 3. Validación de Comandos
```java
ProcessBuilder pb = new ProcessBuilder("comando_inexistente");
try {
    Process p = pb.start();
} catch (IOException e) {
    System.err.println("Error al ejecutar comando: " + e.getMessage());
}
```
