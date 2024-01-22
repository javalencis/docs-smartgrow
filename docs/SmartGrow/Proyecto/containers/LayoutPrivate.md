---
id: layout-private-jsx
title: LayoutPrivate.jsx
---

# Archivo `LayoutPrivate.jsx`

El archivo `LayoutPrivate.jsx` es un componente de React que define el diseño principal para las páginas privadas de la aplicación. Este componente verifica si el usuario ha iniciado sesión y redirige al usuario a la página de inicio si no ha iniciado sesión.

## Contenido del Archivo

```jsx
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const LayoutPrivate = () => {
  // Obtiene el estado de inicio de sesión del contexto de la aplicación.
  const { isLogin } = useContext(AppContext);

  // Hook de navegación para redirigir al usuario.
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige al inicio si el usuario no ha iniciado sesión.
    if (!isLogin) {
      navigate('/');
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
  - `AppContext`: Contexto de la aplicación que proporciona información sobre el estado de inicio de sesión.

- **Hooks Utilizados:**
  - `useContext`: Hook para acceder al contexto de la aplicación.
  - `useEffect`: Hook para realizar efectos secundarios en componentes funcionales.
  - `useNavigate`: Hook de navegación para redirigir al usuario.

- **Verificación de Inicio de Sesión:**
  - `isLogin`: Estado que indica si el usuario ha iniciado sesión.

- **Efecto Secundario (`useEffect`):**
  - Verifica el estado de inicio de sesión. Si el usuario no ha iniciado sesión, redirige al usuario a la página de inicio.

- **Renderización de Rutas Secundarias:**
  - `<Outlet />`: Renderiza las rutas secundarias dentro del componente. Este es un marcador de posición para las rutas secundarias definidas en la jerarquía de rutas.

Este componente proporciona un diseño principal para las páginas privadas de la aplicación, asegurándose de que el usuario esté autenticado antes de mostrar el contenido privado.

