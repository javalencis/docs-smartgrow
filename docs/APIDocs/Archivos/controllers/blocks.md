---
id: blocks-controllers-js
title: blocks.controllers.js
---

# Archivo `blocks.controllers.js`

El archivo `blocks.controllers.js` contiene los controladores responsables de gestionar las operaciones relacionadas con los bloques en la API. Estos controladores abordan la búsqueda de bloques, el almacenamiento de nuevos bloques y la actualización de información de bloques existentes.

## Contenido del Archivo

```jsx
// Importar el modelo de Bloque, la instancia del cliente MQTT y la instancia de la aplicación Express
import Block from '../models/block.model.js';
import client from '../mqtt/client.js';
import app from '../app.js';

// Controlador para buscar bloques y establecer una conexión SSE (Server-Sent Events)
export const findBlocks = async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    const blocks = await Block.find();
    res.write(`data: ${JSON.stringify(blocks)}\n\n`);

    // Configurar un oyente para eventos de bloques y enviar actualizaciones a través de SSE
    app.on('blocks', async () => {
        const blocks = await Block.find();
        res.write(`data: ${JSON.stringify(blocks)}\n\n`);
    });
};

// Controlador para almacenar un nuevo bloque
export const saveBlock = async (req, res) => {
    const { bloque } = req.body;
    try {
        const foundBlock = await Block.findOne({ bloque });

        // Verificar si el bloque ya existe
        if (foundBlock) {
            return res.json({
                status: false,
                message: "El bloque ya se encuentra almacenado"
            });
        }

        // Crear y guardar un nuevo bloque
        const newBlock = new Block(req.body);
        const blockSaved = await newBlock.save();

        res.status(200).json({
            status: true,
            message: "Bloque creado con éxito",
            block: blockSaved
        });
    } catch (error) {
        res.json({
            status: false,
            message: "El bloque no pudo ser creado",
            error
        });
    }
};

// Controlador para actualizar la información de un bloque
export const updateBlock = async (req, res) => {
    try {
        const { bloque } = req.body;

        // Actualizar el bloque en la base de datos
        const blockUpdated = await Block.findOneAndUpdate({ bloque }, req.body, {
            new: true
        });

        // Configurar datos de control para el cliente MQTT
        const controlEsp = {
            start_time: blockUpdated.hora_inicio,
            end_time: blockUpdated.hora_final,
            on_time: blockUpdated.tiempo_encendido,
            off_time: blockUpdated.tiempo_apagado
        };

        // Publicar información de control al cliente MQTT
        client.publish('capiro/bloques/control', JSON.stringify(controlEsp), (error) => {
            console.log("No se pudo enviar el mensaje");
            console.log(error);
        });

        res.status(200).json({
            status: true,
            message: "Bloque actualizado",
            block: blockUpdated
        });
    } catch (error) {
        res.json({
            status: false,
            message: "El bloque no pudo ser actualizado",
            error
        });
    }
};
```

## Descripción

- **Controlador `findBlocks`:**
  - Este controlador busca bloques en la base de datos y establece una conexión SSE para enviar actualizaciones a los clientes en tiempo real.

- **Controlador `saveBlock`:**
  - Gestiona el almacenamiento de un nuevo bloque verificando primero si ya existe. Retorna un mensaje indicando si el bloque se almacenó correctamente.

- **Controlador `updateBlock`:**
  - Actualiza la información de un bloque existente en la base de datos. Además, publica información de control al cliente MQTT para sincronizar cambios.
