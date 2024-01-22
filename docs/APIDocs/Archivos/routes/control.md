---
id: control-routes-js
title: control.routes.js
---

# Archivo `control.routes.js`

El archivo `control.routes.js` define las rutas relacionadas con el control en la API REST. En este caso, solo se permite la creación de nuevos datos de control.

## Contenido del Archivo

```jsx
// Importar el enrutador y funciones del controlador
import { Router } from 'express';
import { saveControl } from '../controllers/control.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

// Crear un enrutador de Express
const router = Router();

// Middleware de validación de token para todas las rutas
router.use(validateToken);

// Ruta para guardar nuevos datos de control
router.post('/', saveControl);

// Exportar el enrutador
export default router;
```

## Descripción

- **Importación de Módulos:**
  - Se importa `Router` desde `express` para crear un enrutador y se importan las funciones del controlador `control.controllers.js` y el middleware `validateToken.js`.

- **Creación de un Enrutador:**
  - Se crea un enrutador utilizando la función `Router()` de Express.

- **Middleware de Validación de Token:**
  - Se utiliza el middleware `validateToken` en todas las rutas definidas en este enrutador, lo que garantiza que se requiera autenticación para acceder a estas rutas.

- **Ruta POST para Guardar Nuevos Datos de Control:**
  - Se define una ruta `POST` ("/") que permite la creación de nuevos datos de control. La función del controlador `saveControl` maneja esta operación.

- **Exportación del Enrutador:**
  - Se exporta el enrutador para que pueda ser utilizado por la aplicación principal.
