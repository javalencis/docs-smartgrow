---
id: getting-started
title: Comenzando
sidebar_label: Comenzando
sidebar_position: 2
---

# Comenzando

Ahora que has completado la instalación, es el momento de conocer los conceptos fundamentales de nuestra aplicación

## Conceptos Fundamentales

### Estructura del Proyecto

Nuestra aplicación tiene la siguiente estructura:

```plaintext
my-app/
|-- src/
|   |-- controllers/
|   |-- libs/
|   |-- middlewares/
|   |-- models/
|   |-- mqtt/
|   |-- routes/
|   |-- schemas/
|   |-- app.js
|   |-- db.js
|   |-- index.js
|-- node_modules/
|-- .env
|-- package.json
|-- ...
```


- **`src/`**: Este directorio contiene todo el código fuente de tu aplicación.

  - **`controllers/`**: Almacena los controladores que manejan las funciones lógicas de la aplicación. Aquí, puedes encontrar archivos que contienen funciones que se utilizan para gestionar las peticiones HTTP y las respuestas correspondientes.

  - **`libs/`**: Contiene módulos y funciones compartidas que pueden ser utilizadas en diferentes partes de la aplicación.

  - **`middlewares/`**: Aquí se guardan los middleware, funciones intermedias que procesan las peticiones HTTP antes de llegar a las rutas finales. Los middleware son útiles para realizar tareas como la validación de autenticación, el manejo de errores, etc.

  - **`models/`**: Almacena los modelos de datos que representan las estructuras de datos de tu aplicación. Los modelos suelen corresponder a las tablas de la base de datos y definen cómo interactuar con ellas.

  - **`mqtt/`**: Contiene archivos relacionados con el protocolo MQTT (Message Queuing Telemetry Transport). Aquí puedes encontrar lógica relacionada con la comunicación por mensajes.

  - **`routes/`**: Aquí se definen las rutas de la aplicación. Cada archivo puede contener un conjunto de rutas relacionadas con una entidad o característica específica de tu API.

  - **`schemas/`**: Almacena los esquemas de validación para los datos que entran o salen de la aplicación. Los esquemas son útiles para asegurar la consistencia y validez de los datos.

  - **`app.js`**: Contiene la configuración principal de tu aplicación. Aquí, se pueden definir y configurar los middleware, rutas y cualquier otra configuración global de la aplicación.

  - **`db.js`**: Archivo que gestiona la conexión a la base de datos. Aquí se inicializa y se establece la conexión con la base de datos.

  - **`index.js`**: Es el punto de entrada principal de tu aplicación. Aquí se inicia el servidor y se configura para escuchar las peticiones HTTP.

- **`node_modules/`**: Este directorio contiene todas las dependencias instaladas por npm. No es necesario incluirlo en tu control de versiones, ya que se puede reconstruir utilizando el archivo `package.json` y `package-lock.json` (o `yarn.lock`).

- **`.env`**: Archivo de configuración que puede contener variables de entorno. Estas variables se pueden utilizar para almacenar información sensible, como claves de API o configuraciones específicas del entorno.

- **`package.json`**: Archivo que contiene la configuración y metadatos de tu proyecto, así como las dependencias necesarias para ejecutar la aplicación.

Esta estructura típica de archivos sigue las convenciones comunes en aplicaciones Node.js y proporciona una organización clara y modular del código. Cada directorio tiene un propósito específico para facilitar el mantenimiento y la escalabilidad del proyecto.


### Definiciones

#### [API REST](https://www.redhat.com/es/topics/api/what-is-a-rest-api)

Una API REST (Interfaz de Programación de Aplicaciones basada en Transferencia de Estado Representacional) es un estilo arquitectónico que define un conjunto de restricciones y principios para el diseño de servicios web. En una API REST, los recursos (como datos o servicios) son identificados por URL, y las operaciones sobre esos recursos se representan mediante los métodos HTTP estándar (GET, POST, PUT, DELETE, etc.). La comunicación entre el cliente y el servidor es stateless (sin estado), lo que significa que cada solicitud del cliente al servidor contiene toda la información necesaria para comprender y procesar la solicitud. Además, los datos suelen transferirse en formatos estándar como JSON o XML. Las API REST son ampliamente utilizadas para construir aplicaciones web y móviles debido a su simplicidad, escalabilidad y facilidad de consumo.

#### [MQTT (Message Queuing Telemetry Transport)](https://aws.amazon.com/es/what-is/mqtt/)

MQTT es un protocolo de mensajería ligero y eficiente diseñado para la comunicación entre dispositivos en redes con ancho de banda limitado o conexiones inestables. Utiliza el modelo de publicación/suscripción, donde los dispositivos pueden actuar como editores (publicadores) que envían mensajes a temas específicos, y otros dispositivos pueden suscribirse a esos temas para recibir dichos mensajes. MQTT es especialmente adecuado para el Internet de las cosas (IoT) y situaciones en las que se requiere una comunicación asíncrona y de bajo consumo de energía. Este protocolo minimiza la sobrecarga de red y permite una comunicación eficiente entre dispositivos, lo que lo convierte en una elección popular para implementaciones de sistemas de monitoreo, control y automatización.