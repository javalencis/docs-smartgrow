---
id: user-jsx
title: User.jsx
---

# Archivo `User.jsx`

El archivo `User.jsx` es un componente de React que representa la sección de del rol usuario de la aplicación. Este componente utiliza rutas de `react-router-dom` para mostrar diferentes vistas dentro de la sección de usuario.

## Contenido del Archivo

```jsx
import { Route, Routes, useNavigate } from "react-router-dom";
import { GarlandState } from "./GarlandState";
import { Alerts } from "../../components/Alerts";
import { LayoutPages } from "../../containers/LayoutPages";
import { useEffect } from "react";
import { useAppContext } from "../../contexts/AppContext";

export const User = () => {
  const { isLogin } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige al inicio si el usuario no ha iniciado sesión.
    if (!isLogin) {
      navigate('/');
    }
  }, [isLogin]);

  return (
    <LayoutPages>
      <Routes>
        {/* Vista de inicio para la sección de usuario */}
        <Route index element={<GarlandState />} />

        {/* Vista de estado de guirnaldas */}
        <Route path='/estado-guirnaldas' element={<GarlandState />} />

        {/* Vista de alertas */}
        <Route path='/alertas' element={<Alerts view={"alerts"} />} />
      </Routes>
    </LayoutPages>
  );
};
```

## Descripción

- **Componentes Importados:**
  - `GarlandState`: Componente que representa el estado general de una guirnalda.
  - `Alerts`: Componente que muestra información relacionada con alertas.
  - `LayoutPages`: Componente que proporciona el diseño de las páginas de usuario.

- **Rutas y Componentes:**
  - `/`: Muestra la vista de inicio para la sección de usuario.
  - `/estado-guirnaldas`: Muestra la vista de `GarlandState`.
  - `/alertas`: Muestra la vista de `Alerts` con el prop `view` establecido en `"alerts"`.

- **Efecto Secundario (`useEffect`):**
  - Verifica si el usuario ha iniciado sesión. Si no ha iniciado sesión, redirige al usuario a la página de inicio.

- **`LayoutPages`:** Utiliza el componente `LayoutPages` como contenedor principal para la sección de usuario.

Este componente organiza y presenta las diferentes vistas dentro de la sección de usuario de la aplicación, este componente esta desactualizado.
