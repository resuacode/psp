# Ejemplos de Programación Multitarea

## Ejemplo 1: Creación de un proceso simple

```java
import java.io.IOException;

public class EjemploProcessBuilder {
    public static void main(String[] args) {
        try {
            // Crear un nuevo proceso
            ProcessBuilder pb = new ProcessBuilder("notepad.exe");
            Process proceso = pb.start();
            
            // Esperar a que termine el proceso
            int exitCode = proceso.waitFor();
            System.out.println("El proceso terminó con código: " + exitCode);
            
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

## Ejemplo 2: Comunicación con un proceso

```java
import java.io.*;

public class ComunicacionProceso {
    public static void main(String[] args) {
        try {
            ProcessBuilder pb = new ProcessBuilder("cmd", "/c", "dir");
            Process proceso = pb.start();
            
            // Leer la salida del proceso
            BufferedReader reader = new BufferedReader(
                new InputStreamReader(proceso.getInputStream())
            );
            
            String linea;
            while ((linea = reader.readLine()) != null) {
                System.out.println(linea);
            }
            
            proceso.waitFor();
            
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```
