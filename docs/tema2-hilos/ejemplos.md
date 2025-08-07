# Ejemplos de Programación con Hilos

## Ejemplo 1: Creación básica de hilos

```java
// Extendiendo Thread
class MiHilo extends Thread {
    private String nombre;
    
    public MiHilo(String nombre) {
        this.nombre = nombre;
    }
    
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(nombre + " - Iteración: " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}

public class EjemploHilos {
    public static void main(String[] args) {
        MiHilo hilo1 = new MiHilo("Hilo-1");
        MiHilo hilo2 = new MiHilo("Hilo-2");
        
        hilo1.start();
        hilo2.start();
    }
}
```

## Ejemplo 2: Implementando Runnable

```java
class MiTarea implements Runnable {
    private String nombre;
    
    public MiTarea(String nombre) {
        this.nombre = nombre;
    }
    
    @Override
    public void run() {
        for (int i = 0; i < 3; i++) {
            System.out.println(nombre + " ejecutando tarea " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
    }
}

public class EjemploRunnable {
    public static void main(String[] args) {
        Thread hilo1 = new Thread(new MiTarea("Tarea-A"));
        Thread hilo2 = new Thread(new MiTarea("Tarea-B"));
        
        hilo1.start();
        hilo2.start();
        
        try {
            hilo1.join();
            hilo2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("Todas las tareas completadas");
    }
}
```
