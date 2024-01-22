---
id: db-js
title: db.js
sidebar_position: 3
---

# Archivo `db.js`

El archivo `db.js` contiene la función `connectDB`, encargada de establecer la conexión con la base de datos MongoDB utilizando Mongoose.

## Contenido del Archivo

```jsx
// Importar la biblioteca Mongoose para la conexión a MongoDB
import mongoose from 'mongoose';

// Definir la función para conectar a la base de datos
export async function connectDB() {
    try { 
        // Intentar conectar con la base de datos utilizando la URL proporcionada en las variables de entorno
        await mongoose.connect(process.env.MONGODB_URL);

        // Mostrar mensaje en la consola si la conexión es exitosa
        console.log('>> DB is connected');
    } catch (error) {
        // Capturar y mostrar cualquier error que ocurra durante la conexión
        console.log(error);
    }
}
```

## Descripción

- **Biblioteca Mongoose:**
  - Se importa la biblioteca Mongoose, que proporciona una interfaz de modelado de objetos MongoDB para Node.js.

- **Función `connectDB`:**
  - La función `connectDB` es asíncrona y se encarga de realizar la conexión a la base de datos. Utiliza la URL de conexión definida en `process.env.MONGODB_URL`.

- **Manejo de Errores:**
  - Se incluye un bloque `try...catch` para manejar cualquier error que pueda ocurrir durante la conexión. En caso de éxito, se muestra un mensaje indicando que la base de datos está conectada.

Este archivo es esencial para establecer la conexión con la base de datos MongoDB antes de iniciar la aplicación, asegurando que la aplicación pueda interactuar con la base de datos de manera efectiva.
