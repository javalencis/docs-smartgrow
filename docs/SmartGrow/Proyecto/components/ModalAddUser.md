---
id: modal-add-user-component-jsx
title: ModalAddUser.jsx
---

# Componente `ModalAddUser.jsx`

El componente `ModalAddUser` proporciona un modal para agregar nuevos usuarios a la aplicación. Permite al administrador registrar usuarios con roles específicos.

## Contenido del Archivo

```jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../api/api';
import '../styles/ModalAddUser.scss';

// Componente funcional ModalAddUser
export const ModalAddUser = () => {
    // Estado para gestionar la visualización del mensaje de éxito
    const [savedUserCorrect, setSavedUserCorrect] = useState(false);

    // Hook useForm para manejar el formulario
    const { register, handleSubmit } = useForm();

    // Función para manejar el guardado de un nuevo usuario
    const handleSaveUser = async (data) => {
        // Obtener el token de sesión
        const token = sessionStorage.getItem('token');

        // Realizar una solicitud a la API para registrar el usuario
        const res = await api.post('/users/register', data, {
            headers: {
                Authorization: token
            }
        });

        // Verificar el estado de la respuesta
        if (res.data.status) {
            // Marcar que el usuario se registró correctamente
            setSavedUserCorrect(true);
        }

        console.log(data);
    }

    // Estructura JSX del componente ModalAddUser
    return (
        <div className="ModalAddUser">
            <h3>Agregar Usuario</h3>
            {savedUserCorrect && (
                <p className='MsnSuccess'>Usuario registrado correctamente</p>
            )}
            <form onSubmit={handleSubmit(handleSaveUser)}>
                <input type="text" placeholder="Nombre" {...register('name')} required />
                <input type="text" placeholder="Usuario" {...register('username')} required />
                <div className='SelectRole'>
                    <label htmlFor="role">Rol: </label>
                    <select name="role" id="role" {...register('role')} required>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <input type="password" placeholder="Contraseña" {...register('password')} required />
                <button type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
}
```

## Descripción

- **Estado (`savedUserCorrect`):**
  - Estado que indica si el usuario se registró correctamente.

- **Hook `useForm`:**
  - `useForm`: Hook de `react-hook-form` utilizado para gestionar el formulario y sus validaciones.

- **Manejo del Formulario (`handleSaveUser`):**
  - `handleSaveUser`: Función que se ejecuta al enviar el formulario. Realiza una solicitud a la API para registrar el nuevo usuario.

- **Visualización del Mensaje de Éxito:**
  - Se muestra un mensaje de éxito cuando el usuario se registra correctamente.

- **Formulario:**
  - Campos para ingresar el nombre, usuario, rol y contraseña del nuevo usuario.

## Vista del Componente

![modal usuario](/img/modaluser.png)

Este componente es utilizado para la administración de usuarios por parte del administrador de la aplicación.
