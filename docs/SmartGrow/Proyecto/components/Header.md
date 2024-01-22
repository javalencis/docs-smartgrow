---
id: header-jsx
title: Header.jsx
---

# Componente `Header.jsx`

El componente `Header` representa la barra de encabezado de la aplicación, que contiene el menú desplegable, el logo y el botón de notificaciones. Este componente se utiliza en el diseño de las páginas y proporciona funcionalidades para la navegación y la gestión de notificaciones.

## Contenido del Archivo

```jsx
import React from 'react';
import iMenu from '../assets/icons/menu-burger.png';
import iAlert from '../assets/icons/alertas.png';
import iLogo from '../assets/imgs/logoblanco.png';
import '../styles/Header.scss';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

// Componente funcional Header
export const Header = ({ setOpenMenu }) => {
    // Obtener datos del contexto
    const { user } = useAppContext();
    const navigate = useNavigate();

    // Manejar clic en el botón de menú para abrir o cerrar el menú lateral
    const handleClickOpenMenu = () => {
        setOpenMenu(e => !e);
    }

    // Manejar clic en el botón de notificaciones para dirigir a la página correspondiente
    const handleClickNotifications = ()  => {
        // Redirigir a la página de alertas según el rol del usuario
        if (user.role === 'admin') {
            navigate('/admin/alertas');
        } else {
            navigate('/app/alertas');
        }
    }

    // Estructura JSX del componente Header
    return (
        <header className="Header">
            <div className="HeaderMenuBurger" onClick={handleClickOpenMenu}>
                <img src={iMenu} alt="Menú desplegable" />
            </div>
            <div className="HeaderLogo">
                <img src={iLogo} alt="Logo capiro blanco" />
            </div>
            <div className="HeaderNotifications" onClick={handleClickNotifications}>
                <img src={iAlert} alt="Botón de notificaciones" />
            </div>
        </header>
    );
}
```

## Descripción

- **Propiedades:**
  - `setOpenMenu`: Función para cambiar el estado del menú lateral en el componente padre.

- **Datos del Contexto (`useAppContext`):**
  - `user`: Información sobre el usuario obtenida del contexto.

- **Manejo de Clic (`handleClickOpenMenu` y `handleClickNotifications`):**
  - `handleClickOpenMenu`: Abre o cierra el menú lateral al hacer clic en el botón de menú.
  - `handleClickNotifications`: Dirige al usuario a la página de alertas según su rol al hacer clic en el botón de notificaciones.

Este componente proporciona la interfaz de usuario para la navegación y acceso rápido a las notificaciones, ofreciendo una experiencia consistente en la aplicación.
