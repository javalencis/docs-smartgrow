---
id: alert-row-component-jsx
title: AlertRow.jsx
---

# Componente `AlertRow.jsx`

El componente `AlertRow.jsx` representa una fila de datos para una alerta en una tabla. Esta fila se utiliza comúnmente en una tabla que muestra una lista de alertas con información resumida.

## Contenido del Archivo

```jsx
import React from 'react';
import { formatDate } from "../libs/functions";
import '../styles/AlertRow.scss';

export const AlertRow = ({ handleClickExpand, data }) => {
    // Renderizar una fila de alerta
    return (
        <tr onClick={handleClickExpand} className="AlertRow">
            <td>{formatDate(data.createdAt)}</td>
            <td>{data.descripcion}</td>
            <td>{data.bloque}</td>
            <td>{data.guirnalda}</td>
            <td>{data.estado ? 'Corregido' : 'No Corregido'}</td>
        </tr>
    );
};
```

## Descripción

- **Funciones Auxiliares (`import { formatDate } from "../libs/functions"`):**
  - Se importa la función `formatDate` desde el archivo `functions.js` en la carpeta `libs`. Esta función se utiliza para formatear la fecha de creación de la alerta.

- **Propiedades (`handleClickExpand`, `data`):**
  - `handleClickExpand`: Función que se activa al hacer clic en la fila de la alerta para expandir detalles (opcional).
  - `data`: Contiene la información de la alerta a ser mostrada en la fila.

- **Renderizado de la Fila:**
  - La fila se compone de varias columnas (`td`) que representan diferentes propiedades de la alerta, como la fecha, la descripción, el bloque, la guirnalda y el estado.

- **Estilos (`../styles/AlertRow.scss`):**
  - Se importa el archivo de estilos `AlertRow.scss` para aplicar estilos específicos a la fila de alerta.


## Vista del Componente

![imagen de login](/img/alertrow.png)

Este componente es útil para mostrar resúmenes de alertas en una tabla y puede ser utilizado en vistas que requieren una representación más compacta de los datos de alerta.

