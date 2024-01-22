---
id: functions-js
title: functions.js
---

# Archivo `functions.js`

El archivo `functions.js` contiene funciones que se utilizan para generar alertas en la aplicación. Estas funciones son utilizadas para evaluar mensajes recibidos y generar alertas en consecuencia.

## Contenido del Archivo

```jsx
// Importar modelo de Alerta y objeto de la aplicación
import Alert from '../models/alert.model.js';
import app from '../app.js';

// Función para generar alerta en una guirnalda
export const generateAlert = async (messageReceive, garland) => {
    // Comprobar si la lectura es menor que el umbral de la guirnalda
    if (messageReceive.lectura < garland.umbral) {
        // Crear nueva alerta y almacenar en la base de datos
        const newAlert = new Alert({
            bloque: messageReceive.bloque,
            guirnalda: messageReceive.guirnalda,
            descripcion: "Problema en guirnalda"
        });
        await newAlert.save();

        // Emitir evento de alerta
        app.emit('alert');

        return true;
    }
    return false;
};

// Función para generar alerta en un bloque
export const generateAlertBlocks = async (messageReceive) => {
    // Crear nueva alerta y almacenar en la base de datos
    const newAlert = new Alert({
        bloque: messageReceive.bloque,
        descripcion: "Problema en bloque"
    });
    await newAlert.save();

    // Emitir evento de alerta
    app.emit('alert');
};
```

## Descripción

- **Función `generateAlert`:**
  - Esta función se utiliza para generar una alerta cuando la lectura de una guirnalda es menor que el umbral establecido. Crea una nueva alerta en la base de datos y emite un evento de alerta.

- **Función `generateAlertBlocks`:**
  - Esta función se utiliza para generar una alerta en un bloque en particular. Crea una nueva alerta en la base de datos y emite un evento de alerta.
