---
id: alerts-controllers-js
title: alerts.controllers.js
---

# Archivo `alerts.controllers.js`

El archivo `alerts.controllers.js` contiene los controladores que gestionan las operaciones relacionadas con las alertas en la API. Estos controladores se encargan de buscar alertas, actualizar el estado de una alerta y crear nuevas alertas.

## Contenido del Archivo

```jsx
// Importar el modelo de Alerta y la instancia de la aplicación Express
import Alert from '../models/alert.model.js';
import app from '../app.js';

// Controlador para buscar alertas y establecer una conexión SSE (Server-Sent Events)
export const findAlerts = async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    const alerts = await Alert.find();
    res.write(`data: ${JSON.stringify(alerts)}\n\n`);

    // Configurar un oyente para eventos de alerta y enviar actualizaciones a través de SSE
    app.on('alert', async () => {
        const alerts = await Alert.find();
        res.write(`data: ${JSON.stringify(alerts)}\n\n`);
    });
};

// Controlador para actualizar el estado y la edición de una alerta
export const updateAlert = async (req, res) => {
    const { id, estado, edicion } = req.body;
    const usuario = {
        _id: req.user.id,
        usuario: req.user.username,
        nombre: req.user.name
    };

    // Actualizar la alerta en la base de datos
    const alertUpdated = await Alert.findByIdAndUpdate(id, { estado, edicion, usuario }, {
        new: true
    });

    // Emitir un evento de alerta para notificar a los clientes
    app.emit('alert');

    res.status(200).json({
        status: true,
        message: "Alerta actualizada",
        alerta: alertUpdated
    });
};

// Controlador para crear una nueva alerta
export const createAlert = async (req, res) => {
    try {
        const newAlert = new Alert(req.body);
        const alertSaved = await newAlert.save();

        // Emitir un evento de alerta para notificar a los clientes
        app.emit('alert');

        res.status(200).json({
            status: true,
            message: "Alerta agregada",
            alerta: alertSaved
        });
    } catch (error) {
        res.json({
            status: false,
            message: "Alerta no pudo ser agregada",
            error
        });
    }
};
```

## Descripción

- **Controlador `findAlerts`:**
  - Este controlador se encarga de buscar alertas en la base de datos y establecer una conexión [SSE (Server-Sent Events)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) para enviar actualizaciones a los clientes en tiempo real.

- **Controlador `updateAlert`:**
  - Gestiona la actualización del estado y la edición de una alerta existente en la base de datos. Además, emite un evento de alerta para notificar a los clientes.

- **Controlador `createAlert`:**
  - Crea una nueva alerta a partir de los datos proporcionados en la solicitud. Emite un evento de alerta para informar a los clientes sobre la adición de una nueva alerta.
