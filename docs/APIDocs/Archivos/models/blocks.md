---
id: block-model-js
title: block.model.js
---

# Modelo `block.model.js`

El archivo `block.model.js`  define el esquema y modelo de datos para los bloques en la base de datos MongoDB utilizando Mongoose.

## Contenido del Archivo

```jsx
// Importar 'Schema' y 'model' de la biblioteca 'mongoose'
import { Schema, model } from 'mongoose';

// Definir el esquema del bloque
const blockSchema = new Schema({
    bloque: {
        type: Number,
        unique: true,  // Asegura que no haya bloques duplicados
        required: true
    },
    estado: {
        type: String,
        enum: ['on', 'off', 'warning'],  // Define un conjunto de valores permitidos para el estado
        default: 'off'
    }
}, {
    timestamps: true  // Agrega campos de tiempo de creación y actualización automáticamente
});

// Crear y exportar el modelo 'Block' basado en el esquema
export default model('Block', blockSchema);
```

## Descripción

- **Esquema `blockSchema`:**
  - Define la estructura de datos para los bloques, incluyendo campos como `bloque` y `estado`. El campo `bloque` es único para cada documento y se asegura de que no haya bloques duplicados. El campo `estado` tiene un conjunto limitado de valores permitidos (`'on'`, `'off'` y `'warning'`).

- **Modelo `Block`:**
  - Utilizando `model` de Mongoose, se crea el modelo `Block` que se utilizará para interactuar con la colección de bloques en la base de datos MongoDB.

- **Opciones del Esquema:**
  - `timestamps: true`: Agrega automáticamente campos de tiempo (`createdAt` y `updatedAt`) a cada documento para rastrear su creación y última actualización.
