# Ejemplo: Calculadora en Proceso Separado

## Objetivo
Crear una aplicación que lance una calculadora básica en un proceso separado y capture su resultado.

## Código

```java
import java.io.*;

public class CalculadoraProceso {
    public static void main(String[] args) {
        try {
            // Crear proceso para ejecutar bc (calculadora de línea de comandos)
            ProcessBuilder pb = new ProcessBuilder("bc", "-l");
            Process proceso = pb.start();
            
            // Enviar operación matemática
            try (PrintWriter writer = new PrintWriter(
                    new OutputStreamWriter(proceso.getOutputStream()))) {
                writer.println("scale=2");  // 2 decimales
                writer.println("10.5 + 3.7 * 2");
                writer.println("quit");
                writer.flush();
            }
            
            // Leer resultado
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(proceso.getInputStream()))) {
                String resultado;
                while ((resultado = reader.readLine()) != null) {
                    if (!resultado.trim().isEmpty()) {
                        System.out.println("Resultado: " + resultado);
                    }
                }
            }
            
            int exitCode = proceso.waitFor();
            System.out.println("Calculadora terminada con código: " + exitCode);
            
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

## Ejecución
```bash
javac CalculadoraProceso.java
java CalculadoraProceso
```

## Salida esperada
```
Resultado: 17.90
Calculadora terminada con código: 0
```
