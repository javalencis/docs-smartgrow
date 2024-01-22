---
id: block-state-jsx
title: BlockState.jsx
---

# Archivo `BlockState.jsx`

El archivo `BlockState.jsx` es un componente de React que representa el estado de bloques en la aplicación. Este componente integra y muestra información relacionada con el estado de bloques y alertas específicas para los bloques.

## Contenido del Archivo

```jsx
import { Alerts } from "../../components/Alerts";
import BlockStatus from "../../components/BlockStatus";
import '../../styles/GarlandState.scss';

export const BlockState = () => {
  return (
    <div className="GarlandState">
      {/* Componente BlockStatus: Muestra información relacionada con el estado de bloques */}
      <BlockStatus />

      {/* Componente Alerts: Muestra alertas específicas para los bloques */}
      <Alerts type={true} />
    </div>
  );
};
```

## Descripción

- **Componentes Importados:**
  - `Alerts`: Componente que muestra alertas específicas para los bloques.
  - `BlockStatus`: Componente que muestra información relacionada con el estado de bloques.


## Vista del Componente

![imagen de login](/img/garlandstate.png)


