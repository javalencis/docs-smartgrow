---
id: installation
title: Instalación y Configuración
sidebar_label: Instalación
sidebar_position: 1
---

# Instalación

Bienvenido a la guía de instalación de la API. A continuación, te mostraremos cómo configurar el entorno de desarrollo y obtener el proyecto en funcionamiento.

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos antes de comenzar:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/)

## Pasos de Instalación

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/javalencis/CapiroApi
   cd CapiroApi

2. **Instala las dependencia**
    ```bash
   npm install

Estas son las dependencias del proyecto que se instalarán:
 

- [express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [mqtt](https://www.emqx.com/en/blog/mqtt-js-tutorial)
- [morgan](https://www.npmjs.com/package/morgan)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://npmjs.com/package/cors)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [nodemon](https://www.npmjs.com/package/nodemon)

3. **Inicia la aplicación**
    ```bash
   npm run dev

En la consola deberá visualizar la siguiente salida:
    ```bash
    > capiroapi@1.0.0 dev
    > nodemon src/index.js

    [nodemon] 2.0.22
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node src/index.js`
    Conexión MQTT establecida
    Server on port 3001
    >> DB is connected
    ```

- **Problemas Comúnes**:

    - Asegurese de tener mongoDB inicializado, en caso de un error con la conexión en la base de datos, verifique primero si el servicio de mongodb está corriendo.
    - Si la ocnexión MQTT falla, verifique si el firewall no tiene bloqueado el puerto 1883


¡Listo! Has completado la instalación y configuración básica de la api 