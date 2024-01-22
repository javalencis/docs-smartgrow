---
id: index-js
title: index.js
sidebar_position: 1
---

# Archivo `index.js`

El archivo `index.js` sirve como punto de entrada principal para la aplicación. Aquí se realiza la inicialización de la aplicación, la conexión a la base de datos y el inicio del servidor.

## Contenido del Archivo

```jsx
// Importar la aplicación Express y funciones necesarias
import app from './app.js';
import { connectDB } from './db.js';
import { config } from 'dotenv';
import './mqtt/client.js';

// Configurar variables de entorno desde el archivo .env
config();

// Conectar a la base de datos
connectDB();

// Iniciar el servidor Express
app.listen(process.env.PORT, () => {
    console.log("Server on port", process.env.PORT);
});
```

## Descripción

- **Inicialización de la Aplicación:**
  - Se importa la aplicación Express (`app`) desde el archivo `app.js`.

- **Conexión a la Base de Datos:**
  - Se utiliza la función `connectDB` desde el archivo `db.js` para establecer la conexión con la base de datos. Esta conexión es esencial para almacenar y recuperar datos.

- **Configuración de Variables de Entorno:**
  - Se utiliza `dotenv` para cargar y configurar las variables de entorno definidas en el archivo `.env`. Esto incluye detalles como el puerto en el que se ejecutará el servidor.

- **Inicio del Servidor:**
  - La aplicación Express se inicia y escucha en el puerto especificado por la variable de entorno `process.env.PORT`. Se muestra un mensaje en la consola indicando que el servidor está en ejecución.

Este archivo es fundamental para poner en marcha la aplicación y garantizar que todos los componentes estén correctamente configurados y funcionando.
