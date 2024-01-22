---
id: layout-public-jsx
title: LayoutPublic.jsx
---

# Archivo `LayoutPublic.jsx`

El archivo `LayoutPublic.jsx` es un componente de React que define el diseño principal para las páginas públicas de la aplicación. Este componente verifica si el usuario ha iniciado sesión y redirige al usuario a la página correspondiente según su rol.

## Contenido del Archivo

```jsx
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const LayoutPublic = () => {
  // Obtiene el estado de inicio de sesión y la información del usuario del contexto de la aplicación.
  const { user, isLogin } = useContext(AppContext);

  // Hook de navegación para redirigir al usuario.
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica si el usuario ha iniciado sesión.
    if (isLogin) {
      // Redirige al usuario según su rol.
      if (user.role === "admin") {
        navigate('/admin/estado-guirnaldas');
      } else {
        navigate('/app');
      }
    }
  }, [isLogin]);

  return (
    <>
      {/* Renderiza las rutas secundarias dentro del componente */}
      <Outlet />
    </>
  );
};
```

## Descripción

- **Contexto Importado:**
  - `AppContext`: Contexto de la aplicación que proporciona información sobre el estado de inicio de sesión y la información del usuario.

- **Hooks Utilizados:**
  - `useContext`: Hook para acceder al contexto de la aplicación.
  - `useEffect`: Hook para realizar efectos secundarios en componentes funcionales.
  - `useNavigate`: Hook de navegación para redirigir al usuario.

- **Verificación de Inicio de Sesión:**
  - `isLogin`: Estado que indica si el usuario ha iniciado sesión.
  - `user`: Información del usuario.

- **Efecto Secundario (`useEffect`):**
  - Verifica el estado de inicio de sesión. Si el usuario ha iniciado sesión, redirige al usuario según su rol.

- **Renderización de Rutas Secundarias:**
  - `<Outlet />`: Renderiza las rutas secundarias dentro del componente. Este es un marcador de posición para las rutas secundarias definidas en la jerarquía de rutas.

Este componente proporciona un diseño principal para las páginas públicas de la aplicación y redirige al usuario según su rol si ya ha iniciado sesión.

