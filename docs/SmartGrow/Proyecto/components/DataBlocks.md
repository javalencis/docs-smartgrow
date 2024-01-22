---
id: datablocks-component-jsx
title: DataBlocks.jsx
---

# Componente `DataBlocks.jsx`

El componente `DataBlocks.jsx` permite a los usuarios agregar nuevos bloques y configurar sus parámetros correspondientes. Los datos ingresados se envían al servidor para su procesamiento y almacenamiento.

## Contenido del Archivo

```jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../api/api';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/DataBlocks.scss';

export const DataBlocks = () => {
  const { register, handleSubmit } = useForm();
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmitDataBlocks = async (data) => {
    try {
      const token = sessionStorage.getItem('token');
      const dataBlock = { ...data, estado: 'off' };
      const res = await api.post('/garlands/', dataBlock, {
        headers: {
          Authorization: token,
        },
      });

      if (res.data.status) {
        setIsSaved(true);
        setError(false);
        notify();
      } else {
        setError(true);
        setIsSaved(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const notify = () => toast('✅ Agregado Correctamente');

  return (
    <section className="DataBlocks">
      <h3>Agregar bloque</h3>
      {error && <p className='AddError'>La guirnalda ya se encuentra</p>}
      <form onSubmit={handleSubmit(handleSubmitDataBlocks)}>
        <input type="number" placeholder="Bloque" required {...register('bloque')} />
        <input type="number" placeholder="Guirnalda" required {...register('guirnalda')} />
        <input type="number" placeholder="Umbral" required {...register('umbral')} />
        <input type="number" placeholder="Cantidad de Bombillas" required {...register('num_bombillas')} />
        <button type='submit' onClick={notify}>
          Agregar
        </button>
        {isSaved && (
          <Toaster
            position="bottom-center"
            reverseOrder={false}
          />
        )}
      </form>
    </section>
  );
};
```

## Descripción

- **Estado Local (`useState`):**
  - Utiliza el estado local `isSaved` para gestionar si los datos se han almacenado con éxito.
  - Utiliza el estado local `error` para gestionar si se ha producido un error al agregar el bloque.

- **Manejo de Formularios (`useForm`):**
  - Utiliza `useForm` de `react-hook-form` para facilitar el manejo del formulario y la validación de datos.

- **Envío de Datos al Servidor (`handleSubmitDataBlocks`):**
  - Al enviar el formulario, utiliza una solicitud POST a la ruta `/garlands/` del servidor con los datos del nuevo bloque. Si la solicitud es exitosa, actualiza el estado `isSaved`. En caso de error, actualiza el estado `error`.

- **Notificación (`react-hot-toast`):**
  - Utiliza `react-hot-toast` para mostrar una notificación emergente indicando que el bloque se ha agregado correctamente.


## Vista del Componente

![bloque para ingresar datos de bloque](/img/datablock.png)


Este componente proporciona una interfaz intuitiva para que los usuarios agreguen nuevos bloques y configuren sus parámetros.

