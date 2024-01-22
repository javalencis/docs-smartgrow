---
id: layout-pages-jsx
title: LayoutPages.jsx
---

# Archivo `LayoutPages.jsx`

El archivo `LayoutPages.jsx` es un componente de React que define el diseño principal de las páginas en la aplicación. Este componente incluye una barra de encabezado (`Header`), un menú lateral (`LateralMenu`), y un contenedor de sección para mostrar el contenido de las páginas.

## Contenido del Archivo

```jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { LateralMenu } from "../components/LateralMenu";
import '../styles/LayoutPages.scss';
import { useAppContext } from "../contexts/AppContext";


export const LayoutPages = ({ children }) => {
  // Para controlar el estado del menú lateral.
  const { openMenu, setOpenMenu } = useAppContext();

  return (
    <section className="PagesContainer">
      {/* Barra de encabezado */}
      <Header setOpenMenu={setOpenMenu} />

      {/* Menú lateral */}
      <LateralMenu />

      {/* Contenedor de sección para el contenido de las páginas */}
      <section className={openMenu ? "PageSectionContainer open" : "PageSectionContainer"}>
        {children}
      </section>
    </section>
  );
};
```

## Descripción

- **Componentes Importados:**
  - `Header`: Componente que representa la barra de encabezado.
  - `LateralMenu`: Componente que representa el menú lateral.
  
- **Estilos Importados:**
  - `LayoutPages.scss`: Archivo de estilos específicos para el componente `LayoutPages`.

- **Propiedades del Componente:**
  - `children`: Elementos secundarios a renderizar dentro del diseño de páginas.

- **Estado del Menú Lateral:**
  - `openMenu`: Estado que controla la apertura o cierre del menú lateral.
  - `setOpenMenu`: Función para actualizar el estado del menú lateral.

- **Estructura del Componente:**
  - `<section className="PagesContainer">`: Contenedor principal del componente `LayoutPages`.
  - `<Header setOpenMenu={setOpenMenu} />`: Barra de encabezado con la capacidad de abrir/cerrar el menú lateral.
  - `<LateralMenu />`: Menú lateral de la aplicación.
  - `<section className={openMenu ? "PageSectionContainer open" : "PageSectionContainer"}>`: Contenedor de sección para el contenido de las páginas.

Este componente define la estructura principal para la disposición de las páginas en la aplicación, incluyendo una barra de encabezado, un menú lateral y un contenedor para el contenido de las páginas.

