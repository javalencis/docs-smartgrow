---
id: garlands-controllers-js
title: garlands.controllers.js
---

# Archivo `garlands.controllers.js`

El archivo `garlands.controllers.js` contiene los controladores encargados de gestionar las operaciones relacionadas con las guirnaldas en la API. Estos controladores se encargan de buscar guirnaldas, crear nuevas guirnaldas, actualizar guirnaldas existentes y eliminar guirnaldas.

## Contenido del Archivo

```jsx
// Importar el modelo de Garland y la instancia de la aplicación
import Garland from '../models/garland.model.js';
import app from '../app.js';

// Controlador para buscar guirnaldas
export const findGarlands = async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    const garlands = await Garland.find();
    res.write(`data: ${JSON.stringify(garlands)}\n\n`);

    // Actualizar la información de guirnaldas al recibir el evento 'garland'
    app.on('garland', async () => {
        const garlands = await Garland.find();
        res.write(`data: ${JSON.stringify(garlands)}\n\n`);
    });
};

// Controlador para crear una nueva guirnalda
export const createGarland = async (req, res) => {
    const { bloque, guirnalda } = req.body;

    try {
        // Verificar si la guirnalda ya está almacenada
        const foundGarland = await Garland.findOne({ bloque, guirnalda });
        if (foundGarland) {
            return res.json({
                status: false,
                message: "La guirnalda ya se encuentra almacenada"
            });
        }

        // Crear una nueva guirnalda y guardarla
        const newGarland = new Garland(req.body);
        const garlandSaved = await newGarland.save();

        res.status(200).json({
            status: true,
            message: "Guirnalda creada con éxito",
            garland: garlandSaved
        });
    } catch (error) {
        res.json({
            status: false,
            message: "La guirnalda no pudo ser creada",
            error
        });
    }
};

// Controlador para actualizar una guirnalda existente
export const updateGarland = async (req, res) => {
    try {
        const idGarland = req.params.id;
        // Actualizar la guirnalda y emitir el evento 'garland'
        const garlandUpdated = await Garland.findByIdAndUpdate(idGarland, req.body, {
            new: true
        });
        app.emit('garland');

        res.status(200).json({
            status: true,
            message: "Guirnalda actualizada",
            garland: garlandUpdated
        });
    } catch (error) {
        res.json({
            status: false,
            message: "La guirnalda no pudo ser actualizada",
            error
        });
    }
};

// Controlador para eliminar una guirnalda
export const deleteGarland = async (req, res) => {
    const garlandDelete = await Garland.findByIdAndDelete(req.params.id);
    res.json(garlandDelete);
};
```

## Descripción

- **Controlador `findGarlands`:**
  - Este controlador busca guirnaldas y envía eventos de actualización cuando se agrega, actualiza o elimina una guirnalda.

- **Controlador `createGarland`:**
  - Crea una nueva guirnalda y la almacena en la base de datos, verificando previamente si ya existe.

- **Controlador `updateGarland`:**
  - Actualiza una guirnalda existente y emite el evento 'garland' para notificar cambios.

- **Controlador `deleteGarland`:**
  - Elimina una guirnalda según su identificador.
