---
id: control-model-js
title: control.model.js
---

# Modelo `control.model.js`

El archivo `control.model.js`  define el esquema y modelo de datos para el control en la base de datos MongoDB utilizando Mongoose.

## Contenido del Archivo

```jsx
// Importar 'Schema' y 'model' de la biblioteca 'mongoose'
import { Schema, model } from "mongoose";

// Definir el esquema del control
const controlSchema = new Schema({
    hora_inicio: {
        type: String,
        default: "00:00"
    },
    hora_final: {
        type: String,
        default: "00:00"
    },
    tiempo_encendido: {
        type: Number,
        default: 0,
    },
    tiempo_apagado: {
        type: Number,
        default: 0
    },
    reciente: {
        type: Boolean,
        default: false
    },
    bloque: {
        type: Number,
        ref: 'Block',  // Referencia al modelo 'Block'
        required: true
    }
}, {
    timestamps: true  // Agrega campos de tiempo de creación y actualización automáticamente
});

// Crear y exportar el modelo 'Control' basado en el esquema
export default model('Control', controlSchema);
```

## Descripción

- **Esquema `controlSchema`:**
  - Define la estructura de datos para el control, que incluye campos como `hora_inicio`, `hora_final`, `tiempo_encendido`, `tiempo_apagado`, `reciente` y `bloque`. El campo `bloque` se referencia al modelo 'Block' y es requerido.

- **Modelo `Control`:**
  - Utilizando `model` de Mongoose, se crea el modelo `Control` que se utilizará para interactuar con la colección de controles en la base de datos MongoDB.

- **Opciones del Esquema:**
  - `timestamps: true`: Agrega automáticamente campos de tiempo (`createdAt` y `updatedAt`) a cada documento para rastrear su creación y última actualización.
