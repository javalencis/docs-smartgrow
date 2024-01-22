---
id: app-jsx
title: App.jsx
---

# Archivo `App.jsx`

El archivo `App.jsx` define las rutas principales de la aplicación utilizando `react-router-dom` y organiza la estructura de los componentes en función de estas rutas.

## Contenido del Archivo

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/public/Login";
import { LayoutPublic } from "../containers/LayoutPublic";
import { Admin } from "../pages/private/Admin";
import { User } from "../pages/private/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPublic />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/app/*" element={<User />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Descripción

- **`BrowserRouter, Route, Routes`:** Importación de componentes de `react-router-dom` para gestionar las rutas de la aplicación.

- **Páginas y Contenedores:**
  - `Login`: Página de inicio de sesión.
  - `LayoutPublic`: Contenedor para la disposición de componentes en la sección pública.
  - `Admin`: Página de administrador.
  - `User`: Página de usuario.

- **Estructura de Rutas:**
  - `/` y `/login` están bajo `<LayoutPublic />`, que contiene la página de inicio (`<Login />`).
  - `/admin/*` está asociado con la página de administrador (`<Admin />`).
  - `/app/*` está asociado con la página de usuario (`<User />`).

- **Manejo de Rutas No Coincidentes:**
  - Se proporciona una ruta comodín (`*`) para cualquier otra ruta, mostrando un componente de 404.

Este archivo organiza las rutas de la aplicación y especifica qué componente debe renderizarse en función de la ruta actual. Es fundamental para la navegación y la estructura general de la aplicación.
