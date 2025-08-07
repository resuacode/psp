# Conceptos Básicos de Multitarea

## ¿Qué es la Multitarea?

La multitarea es la capacidad de un sistema operativo de ejecutar múltiples procesos de forma aparentemente simultánea. En realidad, el procesador alterna rápidamente entre los diferentes procesos.

## Tipos de Multitarea

### 1. Multitarea Cooperativa
- Los procesos ceden voluntariamente el control del procesador
- Un proceso puede bloquear todo el sistema si no coopera

### 2. Multitarea Preemptiva
- El sistema operativo controla el tiempo de ejecución de cada proceso
- Más robusta y segura
- Utilizada en sistemas modernos

## Procesos vs Hilos

| Aspecto | Procesos | Hilos |
|---------|----------|-------|
| Memoria | Espacio independiente | Comparten memoria |
| Comunicación | IPC necesaria | Directo |
| Overhead | Alto | Bajo |
| Robustez | Alta | Media |

## Ventajas de la Multitarea

- **Mejor utilización de recursos**: El CPU no queda inactivo
- **Mejor experiencia de usuario**: Respuesta más fluida
- **Paralelización**: Aprovechamiento de múltiples cores
- **Separación de responsabilidades**: Cada proceso tiene una función específica
