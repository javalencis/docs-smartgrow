---
id: block-status-component-jsx
title: BlockStatus.jsx
---

# Componente `BlockStatus.jsx`

El componente `BlockStatus.jsx` muestra el estado actual de los bloques en una representación visual comprensible. Utiliza eventos del servidor para mantenerse actualizado con los cambios en los bloques y presenta una representación gráfica del estado actual de cada bloque.

## Contenido del Archivo

```jsx
import React, { Fragment, useEffect, useState } from 'react';
import '../styles/Blocks.scss';
import { getStateBlocks } from '../libs/functions';

export default function BlockStatus() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3001/api/blocks/all');

    eventSource.onmessage = (event) => {
      setBlocks(getStateBlocks(JSON.parse(event.data)));
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <section className="Blocks">
      <h3>Bloques</h3>
      <div className='BlocksList'>
        {blocks.map((block) => (
          <Fragment key={block.bloque}>
            <p className='Block-num'>{block.bloque}</p>
            {block.estado === 'on' && <div className='BlockState on'></div>}
            {block.estado === 'off' && <div className='BlockState off'></div>}
            {block.estado === 'warning' && <div className='BlockState warning'></div>}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
```

## Descripción

- **Estado Local (`useState`):**
  - Utiliza el estado local `blocks` para gestionar el estado actual de los bloques.

- **Obtención de Datos (`useEffect`):**
  - Utiliza `useEffect` para establecer una conexión de eventos (`EventSource`) que actualiza el estado de los bloques en respuesta a cambios en el servidor.

- **Representación Gráfica de Bloques:**
  - Itera sobre el estado de los bloques utilizando `map` y representa cada bloque con un número y un estado visual (`BlockState`). El estado visual se determina según el estado actual del bloque (`on`, `off`, o `warning`).

## Vista del Componente

![bloques](/img/blocks.png)

Este componente proporciona una representación visual clara del estado actual de los bloques y se actualiza en tiempo real en respuesta a cambios en el servidor.
