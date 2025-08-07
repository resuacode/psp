# Ejemplos de Sincronización de Hilos

## Ejemplo 1: Problema de Concurrencia

```java
class ContadorNoSeguro {
    private int contador = 0;
    
    public void incrementar() {
        contador++; // Operación no atómica
    }
    
    public int getContador() {
        return contador;
    }
}

public class ProblemaConcurrencia {
    public static void main(String[] args) {
        ContadorNoSeguro contador = new ContadorNoSeguro();
        
        // Crear múltiples hilos que incrementan
        Thread[] hilos = new Thread[10];
        for (int i = 0; i < hilos.length; i++) {
            hilos[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    contador.incrementar();
                }
            });
        }
        
        // Iniciar todos los hilos
        for (Thread hilo : hilos) {
            hilo.start();
        }
        
        // Esperar a que terminen
        for (Thread hilo : hilos) {
            try {
                hilo.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        System.out.println("Resultado: " + contador.getContador());
        System.out.println("Esperado: 10000");
    }
}
```

## Ejemplo 2: Solución con synchronized

```java
class ContadorSeguro {
    private int contador = 0;
    
    public synchronized void incrementar() {
        contador++; // Ahora es seguro
    }
    
    public synchronized int getContador() {
        return contador;
    }
}
```
