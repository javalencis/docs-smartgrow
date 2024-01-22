---
id: validate-token-js
title: validateToken.js
---

# Archivo `validateToken.js`

El archivo `validateToken.js` en la carpeta `middlewares` contiene un middleware para validar tokens de acceso utilizando la biblioteca `jsonwebtoken`.

## Contenido del Archivo

```jsx
// Importar la biblioteca 'jsonwebtoken'
import jwt from 'jsonwebtoken';

// Middleware para validar tokens de acceso
export const validateToken = (req, res, next) => {
    // Obtener el token de la cabecera de autorización
    const token = req.headers.authorization;

    // Verificar la existencia del token en la cabecera
    if (!token) {
        return res.json({
            status: false,
            message: "Error en la cabecera 'authorization'"
        });
    }

    // Verificar la validez del token
    jwt.verify(token, process.env.KEY_SECRET_TOKEN, (error, data) => {
        // En caso de error en la verificación del token
        if (error) {
            return res.json({
                status: false,
                message: "Autenticación denegada"
            });
        }

        // Agregar los datos del usuario al objeto 'req'
        req.user = data;
    });

    // Continuar con la ejecución del siguiente middleware o ruta
    next();
};
```

## Descripción

- **Middleware `validateToken`:**
  - Este middleware verifica la existencia y validez del token de acceso en la cabecera de autorización (`req.headers.authorization`). Si el token no está presente o es inválido, se responde con un mensaje de error. Si el token es válido, se agrega la información del usuario al objeto `req` y se permite continuar con el siguiente middleware o ruta.
