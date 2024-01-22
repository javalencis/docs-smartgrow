---
id: row-jsx
title: Row.jsx
---

# Componente `Row.jsx`

El componente `Row` se encarga de renderizar una fila en una tabla, y puede incluir una sección expandida (detalles adicionales) que se muestra al hacer clic en la fila.

## Contenido del Archivo

```jsx
import React, { useState } from "react";

// Componente funcional Row
export const Row = ({ children, data, RowType, expand }) => {
    // Estado para controlar la expansión de la fila
    const [expanded, setExpanded] = useState(false);

    // Función para manejar el clic en la fila y expandirla o contraerla
    const handleClickExpand = () => {
        setExpanded((prevState) => !prevState);
    };

    return (
        <>
            <RowType handleClickExpand={handleClickExpand} data={data} />
            {expand && expanded && children}
        </>
    );
};
```

## Descripción

- **Estados:**
  - `expanded`: Estado que indica si la fila está actualmente expandida o contraída.

- **Función `handleClickExpand`:**
  - Cambia el estado `expanded` al hacer clic en la fila, expandiendo o contrayendo la sección según el estado actual.

- **Componentes Propios (`RowType`):**
  - `RowType`: Componente que representa la estructura básica de la fila. Se utiliza para renderizar la parte principal de la fila.

- **Sección Expandida (`expand`):**
  - La propiedad `expand` indica si la fila puede expandirse para mostrar detalles adicionales.

- **Renderizado Condicional de la Sección Expandida:**
  - La sección expandida (`children`) se renderiza solo si la fila está configurada como expandible y actualmente expandida.

Este componente es útil para crear filas en tablas con la capacidad de expandir detalles adicionales al hacer clic en la fila.
