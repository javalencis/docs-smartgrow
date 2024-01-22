---
id: layout-modal-jsx
title: LayoutModal.jsx
---

# Archivo `LayoutModal.jsx`

El archivo `LayoutModal.jsx` es un componente de React que representa un diseño modal simple. Este componente se utiliza para crear un área modal en la interfaz de usuario y permite cerrar el modal haciendo clic fuera de él.

## Contenido del Archivo

```jsx
import '../styles/LayoutModal.scss';

export const LayoutModal = ({ children, setModalAlert }) => {
  /**
   * Maneja el clic en el área del modal. Cierra el modal si se hace clic fuera de él.
   */
  const handleClickModal = (event) => {
    if (event.target.className === 'LayoutModal') {
      setModalAlert((prevState) => !prevState);
    }
  };

  return (
    <div className='LayoutModal' onClick={handleClickModal}>
      {children}
    </div>
  );
};
```

## Descripción

- **Estilos Importados:**
  - `LayoutModal.scss`: Archivo de estilos específicos para el componente `LayoutModal`.

- **Propiedades del Componente:**
  - `children`: Elementos secundarios a renderizar dentro del modal.
  - `setModalAlert`: Función para controlar el estado del modal.

- **Estructura del Componente:**
  - `<div className='LayoutModal'>`: Contenedor principal del componente `LayoutModal`.

- **Funcionalidad del Modal:**
  - `handleClickModal`: Función que maneja el clic en el área del modal. Cierra el modal si se hace clic fuera de él.

Este componente proporciona una estructura básica para la creación de modales en la interfaz de usuario, permitiendo la inclusión de contenido personalizado en su interior.
