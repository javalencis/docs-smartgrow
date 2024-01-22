---
id: garland-routes-js
title: garland.routes.js
---

# Archivo `garland.routes.js`

El archivo `garland.routes.js` define las rutas relacionadas con las guirnaldas en la API REST. Proporciona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las guirnaldas.

## Contenido del Archivo

```jsx
// Importar el enrutador y funciones del controlador
import { Router } from 'express';
import * as garlandControllers from '../controllers/garlands.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

// Crear un enrutador de Express
const router = Router();

// Ruta GET para obtener todas las guirnaldas
router.get('/', garlandControllers.findGarlands);

// Middleware de validación de token para todas las rutas siguientes
router.use(validateToken);

// Ruta POST para crear una nueva guirnalda
router.post('/', garlandControllers.createGarland);

// Ruta PUT para actualizar una guirnalda por su ID
router.put('/:id', garlandControllers.updateGarland);

// Ruta DELETE para eliminar una guirnalda por su ID
router.delete('/:id', garlandControllers.deleteGarland);

// Exportar el enrutador
export default router;
```

## Descripción

- **Importación de Módulos:**
  - Se importa `Router` desde `express` para crear un enrutador y se importan las funciones del controlador `garlands.controllers.js` y el middleware `validateToken.js`.

- **Creación de un Enrutador:**
  - Se crea un enrutador utilizando la función `Router()` de Express.

- **Ruta GET para Obtener Todas las Guirnaldas:**
  - Se define una ruta `GET` ("/") que permite obtener todas las guirnaldas. La función del controlador `findGarlands` maneja esta operación.

- **Middleware de Validación de Token:**
  - Se utiliza el middleware `validateToken` en todas las rutas siguientes, garantizando que se requiera autenticación para acceder a estas rutas.

- **Ruta POST para Crear una Nueva Guirnalda:**
  - Se define una ruta `POST` ("/") que permite la creación de nuevas guirnaldas. La función del controlador `createGarland` maneja esta operación.

- **Ruta PUT para Actualizar una Guirnalda por su ID:**
  - Se define una ruta `PUT` ("/:id") que permite la actualización de una guirnalda específica según su ID. La función del controlador `updateGarland` maneja esta operación.

- **Ruta DELETE para Eliminar una Guirnalda por su ID:**
  - Se define una ruta `DELETE` ("/:id") que permite la eliminación de una guirnalda específica según su ID. La función del controlador `deleteGarland` maneja esta operación.

- **Exportación del Enrutador:**
  - Se exporta el enrutador para que pueda ser utilizado por la aplicación principal.
