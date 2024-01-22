---
id: table-jsx
title: Table.jsx
---

# Componente `Table.jsx`

El componente `Table` se encarga de renderizar una tabla HTML con encabezados personalizados y contenido dinámico. Permite definir la estructura de la tabla mediante propiedades como `headers` y `name`.

## Contenido del Archivo

```jsx
import React from "react";

// Componente funcional Table
export const Table = ({ children, headers, name }) => {

    return (
        <table className={name}>
            <thead>
                <tr className="TableHeaders">
                    {/* Renderizar los encabezados de la tabla */}
                    {headers.map((header, index) => (
                        <th className="TableHeader" key={index}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* Renderizar el contenido dinámico de la tabla */}
                {children}
            </tbody>
        </table>
    );
};
```

## Descripción

- **Propiedades:**
  - `children`: Contenido dinámico que se renderiza en el cuerpo de la tabla.
  - `headers`: Array de encabezados que define las columnas de la tabla.
  - `name`: Clase CSS que se aplica a la tabla para estilizarla según sea necesario.

- **Estructura de la Tabla:**
  - `table`: Elemento de tabla HTML.
  - `thead`: Encabezado de la tabla que contiene la fila de encabezados.
  - `tr`: Fila de encabezados.
  - `th`: Celda de encabezado individual con el contenido especificado.

- **Renderizado Dinámico de Contenido:**
  - El contenido dinámico (`children`) se renderiza en el cuerpo de la tabla (`tbody`).

Este componente es útil para crear tablas flexibles con encabezados personalizados y contenido dinámico.
