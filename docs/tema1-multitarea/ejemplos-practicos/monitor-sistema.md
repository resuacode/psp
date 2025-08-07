# Ejemplo: Monitor de Sistema

## Objetivo
Crear un monitor que ejecute comandos del sistema periódicamente y muestre la información.

## Código

```java
import java.io.*;
import java.util.concurrent.TimeUnit;

public class MonitorSistema {
    public static void main(String[] args) {
        MonitorSistema monitor = new MonitorSistema();
        
        for (int i = 0; i < 3; i++) {
            System.out.println("=== Monitoreo #" + (i + 1) + " ===");
            monitor.obtenerUsoMemoria();
            monitor.obtenerProcesosActivos();
            
            try {
                TimeUnit.SECONDS.sleep(5);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }
    
    private void obtenerUsoMemoria() {
        try {
            ProcessBuilder pb = new ProcessBuilder("free", "-h");
            Process proceso = pb.start();
            
            System.out.println("--- Uso de Memoria ---");
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(proceso.getInputStream()))) {
                String linea;
                while ((linea = reader.readLine()) != null) {
                    System.out.println(linea);
                }
            }
            
            proceso.waitFor();
            
        } catch (IOException | InterruptedException e) {
            System.err.println("Error obteniendo memoria: " + e.getMessage());
        }
    }
    
    private void obtenerProcesosActivos() {
        try {
            ProcessBuilder pb = new ProcessBuilder("ps", "aux");
            Process proceso = pb.start();
            
            System.out.println("--- Top 5 Procesos ---");
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(proceso.getInputStream()))) {
                String linea;
                int contador = 0;
                while ((linea = reader.readLine()) != null && contador < 6) {
                    System.out.println(linea);
                    contador++;
                }
            }
            
            proceso.waitFor();
            
        } catch (IOException | InterruptedException e) {
            System.err.println("Error obteniendo procesos: " + e.getMessage());
        }
    }
}
```

## Funcionalidades
- Monitoreo periódico del sistema
- Uso de memoria en tiempo real
- Lista de procesos activos
- Manejo de errores robusto
