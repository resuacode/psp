# Estados de un Proceso

## Diagrama de Estados

Un proceso en su ciclo de vida puede encontrarse en diferentes estados:

```
[Nuevo] → [Listo] → [Ejecutando] → [Terminado]
            ↑           ↓
            └─── [Bloqueado] ←┘
```

## Estados Principales

### 1. Nuevo (New)
- El proceso ha sido creado pero aún no ha sido admitido en el pool de procesos ejecutables
- Se están asignando los recursos necesarios

### 2. Listo (Ready)
- El proceso está preparado para ejecutarse
- Espera a que el planificador le asigne tiempo de CPU
- Se encuentra en la cola de procesos listos

### 3. Ejecutando (Running)
- El proceso está siendo ejecutado por el CPU
- Sus instrucciones están siendo procesadas
- Solo un proceso puede estar en este estado por CPU

### 4. Bloqueado (Blocked/Waiting)
- El proceso no puede continuar hasta que ocurra un evento
- Esperando I/O, semáforos, o recursos
- No consume tiempo de CPU

### 5. Terminado (Terminated)
- El proceso ha completado su ejecución
- Se liberan todos los recursos asignados
- El sistema operativo limpia las estructuras de datos

## Transiciones

### Ready → Running
- El planificador selecciona el proceso para ejecución

### Running → Ready
- El quantum de tiempo ha expirado (preemption)
- Un proceso de mayor prioridad está listo

### Running → Blocked
- El proceso solicita I/O
- Espera por un recurso no disponible

### Blocked → Ready
- La operación de I/O se completa
- El recurso esperado está disponible

## Ejemplo en Java

```java
public class EstadoProceso {
    public static void main(String[] args) {
        ProcessBuilder pb = new ProcessBuilder("sleep", "5");
        
        try {
            Process proceso = pb.start(); // Estado: Ejecutando
            
            System.out.println("Proceso iniciado");
            System.out.println("¿Está vivo? " + proceso.isAlive());
            
            // El proceso está en estado Ejecutando o Bloqueado
            int exitCode = proceso.waitFor(); // Esperamos a que termine
            
            System.out.println("Proceso terminado con código: " + exitCode);
            System.out.println("¿Está vivo? " + proceso.isAlive());
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
