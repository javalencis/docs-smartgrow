---
id: lateral-menu-jsx
title: LateralMenu.jsx
---

# Componente `LateralMenu.jsx`

El componente `LateralMenu` representa el menú lateral de la aplicación, que contiene enlaces de navegación y opciones específicas según el rol del usuario. Este componente se utiliza para la navegación y ofrece acceso rápido a diferentes secciones de la aplicación.

## Contenido del Archivo

```jsx
import React from 'react';
import { useAppContext } from "../contexts/AppContext";
import { Logout } from "./Logout";
import { NavItem } from "./NavItem";
import { menuRole } from "../libs/menus.js";
import '../styles/LateralMenu.scss';

// Componente funcional LateralMenu
export const LateralMenu = () => {
  // Obtener datos del contexto
  const { user, openMenu, setOpenMenu } = useAppContext();

  // Manejar clic en el botón para cerrar el menú lateral
  const handleOnClickExitMenu = () =>{
    setOpenMenu(e => !e);
  }

  // Estructura JSX del componente LateralMenu
  return (
    <div className={openMenu ? "LateralMenu open" : "LateralMenu"}>
      <button className="LateralMenuExit" onClick={handleOnClickExitMenu}>
        X
      </button>
      <h1>SmartGrow</h1>
      <nav>
        {/* Mapear elementos del menú según el rol del usuario */}
        {menuRole(user.role).map((item, index) => (
          <NavItem
            key={index}
            to={item.to}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </nav>
      <Logout />
    </div>
  );
}
```

## Descripción

- **Datos del Contexto (`useAppContext`):**
  - `user`: Información sobre el usuario obtenida del contexto.
  - `openMenu`: Estado que indica si el menú lateral está abierto o cerrado.
  - `setOpenMenu`: Función para cambiar el estado del menú lateral.

- **Manejo de Clic (`handleOnClickExitMenu`):**
  - `handleOnClickExitMenu`: Abre o cierra el menú lateral al hacer clic en el botón "X".

- **Elementos del Menú (`NavItem`):**
  - Se utilizan elementos de navegación (`NavItem`) para representar cada opción del menú.

- **Logout (`Logout`):**
  - Componente que proporciona la opción de cerrar sesión en la aplicación.


## Vista del Componente

![menu lateral](/img/lateralmenu.png)

Este componente permite una navegación fácil y proporciona opciones específicas según el rol del usuario, contribuyendo a una experiencia de usuario intuitiva.
