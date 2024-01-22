---
id: user-model-js
title: user.model.js
---

# Modelo `user.model.js`

El archivo `user.model.js` en la carpeta `models` define el esquema y modelo de datos para los usuarios en la base de datos MongoDB utilizando Mongoose.

## Contenido del Archivo

```jsx
// Importar 'Schema' y 'model' de la biblioteca 'mongoose'
import { Schema, model } from 'mongoose';

// Definir el esquema del usuario
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,   // Garantiza unicidad en los nombres de usuario
        required: true,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    role: String
}, {
    timestamps: true  // Agrega campos de tiempo de creación y actualización automáticamente
});

// Crear y exportar el modelo 'User' basado en el esquema
export default model('User', userSchema);
```

## Descripción

- **Esquema `userSchema`:**
  - Define la estructura de datos para el usuario, que incluye campos como `username`, `name`, `password` y `role`.

- **Modelo `User`:**
  - Utilizando `model` de Mongoose, se crea el modelo `User` que se utilizará para interactuar con la colección de usuarios en la base de datos MongoDB.

- **Opciones del Esquema:**
  - `timestamps: true`: Agrega automáticamente campos de tiempo (`createdAt` y `updatedAt`) a cada documento para rastrear su creación y última actualización.
