---
id: alert-component-jsx
title: Alert.jsx
---

# Componente `Alert.jsx`

El componente `Alert.jsx` se encarga de representar visualmente una alerta en la interfaz de usuario. Este componente puede ser utilizado para mostrar información sobre alertas relacionadas con bloques en la aplicación.

## Contenido del Archivo

```jsx
import React from 'react';
import '../styles/Alert.scss';

export const Alert = ({ data, setModalAlert, setAlertClick, type }) => {
    // Manejar el clic en la alerta
    const handleOnClickAlert = () => {
        setAlertClick(data);
        setModalAlert(true);
    };

    // Renderizar la alerta
    return (
        <div className={data.estado ? "Alert corrected" : "Alert not_corrected"} onClick={handleOnClickAlert}>
            <div className="AlertLeft">
                <p className="AlertLeft-description">{data.descripcion}</p>
                <div className="AlertLeft-bg">
                    <p>Bloque: {data.bloque}</p>
                    {!type && <p>Guirnalda: {data.guirnalda}</p>}
                </div>
            </div>
            <div className="AlertRight">
                <p className="AlertRight-status">Estado: {data.estado ? "Corregido" : "No corregido"}</p>
                {data.usuario && <p className="AlertRight-user">Por: {data.usuario.usuario}</p>}
            </div>
        </div>
    );
};
```

## Descripción

- **Estilos (`../styles/Alert.scss`):**
  - Se importa el archivo de estilos `Alert.scss` para aplicar estilos específicos al componente.

- **Propiedades (`data`, `setModalAlert`, `setAlertClick`, `type`):**
  - `data`: Contiene la información de la alerta a ser mostrada.
  - `setModalAlert`: Función para establecer el estado del modal de alerta.
  - `setAlertClick`: Función para establecer la alerta seleccionada.
  - `type`: Indica el tipo de alerta (opcional).

- **Manejo de Clic (`handleOnClickAlert`):**
  - Cuando se hace clic en la alerta, se activa la función `handleOnClickAlert`, que establece la alerta seleccionada y muestra el modal de alerta.

- **Renderizado de Alerta:**
  - La alerta se representa visualmente con dos secciones (`AlertLeft` y `AlertRight`).
  - La información como la descripción, el bloque, la guirnalda, el estado y el usuario se muestra de acuerdo a la estructura del objeto `data`.


## Vista del Componente

![imagen de login](/img/alert.png)



Este componente es reutilizable y puede ser integrado en diferentes partes de la aplicación para mostrar información sobre alertas.

