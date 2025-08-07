# Pipes y Streams

## Trabajando con Flujos de Datos

Los pipes y streams son fundamentales para la comunicación entre procesos en Java.

## Tipos de Streams

### InputStream
- Para leer datos del proceso
- `proceso.getInputStream()` - salida estándar del proceso
- `proceso.getErrorStream()` - error estándar del proceso

### OutputStream
- Para enviar datos al proceso
- `proceso.getOutputStream()` - entrada estándar del proceso

## Ejemplo Práctico

```java
import java.io.*;

public class PipesStreams {
    public static void main(String[] args) {
        try {
            ProcessBuilder pb = new ProcessBuilder("grep", "error");
            Process proceso = pb.start();
            
            // Escribir datos al proceso
            try (PrintWriter writer = new PrintWriter(
                    new OutputStreamWriter(proceso.getOutputStream()))) {
                writer.println("Esta es una línea normal");
                writer.println("Esta línea contiene error");
                writer.println("Otra línea normal");
                writer.flush();
            }
            
            // Leer la salida filtrada
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(proceso.getInputStream()))) {
                String linea;
                while ((linea = reader.readLine()) != null) {
                    System.out.println("Filtrado: " + linea);
                }
            }
            
            proceso.waitFor();
            
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```
