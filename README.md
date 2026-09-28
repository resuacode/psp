# PSP · Programación de Servicios y Procesos (2º DAM)

Apuntes, ejemplos, ejercicios resueltos y propuestas de proyectos del módulo **Programación de Servicios y Procesos** del ciclo de Desarrollo de Aplicaciones Multiplataforma (DAM).

🌐 **Web del módulo:** https://resuacode.github.io/psp/

Todo el código del módulo está escrito en **Kotlin** sobre la JVM (con alguna parte en Android y Kotlin Multiplatform).

## Contenido

| Tema | Contenido |
|------|-----------|
| **Tema 0 · Introducción a Kotlin** | Variables y tipos, funciones y lambdas, null safety, POO, data/enum/sealed classes, genéricos, scope functions y colecciones. |
| **Tema 1 · Programación concurrente y procesos** | Concurrencia y paralelismo, procesos del sistema operativo, `ProcessBuilder`, comunicación entre procesos, depuración y pruebas. |
| **Tema 2 · Programación multihilo** | Hilos (de plataforma y virtuales), sincronización, locks, colecciones concurrentes, depuración multihilo y corrutinas de Kotlin (JVM y Android con Jetpack Compose). |
| **Tema 3 · Comunicaciones en red con sockets** | Arquitectura cliente-servidor, sockets TCP y UDP, servidores concurrentes con hilos y corrutinas, monitorización y depuración de red. |
| **Tema 4 · Servicios en red y seguridad** | Protocolos estándar (HTTP, FTP, SMTP), Ktor y Retrofit, servicios concurrentes, criptografía (hash, AES-GCM, RSA), control de acceso y sockets TLS. |

Cada tema incluye una página índice con **ejercicios prácticos con solución** y, cuando procede, una página de **proyectos** propuestos.

## Estructura del repositorio

```
docs/                     Contenido del módulo (MDX)
├── index.mdx             Página de inicio del módulo
├── erratas.mdx           Fe de erratas y actualizaciones de los apuntes
├── tema0-kotlin/
├── tema1-fundamentos/
├── tema2-multihilo/
├── tema3-comunicaciones-red/
└── tema4-servicios-seguridad/
src/                      Portada del sitio y estilos
static/                   Imágenes y recursos estáticos
sidebars.js               Barras laterales (una por tema, autogeneradas)
docusaurus.config.js      Configuración del sitio
```

Los ficheros de `docs/` cuyo nombre empieza por `_` (por ejemplo `_08-proyectos.mdx`) **no se publican**: Docusaurus los ignora. Se usan para tener preparados contenidos (proyectos, normas de entrega…) que todavía no se quieren mostrar al alumnado. Para publicarlos basta con quitar el `_` del nombre.

## Desarrollo local

El sitio está construido con [Docusaurus 3](https://docusaurus.io/). Se necesita **Node.js 20 o superior**.

```bash
npm install     # Instalar dependencias
npm start       # Servidor de desarrollo con recarga en caliente (http://localhost:3000/psp/)
npm run build   # Generar el sitio estático en build/
npm run serve   # Servir localmente el contenido de build/
```

> La búsqueda (plugin `@easyops-cn/docusaurus-search-local`) solo funciona con el sitio compilado (`npm run build` + `npm run serve`), no con `npm start`.

## Despliegue

El despliegue es automático: cada `push` a la rama `master` ejecuta el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que compila el sitio y lo publica en **GitHub Pages**.

Si el build falla (por ejemplo, por un enlace roto o un documento referenciado en `sidebars.js` que ya no existe), el despliegue no se realiza. Conviene ejecutar `npm run build` en local antes de hacer `push`.

## Autor

**ResuaCode** · [GitHub](https://github.com/resuacode) · [YouTube](https://youtube.com/@resuacode) · [Web](http://resuacode.es)
