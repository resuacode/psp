# Ejercicios Prácticos - Tema 3: Sincronización

## Ejercicio 1: Cuenta Bancaria Thread-Safe

Implementar una clase `CuentaBancaria` que sea segura para múltiples hilos:

**Requisitos:**
- Métodos: `depositar()`, `retirar()`, `consultarSaldo()`
- Varios hilos realizando operaciones simultáneas
- Garantizar consistencia de datos

## Ejercicio 2: Buffer Limitado

Crear un buffer circular thread-safe:

- Capacidad máxima de 10 elementos
- Múltiples productores y consumidores
- Usar `wait()` y `notify()`

## Ejercicio 3: Semáforo de Parking

Simular un parking con capacidad limitada:

- 5 plazas disponibles
- Coches llegan aleatoriamente
- Implementar con semáforos

## Soluciones

Las soluciones están disponibles en el repositorio del curso.
