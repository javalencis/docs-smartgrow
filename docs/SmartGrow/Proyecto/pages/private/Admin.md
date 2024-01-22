---
id: admin-jsx
title: Admin.jsx
---

# Archivo `Admin.jsx`

El archivo `Admin.jsx` es un componente de React que representa la sección de administración de la aplicación. Este componente utiliza rutas de `react-router-dom` para mostrar diferentes vistas dentro de la sección de administración.

## Contenido del Archivo

```jsx
import { useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { GarlandState } from './GarlandState';
import { Alerts } from '../../components/Alerts';
import { LayoutPages } from '../../containers/LayoutPages';
import { Control } from '../../components/Control';
import { UserManagement } from '../../components/UserManagement';
import { DataBlocks } from '../../components/DataBlocks';
import { BlockState } from './BlockState';

export const Admin = () => {
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
        <Route index element={<GarlandState />} />
        <Route path='/estado-guirnaldas' element={<GarlandState />} />
        <Route path='/alertas' element={<Alerts view={"alerts"} />} />
        <Route path='/control' element={<Control />} />
        <Route path='/usuarios' element={<UserManagement />} />
        <Route path='/datos-bloque' element={<DataBlocks />} />
        <Route path='/estado-bloques' element={<BlockState />} />
      </Routes>
    </LayoutPages>
  );
};
```

## Descripción

- **`useEffect`:** Utiliza el hook [`useEffect` ](https://es.react.dev/reference/react/useEffect) para verificar si el usuario ha iniciado sesión. Si no ha iniciado sesión, redirige al usuario a la página de inicio.

- **Rutas y Componentes:**
  - `/` y `/estado-guirnaldas`: Muestra la vista de [`GarlandState`](../public/login-jsx).
  - `/alertas`: Muestra la vista de `Alerts` con el prop `view` establecido en `"alerts"`.
  - `/control`: Muestra la vista de `Control`.
  - `/usuarios`: Muestra la vista de `UserManagement`.
  - `/datos-bloque`: Muestra la vista de `DataBlocks`.
  - `/estado-bloques`: Muestra la vista de `BlockState`.

- **`LayoutPages`:** Utiliza el componente `LayoutPages` como contenedor principal para la sección de administración.


## Vista al Iniciar Sesión

![imagen de login](/img/admin.png)

Este componente organiza y presenta las diferentes vistas dentro de la sección de administración de la aplicación.