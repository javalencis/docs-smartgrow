---
id: nav-item-jsx
title: NavItem.jsx
---

# Componente `NavItem.jsx`

El componente `NavItem` se encarga de renderizar elementos de navegación (`NavLink`) en el menú lateral. Al hacer clic en un elemento de navegación, el menú lateral se cierra.

## Contenido del Archivo

```jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

// Componente funcional NavItem
export const NavItem = ({ to, title, icon }) => {
    // Acceder al contexto de la aplicación para cerrar el menú lateral
    const { setOpenMenu } = useAppContext();

    // Función para cerrar el menú lateral al hacer clic en un elemento de navegación
    const handleOpenMenuLateral = () => {
        setOpenMenu((prevState) => !prevState);
    };

    // Estructura JSX del componente NavItem
    return (
        <NavLink to={to} onClick={handleOpenMenuLateral}>
            <div>
                <img src={icon} alt={title} />
                {title}
            </div>
            <span></span>
        </NavLink>
    );
}
```

## Descripción

- **Acceso al Contexto (`useAppContext`):**
  - `useAppContext`: Hook utilizado para acceder al contexto de la aplicación.

- **Función `handleOpenMenuLateral`:**
  - Cierra el menú lateral al hacer clic en un elemento de navegación.

- **Elemento de Navegación (`NavLink`):**
  - Proporciona una ruta (`to`), un título (`title`) y un ícono (`icon`) para el elemento de navegación.

- **Menú Lateral Cerrado:**
  - Al hacer clic en un elemento de navegación, el menú lateral se cierra

Este componente se utiliza para generar enlaces de navegación en el menú lateral de la aplicación.
