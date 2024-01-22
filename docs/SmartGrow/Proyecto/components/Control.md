---
id: control-component-jsx
title: Control.jsx
---

# Componente `Control.jsx`

El componente `Control.jsx` permite a los usuarios ajustar y controlar la configuración de tiempo para el encendido y apagado de bloques. Los datos ingresados se envían al servidor para su procesamiento y almacenamiento.

## Contenido del Archivo

```jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Control.scss';
import api from '../api/api';

export const Control = () => {
  const [isSaved, setIsSaved] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleSubmitFormControl = async (data) => {
    try {
      const token = sessionStorage.getItem('token');
      const blockControl = {
        hora_inicio: data.start_time + ':00',
        hora_final: data.end_time + ':00',
        tiempo_encendido: Number(data.on_time),
        tiempo_apagado: Number(data.off_time),
        bloque: parseInt(data.block),
      };

      const res = await api.post('/control/', blockControl, {
        headers: {
          Authorization: token,
        },
      });

      if (res.status === 200) {
        setIsSaved(true);
      } else {
        throw new Error('Error al almacenar los datos.');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="Control">
      <h3>Control</h3>
      {isSaved && <p>Datos almacenados con éxito</p>}
      <form onSubmit={handleSubmit(handleSubmitFormControl)}>
        <div>
          <label htmlFor="block">Bloque:</label>
          <input type="number" id="block" min="1" max="20" required {...register('block')} />
        </div>
        <div>
          <label htmlFor="startTime">Hora de inicio:</label>
          <input type="time" id="startTime" required {...register('start_time')} />
        </div>
        <div>
          <label htmlFor="endTime">Hora final:</label>
          <input type="time" id="endTime" required {...register('end_time')} />
        </div>
        <div>
          <label htmlFor="onTime">Tiempo de encendido:</label>
          <input type="number" id="onTime" required {...register('on_time')} />
        </div>
        <div>
          <label htmlFor="offTime">Tiempo de apagado:</label>
          <input type="number" id="offTime" required {...register('off_time')} />
        </div>
        <button type="submit">Aplicar</button>
      </form>
    </section>
  );
};
```

## Descripción

- **Estado Local (`useState`):**
  - Utiliza el estado local `isSaved` para gestionar si los datos se han almacenado con éxito.

- **Manejo de Formularios (`useForm`):**
  - Utiliza `useForm` de `react-hook-form` para facilitar el manejo del formulario y la validación de datos.

- **Envío de Datos al Servidor (`handleSubmitFormControl`):**
  - Al enviar el formulario, utiliza una solicitud POST a la ruta `/control/` del servidor con los datos del bloque de control. Si la solicitud es exitosa, actualiza el estado `isSaved`.


## Vista del Componente

![bloque de control](/img/control.png)


Este componente proporciona una interfaz simple para ajustar la configuración de tiempo y controlar el encendido y apagado de bloques.

