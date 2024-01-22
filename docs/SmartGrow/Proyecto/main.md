---
id: main-jsx
title: main.jsx
sidebar_position: 1
---

# Archivo `main.jsx`

El archivo `main.jsx` es el punto de entrada principal de la aplicación. Este archivo se encarga de renderizar el componente principal de la aplicación, configurar el contexto de la aplicación y aplicar estilos globales.

## Contenido del Archivo

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './styles/global.scss';
import { AppProvider } from './contexts/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppProvider>
      <App />
    </AppProvider>
  </>,
);
```

## Descripción

- **`React` y `ReactDOM`:** Importación de las bibliotecas principales de React necesarias para la creación y renderizado de componentes.

- **`App` Componente Principal:** Importación del componente principal de la aplicación, que se encuentra en el directorio de rutas (`./routes/App.jsx`).

- **Estilos Globales:** Importación del archivo de estilos globales (`global.scss`), que se aplicarán a toda la aplicación.

- **`AppProvider` del Contexto:** Uso del componente `AppProvider` del contexto (`./contexts/AppContext.jsx`) para proporcionar datos y funcionalidades a lo largo de la aplicación.

- **Renderización del Componente Principal:** Utilización de `ReactDOM.createRoot` para renderizar el componente principal `App` dentro del elemento con el ID `root` en el HTML del documento.

Este archivo establece la base para la aplicación, inicializando el contexto de la aplicación y renderizando el componente principal. Cualquier configuración adicional necesaria para el inicio de la aplicación se realiza aquí.

---
