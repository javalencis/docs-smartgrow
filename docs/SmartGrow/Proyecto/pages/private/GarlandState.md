---
id: garland-state-jsx
title: GarlandState.jsx
---

# Archivo `GarlandState.jsx`

El archivo `GarlandState.jsx` es un componente que integra y muestra información relacionada con el estado de las guirnaldas y alertas.

## Contenido del Archivo

```jsx
import { Alerts } from "../../components/Alerts";
import { Blocks } from "../../components/Blocks";
import '../../styles/GarlandState.scss';

export const GarlandState = () => {
  return (
    <div className="GarlandState">
      {/* Componente Blocks: Muestra información relacionada con bloques */}
      <Blocks />

      {/* Componente Alerts: Muestra información relacionada con alertas */}
      <Alerts />
    </div>
  );
};
```

## Descripción

- **Componentes Importados:**
  - `Alerts`: Componente que muestra información relacionada con alertas.
  - `Blocks`: Componente que muestra información relacionada con el estado de las guirnaldas.

- **Estilos Importados:**
  - `GarlandState.scss`: Archivo de estilos específicos para el componente `GarlandState`.



## Vista del Componente

![imagen de login](/img/garlandstate.png)


