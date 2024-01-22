---
id: filteralerts-component-jsx
title: FilterAlerts.jsx
---

# Componente `FilterAlerts.jsx`

El componente `FilterAlerts.jsx` proporciona una interfaz para filtrar las alertas en función de diferentes criterios, como fechas, bloques y guirnaldas.

## Contenido del Archivo

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/FilterAlerts.scss';
import { arrayFilter } from '../libs/functions';

export const FilterAlerts = ({ alerts, setAlertsAux }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleClickFilter = (data) => {
    setAlertsAux(arrayFilter(alerts, data));
  };

  return (
    <>
      <form className='FilterAlerts' onSubmit={handleSubmit(handleClickFilter)}>
        <div className='FilterAlertsDates'>
          <div>
            <label htmlFor="dateStart">Fecha inicio</label>
            <input type="date" id='dateStart' {...register('fecha_inicio')} />
          </div>
          <div>
            <label htmlFor="dateEnd">Fecha final</label>
            <input type="date" id='dateEnd' {...register('fecha_final')} />
          </div>
        </div>
        <div className='FilterAlertsNumbers'>
          <div>
            <label htmlFor="block">Bloque</label>
            <input type="number" id='block' {...register('bloque')} />
          </div>
          <div>
            <label htmlFor="garland">Guirnalda</label>
            <input type="number" id='garland' {...register('guirnalda')} />
          </div>
          <button type='submit'>Filtrar</button>
          <button onClick={() => reset()}>Limpiar</button>
        </div>
      </form>
    </>
  );
};
```

## Descripción

- **Manejo de Formularios (`useForm`):**
  - Utiliza `useForm` de `react-hook-form` para gestionar el formulario y la validación de datos.

- **Función de Filtrado (`handleClickFilter`):**
  - Al enviar el formulario, utiliza la función `arrayFilter` del archivo `functions.js` para filtrar las alertas en función de los criterios ingresados y actualiza el estado de `AlertsAux`.

- **Botón de Limpiar (`reset`):**
  - Agrega un botón para limpiar los campos del formulario

## Vista del Componente

![filtros](/img/filters.png)



Este componente permite a los usuarios filtrar las alertas según varios criterios, facilitando la búsqueda y visualización de información específica.

