---
id: login-jsx
title: Login.jsx
---

# Archivo `Login.jsx`

El archivo `Login.jsx` es un componente de React que representa la página de inicio de sesión de la aplicación. Este componente utiliza `react-hook-form` para gestionar el formulario de inicio de sesión, se comunica con la API mediante `axios`, y utiliza el contexto de la aplicación para gestionar el estado de autenticación.

## Contenido del Archivo

```jsx
import { useForm } from 'react-hook-form';
import imgLogin from '../../assets/imgs/imgLogin.jpg';
import imgLogo from '../../assets/imgs/logo.png';
import '../../styles/Login.scss';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';

/**
 * Componente que representa la página de inicio de sesión.
 */
export const Login = () => {
    // Estado para gestionar el estado de error durante el inicio de sesión.
    const [error, setError] = useState(false);

    // Hook useForm para gestionar el formulario de inicio de sesión.
    const { register, handleSubmit } = useForm();

    // Contexto de la aplicación para gestionar el estado global.
    const { setIsLogin, setUser } = useContext(AppContext);

    // Hook de react-router para navegar entre las rutas de la aplicación.
    const navigate = useNavigate();

    /**
     * Función que maneja el envío del formulario de inicio de sesión.
     */
    const onSubmitFormLogin = async (data) => {
        try {
            // Envía una solicitud POST a la API para autenticar al usuario.
            const res = await api.post('/users/login', data);

            if (res.data.status) {
                // Si la autenticación es exitosa, actualiza el estado global.
                sessionStorage.setItem('token', res.data.token);
                setUser(res.data.user);
                setIsLogin(true);

                // Redirige a rutas específicas según el rol del usuario.
                if (res.data.user.role === 'admin') {
                    navigate('/admin/estado-guirnaldas');
                } else {
                    navigate('/app/estado-guirnaldas');
                }
            } else {
                // Muestra un mensaje de error si la autenticación falla.
                throw new Error('Usuario o contraseña incorrecto');
            }
        } catch (error) {
            setError(true); // Establece el estado de error en true en caso de error.
        }
    };

    return (
        <section className="Login">
            <div className="LoginContainer">
                <div className='Login-img'>
                    <img src={imgLogin} alt="" />
                </div>

                <form onSubmit={handleSubmit(onSubmitFormLogin)}>
                    <img src={imgLogo} alt="" />

                    {error && (
                        <p className='LoginError'>Usuario o contraseña incorrectas</p>
                    )}

                    {/* Entrada para el nombre de usuario */}
                    <input
                        type="text"
                        placeholder="Usuario"
                        {...register('username')}
                        required
                    />
                    
                    {/* Entrada para la contraseña */}
                    <input
                        type="password"
                        placeholder="Contraseña"
                        {...register('password')}
                        required
                    />

                    {/* Botón de envío del formulario */}
                    <button type='submit'>
                        Ingresar
                    </button>
                </form>
            </div>
        </section>
    );
};
```

## Descripción

- **`react-hook-form`:** Importación de la biblioteca para manejar formularios de manera eficiente en React.

- **Imágenes y Estilos:** Importación de imágenes y estilos específicos para la página de inicio de sesión.

- **API y Contexto de Aplicación:** Uso de `axios` para realizar solicitudes a la API y del contexto de la aplicación para gestionar el estado de autenticación.

- **Formulario de Inicio de Sesión:** Implementación de un formulario que captura el nombre de usuario y la contraseña del usuario.

- **Manejo de Errores:** Mostrado de un mensaje de error en caso de que ocurra un error durante el inicio de sesión.

- **Redirección según el Rol:** Redirección a diferentes rutas dependiendo del rol del usuario autenticado.

Este componente es esencial para la autenticación y proporciona una interfaz  para que los usuarios inicien sesión en la aplicación.

## Vista del Componente

![imagen de login](/img/login.png)



Este componente es esencial para la autenticación y proporciona una interfaz  para que los usuarios inicien sesión en la aplicación.