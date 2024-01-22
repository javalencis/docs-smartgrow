---
id: garland-model-js
title: garland.model.js
---

# Modelo `garland.model.js`

El archivo `garland.model.js` en la carpeta `models` define el esquema y modelo de datos para la guirnalda en la base de datos MongoDB utilizando Mongoose.

## Contenido del Archivo

```jsx
// Importar 'Schema' y 'model' de la biblioteca 'mongoose'
import { Schema, model } from 'mongoose';

// Definir el esquema de la guirnalda
const garlandSchema = new Schema({
    bloque: {
        type: Number,
        required: true,
        trim: true
    },
    guirnalda: {
        type: Number,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        trim: true
    },
    num_bombillas: {
        type: Number,
        required: true,
        trim: true
    },
    umbral: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    timestamps: true  // Agrega campos de tiempo de creación y actualización automáticamente
});

// Crear y exportar el modelo 'Garland' basado en el esquema
export default model('Garland', garlandSchema);
```

## Descripción

- **Esquema `garlandSchema`:**
  - Define la estructura de datos para la guirnalda, que incluye campos como `bloque`, `guirnalda`, `estado`, `num_bombillas` y `umbral`.

- **Modelo `Garland`:**
  - Utilizando `model` de Mongoose, se crea el modelo `Garland` que se utilizará para interactuar con la colección de guirnaldas en la base de datos MongoDB.

- **Opciones del Esquema:**
  - `timestamps: true`: Agrega automáticamente campos de tiempo (`createdAt` y `updatedAt`) a cada documento para rastrear su creación y última actualización.