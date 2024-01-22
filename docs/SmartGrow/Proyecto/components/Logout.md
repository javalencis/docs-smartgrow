---
id: logout-jsx
title: Logout.jsx
---

# Componente `Logout.jsx`

El componente `Logout` proporciona la opción para que el usuario cierre sesión en la aplicación. Al hacer clic en el botón "Cerrar Sesión", se elimina el token de sesión y se recarga la página para finalizar la sesión.

## Contenido del Archivo

```jsx
import React from 'react';

// Componente funcional Logout
export const Logout = () => {
    // Manejar clic en el botón para cerrar sesión
    const handleOnClickExit = () => {
        // Eliminar el token de sesión
        sessionStorage.removeItem('token');
        // Recargar la página para finalizar la sesión
        window.location.reload();
    }

    // Estructura JSX del componente Logout
    return (
        <button className="LateralMenuButtonExit" onClick={handleOnClickExit}>
            Cerrar Sesión
        </button>
    );
}
```

## Descripción

- **Manejo de Clic (`handleOnClickExit`):**
  - `handleOnClickExit`: Elimina el token de sesión al hacer clic en el botón "Cerrar Sesión".
  - Recarga la página para finalizar la sesión y aplicar los cambios.

Este componente se utiliza en el menú lateral (`LateralMenu`) para ofrecer una forma sencilla de cerrar sesión en la aplicación.
