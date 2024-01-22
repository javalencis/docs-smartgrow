---
id: user-row-jsx
title: UserRow.jsx
---

# Componente `UserRow.jsx`

El componente `UserRow` representa una fila en la tabla de usuarios y muestra información básica sobre cada usuario. Además, incluye opciones de edición y eliminación.

## Contenido del Archivo

```jsx
import React from 'react';
import iEdit from '../assets/icons/editar.svg';
import iDelete from '../assets/icons/eliminar.svg';
import '../styles/UserRow.scss';

// Componente funcional UserRow
export const UserRow = ({ handleClickExpand, data }) => {
    return (
        <tr onClick={handleClickExpand} className="UserRow">
            {/* Columnas con información del usuario */}
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.role}</td>
            
            {/* Columna de opciones (editar y eliminar) */}
            <td className='RowOptions'>
                <div><img src={iEdit} alt="boton editar usuario" /></div> 
                <div><img src={iDelete} alt="boton eliminar usuario" /></div>
            </td>
        </tr>
    );
};
```

## Descripción

- **Propiedades del Componente (`props`):**
  - `handleClickExpand`: Función proporcionada para manejar el clic en la fila y expandirla (si es necesario).
  - `data`: Información del usuario que se muestra en la fila.

- **Estructura JSX de la Fila de Usuario:**
  - La fila incluye columnas con información básica del usuario como nombre, nombre de usuario y rol.
  - La columna de opciones (`RowOptions`) contiene botones de editar y eliminar.

- **Iconos de Editar y Eliminar:**
  - Se utilizan iconos representativos (`iEdit` e `iDelete`) para las opciones de editar y eliminar.

Este componente encapsula la representación visual de una fila de usuario y proporciona la estructura básica para mostrar información sobre cada usuario en la tabla.
