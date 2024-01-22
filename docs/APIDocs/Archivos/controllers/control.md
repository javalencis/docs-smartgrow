---
id: control-controllers-js
title: control.controllers.js
---

# Archivo `control.controllers.js`

El archivo `control.controllers.js` contiene el controlador responsable de gestionar las operaciones relacionadas con el control de los bloques en la API. Este controlador se encarga de almacenar datos de control, como la hora de inicio, la hora final y los tiempos de encendido y apagado.

## Contenido del Archivo

```jsx
// Importar el modelo de Control y la instancia del cliente MQTT
import Control from '../models/control.model.js';
import client from '../mqtt/client.js';

// Controlador para almacenar datos de control
export const saveControl = async (req, res) => {
    const { bloque } = req.body;

    try {
        // Desactivar el estado "reciente" de los controles anteriores del mismo bloque
        await Control.updateMany({ bloque }, { $set: { reciente: false } });

        // Crear un nuevo control con la información proporcionada
        const dataControl = { ...req.body, reciente: true };
        const newControl = new Control(dataControl);
        const savedControl = await newControl.save();

        // Obtener la fecha actual
        const date = new Date();

        // Configurar datos de control para el cliente MQTT
        const controlEsp = {
            start_time: savedControl.hora_inicio,
            end_time: savedControl.hora_final,
            on_time: savedControl.tiempo_encendido,
            off_time: savedControl.tiempo_apagado,
            date: date.getTime() / 1000
        };

        // Publicar información de control al cliente MQTT
        client.publish("capiro/" + bloque + "/control", JSON.stringify(controlEsp), (error) => {
            if (error) {
                console.log("No se pudo enviar el mensaje");
                console.log(error);
            }
        });

        res.status(200).json({
            status: true,
            message: "Control guardado con éxito",
            data: savedControl
        });
    } catch (error) {
        res.json({
            status: false,
            message: "Error almacenando datos",
        });
    }
};
```

## Descripción

- **Controlador `saveControl`:**
  - Este controlador se encarga de almacenar datos de control en la base de datos. Primero, desactiva el estado "reciente" de los controles anteriores del mismo bloque. Luego, crea un nuevo control y lo guarda. Finalmente, publica la información de control al cliente MQTT para su procesamiento.
