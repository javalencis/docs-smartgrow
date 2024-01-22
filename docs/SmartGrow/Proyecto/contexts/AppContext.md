---
id: app-context-jsx
title: AppContext.jsx
---

# Archivo `AppContext.jsx`

El archivo `AppContext.jsx` define el contexto global de la aplicación utilizando [React Context API](https://react.dev/reference/react/createContext). Este contexto proporciona información sobre el usuario, el estado de inicio de sesión y otras variables compartidas en la aplicación.

## Contenido del Archivo

```jsx
import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

// Crear el contexto de la aplicación
export const AppContext = createContext();

// Proveedor de contexto que envuelve la aplicación
export const AppProvider = ({ children }) => {
    // Estados del contexto
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    // Efecto secundario para validar el usuario al cargar la aplicación
    useEffect(() => {
        validateUser();
    }, []);

    // Función para validar el usuario mediante la API
    const validateUser = async () => {
        const token = sessionStorage.getItem('token');

        if (!token) {
            return false;
        }

        try {
            const res = await api.get('/users/profile', {
                headers: {
                    Authorization: token
                }
            });

            if (res.data.status) {
                setUser(res.data.user);
                setIsLogin(true);
            }
        } catch (error) {
            // Manejar el error, por ejemplo, limpiar el token y el estado de inicio de sesión
            console.error("Error al validar el usuario:", error);
            sessionStorage.removeItem('token');
            setUser({});
            setIsLogin(false);
        }
    };

    // Proporcionar el contexto a los componentes hijos
    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                isLogin,
                setIsLogin,
                openMenu,
                setOpenMenu
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// Hook personalizado para acceder al contexto
export const useAppContext = () => (useContext(AppContext));
```

## Descripción

- **Contexto Creado:**
  - `AppContext`: Contexto de la aplicación que almacena información compartida.

- **Proveedor de Contexto (`AppProvider`):**
  - Proveedor de contexto que envuelve la aplicación y proporciona los valores del contexto a los componentes hijos.

- **Estados del Contexto:**
  - `user`: Estado que almacena la información del usuario.
  - `isLogin`: Estado que indica si el usuario está autenticado.
  - `openMenu`: Estado que controla la visibilidad del menú.

- **Efecto Secundario (`useEffect`):**
  - Al cargar la aplicación, se valida el usuario utilizando la función `validateUser`.

- **Función `validateUser`:**
  - Verifica la existencia de un token de sesión.
  - Realiza una solicitud a la API para validar el usuario.
  - Actualiza los estados `user` e `isLogin` según la respuesta de la API.

- **Proporcionar el Contexto:**
  - El componente `AppProvider` proporciona el contexto y sus valores a los componentes hijos.

- **Hook Personalizado (`useAppContext`):**
  - `useAppContext`: Hook personalizado para acceder al contexto desde cualquier componente hijo.

- **Tipo de Petición (`api.get`):**
  - La función `validateUser` realiza una petición GET a la ruta `/users/profile` de la API utilizando el token de autorización en los encabezados.

- **Tipo de Autorización (`Bearer Token`):**
  - Se utiliza el esquema de autorización Bearer, donde el token de sesión se envía en los encabezados de la solicitud. Esto asegura que la solicitud esté autenticada correctamente.

Este contexto global permite compartir información clave de la aplicación entre diferentes componentes, y la validación del usuario implica una solicitud a la API utilizando el método GET y un token de autorización.

