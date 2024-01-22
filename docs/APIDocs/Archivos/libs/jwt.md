---
id: jwt-js
title: jwt.js
---

# Archivo `jwt.js`

El archivo `jwt.js` en la carpeta `libs` contiene una función para la creación de tokens de acceso utilizando la biblioteca `jsonwebtoken`.

## Contenido del Archivo

```jsx
// Importar la biblioteca 'jsonwebtoken'
import jwt from 'jsonwebtoken';

// Función para crear un token de acceso
export const createAccessToken = async (payload) => {
    return new Promise((resolve, reject) => {
        // Crear un token con el payload proporcionado
        jwt.sign(
            payload,
            process.env.KEY_SECRET_TOKEN,
            {
                expiresIn: "1d" // Token expira en 1 día
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
};
```

## Descripción

- **Función `createAccessToken`:**
  - Esta función utiliza la biblioteca `jsonwebtoken` para crear un token de acceso con el payload proporcionado. El token generado expira después de un día (`1d`). La función devuelve una promesa que resuelve con el token generado o se rechaza con un error en caso de problemas durante la creación del token.
