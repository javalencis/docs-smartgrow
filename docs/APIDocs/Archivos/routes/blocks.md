---
id: block-routes-js
title: block.routes.js
---

# Archivo `block.routes.js`

El archivo `block.routes.js` define las rutas relacionadas con los bloques en la API REST. Estas rutas permiten la consulta, creación y actualización de bloques.

## Contenido del Archivo

```jsx
// Importar el enrutador y funciones del controlador
import { Router } from 'express';
import { findBlocks, saveBlock, updateBlock } from '../controllers/blocks.controller.js';

// Crear un enrutador de Express
const router = Router();

// Ruta para obtener todos los bloques
router.get('/all', findBlocks);

// Ruta para crear un nuevo bloque
router.post('/', saveBlock);

// Ruta para actualizar un bloque existente
router.put('/', updateBlock);

// Exportar el enrutador
export default router;
```

## Descripción

- **Importación de Módulos:**
  - Se importa `Router` desde `express` para crear un enrutador y se importan las funciones del controlador `blocks.controller.js` para manejar las operaciones CRUD relacionadas con los bloques.

- **Creación de un Enrutador:**
  - Se crea un enrutador utilizando la función `Router()` de Express.

- **Ruta GET para Obtener Todos los Bloques:**
  - Se define una ruta `GET` ("/all") que permite obtener todos los bloques. La función del controlador `findBlocks` maneja esta operación.

- **Ruta POST para Crear un Nuevo Bloque:**
  - Se define una ruta `POST` que permite la creación de un nuevo bloque. La función del controlador `saveBlock` maneja esta operación.

- **Ruta PUT para Actualizar un Bloque Existente:**
  - Se define una ruta `PUT` que permite la actualización de un bloque existente. La función del controlador `updateBlock` maneja esta operación.

- **Exportación del Enrutador:**
  - Se exporta el enrutador para que pueda ser utilizado por la aplicación principal.
