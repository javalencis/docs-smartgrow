---
id: alerts-routes-js
title: alerts.routes.js
---

# Archivo `alerts.routes.js`

El archivo `alerts.routes.js` define las rutas relacionadas con las alertas en la API REST. Estas rutas permiten la consulta, creación y actualización de alertas.

## Contenido del Archivo

```jsx
// Importar el enrutador y funciones del controlador
import { Router } from 'express';
import { findAlerts, updateAlert, createAlert } from '../controllers/alerts.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

// Crear un enrutador de Express
const router = Router();

// Ruta para obtener todas las alertas (sin autenticación)
router.get('/', findAlerts);

// Middleware de validación de token para las siguientes rutas
router.use(validateToken);

// Ruta para crear una nueva alerta
router.post('/', createAlert);

// Ruta para actualizar una alerta existente
router.put('/', updateAlert);

// Exportar el enrutador
export default router;
```

## Descripción

- **Importación de Módulos:**
  - Se importa `Router` desde `express` para crear un enrutador y se importan las funciones del controlador `alerts.controllers.js` para manejar las operaciones CRUD.

- **Creación de un Enrutador:**
  - Se crea un enrutador utilizando la función `Router()` de Express.

- **Ruta GET sin Autenticación:**
  - Se define una ruta `GET` que permite obtener todas las alertas sin requerir autenticación. La función del controlador `findAlerts` maneja esta operación.

- **Middleware de Validación de Token:**
  - Se utiliza el middleware `validateToken` para las rutas siguientes. Este middleware verifica la presencia y validez del token de autorización en la cabecera de la solicitud.

- **Ruta POST con Autenticación:**
  - Se define una ruta `POST` que permite la creación de una nueva alerta. La función del controlador `createAlert` maneja esta operación. Esta ruta requiere autenticación, como se indica por el middleware.

- **Ruta PUT con Autenticación:**
  - Se define una ruta `PUT` que permite la actualización de una alerta existente. La función del controlador `updateAlert` maneja esta operación. Esta ruta también requiere autenticación.

- **Exportación del Enrutador:**
  - Se exporta el enrutador para que pueda ser utilizado por la aplicación principal.
