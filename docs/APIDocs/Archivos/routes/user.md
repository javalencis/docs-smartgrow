---
id: user-routes-js
title: user.routes.js
---

# Archivo `user.routes.js`

El archivo `user.routes.js` define las rutas relacionadas con los usuarios en la API REST. Proporciona operaciones como registro, inicio de sesión, obtención de perfil y obtención de todos los usuarios.

## Contenido del Archivo

```jsx
// Importar el enrutador y funciones del controlador
import { Router } from 'express';
import { login, profile, register, findUsers } from '../controllers/user.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

// Crear un enrutador de Express
const router = Router();

// Ruta POST para registrar un nuevo usuario
router.post('/register', validateToken, register);

// Ruta POST para iniciar sesión
router.post('/login', login);

// Ruta GET para obtener el perfil del usuario autenticado
router.get('/profile', validateToken, profile);

// Ruta GET para obtener todos los usuarios (requiere autenticación)
router.get('/all', validateToken, findUsers);

// Exportar el enrutador
export default router;
```

## Descripción

- **Importación de Módulos:**
  - Se importa `Router` desde `express` para crear un enrutador y se importan las funciones del controlador `user.controllers.js` y el middleware `validateToken.js`.

- **Creación de un Enrutador:**
  - Se crea un enrutador utilizando la función `Router()` de Express.

- **Ruta POST para Registrar un Nuevo Usuario:**
  - Se define una ruta `POST` ("/register") que permite el registro de un nuevo usuario. La función del controlador `register` maneja esta operación. Se utiliza el middleware `validateToken` para garantizar que solo los usuarios autenticados con un token válido puedan acceder.

- **Ruta POST para Iniciar Sesión:**
  - Se define una ruta `POST` ("/login") que permite la autenticación e inicio de sesión de un usuario. La función del controlador `login` maneja esta operación.

- **Ruta GET para Obtener el Perfil del Usuario Autenticado:**
  - Se define una ruta `GET` ("/profile") que permite obtener el perfil del usuario autenticado. La función del controlador `profile` maneja esta operación. Se utiliza el middleware `validateToken` para garantizar que solo los usuarios autenticados con un token válido puedan acceder.

- **Ruta GET para Obtener Todos los Usuarios (Requiere Autenticación):**
  - Se define una ruta `GET` ("/all") que permite obtener todos los usuarios. La función del controlador `findUsers` maneja esta operación. Se utiliza el middleware `validateToken` para garantizar que solo los usuarios autenticados con un token válido puedan acceder.

- **Exportación del Enrutador:**
  - Se exporta el enrutador para que pueda ser utilizado por la aplicación principal.
