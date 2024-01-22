---
id: alert-model-js
title: alert.model.js
---

# Modelo `alert.model.js`

El archivo `alert.model.js` en la carpeta `models` define el esquema y modelo de datos para las alertas en la base de datos MongoDB utilizando Mongoose.

## Contenido del Archivo

```jsx
// Importar 'Schema' y 'model' de la biblioteca 'mongoose'
import { Schema, model } from 'mongoose';

// Definir el esquema de la alerta
const alertSchema = new Schema({
    bloque: {
        type: Number,
        required: true,
        trim: true
    },
    guirnalda: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: Boolean,
        default: false,
        trim: true
    },
    edicion: {
        type: {
            componente: String,
            tipo: String
        },
        default: null
    },
    usuario: {
        type: {
            _id: Schema.Types.ObjectId,
            usuario: String,
            nombre: String
        },
        ref: 'User',  // Referencia al modelo de usuario
        default: null
    }
}, {
    timestamps: true  // Agrega campos de tiempo de creación y actualización automáticamente
});

// Crear y exportar el modelo 'Alert' basado en el esquema
export default model("Alert", alertSchema);
```

## Descripción

- **Esquema `alertSchema`:**
  - Define la estructura de datos para las alertas, incluyendo campos como `bloque`, `guirnalda`, `descripcion`, `estado`, `edicion` y `usuario`. Algunos campos tienen valores predeterminados, y se especifica que `usuario` está referenciando al modelo de usuario (`User`).
  
- **Modelo `Alert`:**
  - Utilizando `model` de Mongoose, se crea el modelo `Alert` que se utilizará para interactuar con la colección de alertas en la base de datos MongoDB.

- **Opciones del Esquema:**
  - `timestamps: true`: Agrega automáticamente campos de tiempo (`createdAt` y `updatedAt`) a cada documento para rastrear su creación y última actualización.
