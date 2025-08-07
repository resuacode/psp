# Comunicación entre Procesos

## Introducción

La comunicación entre procesos (IPC - Inter-Process Communication) es fundamental cuando necesitamos que diferentes procesos intercambien información.

## Tipos de Comunicación

### 1. Tuberías (Pipes)
- Comunicación unidireccional
- Útil para conectar la salida de un proceso con la entrada de otro

### 2. Tuberías con Nombre (Named Pipes)
- Comunicación bidireccional
- Persisten en el sistema de archivos

### 3. Sockets
- Comunicación local o remota
- Muy versátiles

## Ejemplo con Tuberías

```java
import java.io.*;

public class ComunicacionTuberias {
    public static void main(String[] args) {
        try {
            // Crear un proceso que genera datos
            ProcessBuilder pb1 = new ProcessBuilder("echo", "Hola Mundo");
            Process proceso1 = pb1.start();
            
            // Leer la salida del primer proceso
            BufferedReader reader = new BufferedReader(
                new InputStreamReader(proceso1.getInputStream())
            );
            
            String linea;
            while ((linea = reader.readLine()) != null) {
                System.out.println("Recibido: " + linea);
            }
            
            proceso1.waitFor();
            
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```
