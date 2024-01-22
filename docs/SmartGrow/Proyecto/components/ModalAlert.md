---
id: modal-alert-jsx
title: ModalAlert.jsx
---

# Componente `ModalAlert.jsx`

El componente `ModalAlert` proporciona un modal para resolver alertas específicas. Permite a los usuarios con privilegios resolver y editar el estado de una alerta.

## Contenido del Archivo

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../api/api';
import '../styles/ModalAlert.scss';

// Componente funcional ModalAlert
export const ModalAlert = ({ alert, setModalAlert }) => {
    // Hook useForm para manejar el formulario
    const { register, handleSubmit } = useForm();

    // Función para manejar el envío del formulario y resolver la alerta
    const handleOnSubmitForm = async (data) => {
        // Obtener el token de sesión
        const token = sessionStorage.getItem('token');

        // Construir el cuerpo de la solicitud PUT para resolver la alerta
        const body = {
            id: alert._id,
            estado: true,
            edicion: data
        };

        // Realizar una solicitud a la API para resolver la alerta
        const res = await api.put('/alerts', body, {
            headers: {
                Authorization: token
            }
        });

        // Lógica adicional después de resolver la alerta, si es necesario
    };

    // Función para cerrar el modal
    const handleClickExitModal = () => {
        setModalAlert(false);
    };

    return (
        <div className='ModalAlert'>
            <button className='ModalAlert-btnexit' onClick={handleClickExitModal}>
                X
            </button>
            <p className='ModalAlert-description'>{alert.descripcion}</p>
            <div className='ModalAlert-bg'>
                <p>Bloque: {alert.bloque}</p>
                <p>Guirnalda: {alert.guirnalda}</p>
            </div>
            <p className='ModalAlert-status'>Estado: {alert.estado ? "Corregido" : "No Corregido"}</p>
            <form onSubmit={handleSubmit(handleOnSubmitForm)}>
                <div>
                    <select name="component" id="component" {...register('componente')} required>
                        <option value="bombillo">Bombillo</option>
                        <option value="sensor">Sensor</option>
                        <option value="contactor">Contactor</option>
                    </select>
                    <select name="change" id="change" {...register('tipo')} required>
                        <option value="ajuste">Ajuste</option>
                        <option value="cambio">Cambio</option>
                    </select>
                </div>
                <button type='submit'>
                    Resolver
                </button>
            </form>
        </div>
    );
}
```

## Descripción

- **Hook `useForm`:**
  - `useForm`: Hook de `react-hook-form` utilizado para gestionar el formulario y sus validaciones.

- **Manejo del Formulario (`handleOnSubmitForm`):**
  - `handleOnSubmitForm`: Función que se ejecuta al enviar el formulario. Realiza una solicitud a la API para resolver la alerta.

- **Función `handleClickExitModal`:**
  - Cierra el modal al hacer clic en el botón de salida (X).

- **Visualización de la Alerta:**
  - Muestra información detallada de la alerta, como descripción, bloque, guirnalda y estado.

- **Formulario:**
  - Campos para seleccionar el componente y el tipo de cambio asociados a la resolución de la alerta.

## Vista del Componente

![modal usuario](/img/modalalert.png)

Este componente es utilizado por los usuarios con privilegios para resolver alertas específicas.
