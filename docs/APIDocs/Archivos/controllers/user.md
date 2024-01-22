---
id: user-controllers-js
title: user.controllers.js
---

# Archivo `user.controllers.js`

El archivo `user.controllers.js` contiene los controladores relacionados con la gestión de usuarios en la API. Estos controladores se encargan del registro de usuarios, inicio de sesión, visualización de perfiles y búsqueda de usuarios.

## Contenido del Archivo

```jsx
// Importar funciones y modelos necesarios
import { createAccessToken } from '../libs/jwt.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

// Controlador para registrar un nuevo usuario
export const register = async (req, res) => {
    const { username, password, name, role } = req.body;

    // Verificar permisos de administrador
    if (req.user.role !== 'admin') {
        return res.json({
            status: false,
            message: "Permiso denegado"
        });
    }

    try {
        // Generar hash de la contraseña
        const passwordHash = await bcrypt.hash(password, 10);

        // Crear nuevo usuario y almacenar en la base de datos
        const newUser = new User({
            username,
            password: passwordHash,
            name,
            role
        });

        const userSaved = await newUser.save();

        res.status(200).json({
            status: true,
            message: "Usuario almacenado con éxito",
            user: {
                username: userSaved.username,
                name: userSaved.name,
                role: userSaved.role,
                createdAt: userSaved.createdAt
            }
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Error almacenando usuario",
            error
        });
    }
};

// Controlador para iniciar sesión de un usuario
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar usuario por nombre de usuario
        const userFound = await User.findOne({ username });

        // Verificar coincidencia de contraseñas
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            return res.json({
                status: false,
                message: "Contraseña incorrecta"
            });
        }

        // Crear token de acceso y responder con información del usuario y token
        const token = await createAccessToken({
            id: userFound._id,
            username: userFound.username,
            role: userFound.role,
            name: userFound.name
        });

        res.status(200).json({
            status: true,
            messaje: "Usuario encontrado",
            user: {
                id: userFound._id,
                username: userFound.username,
                role: userFound.role,
                name: userFound.name
            },
            token
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Usuario o contraseña incorrecta",
            error
        });
    }
};

// Controlador para obtener el perfil de un usuario autenticado
export const profile = async (req, res) => {
    // Buscar usuario por su ID y omitir la contraseña en la respuesta
    const userFound = await User.findById(req.user.id).select({ password: 0 });

    if (!userFound) {
        return res.json({
            status: false,
            message: "Usuario no encontrado"
        });
    }

    res.status(200).json({
        status: true,
        message: "Usuario encontrado",
        user: userFound
    });
};

// Controlador para buscar todos los usuarios (sin incluir la contraseña)
export const findUsers = async (req, res) => {
    // Buscar todos los usuarios y omitir la contraseña en la respuesta
    const users = await User.find().select({ password: 0 });

    res.status(200).json({
        status: true,
        users
    });
};
```

## Descripción

- **Controlador `register`:**
  - Registra un nuevo usuario en la base de datos, requiere permisos de administrador.

- **Controlador `login`:**
  - Inicia sesión de un usuario verificando las credenciales y responde con un token de acceso.

- **Controlador `profile`:**
  - Obtiene el perfil del usuario autenticado omitiendo la contraseña en la respuesta.

- **Controlador `findUsers`:**
  - Busca y responde con todos los usuarios de la base de datos (sin incluir la contraseña).
