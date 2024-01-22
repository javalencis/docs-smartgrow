---
id: mqtt-client-js
title: client.js
---

# Archivo `client.js` en la Carpeta `mqtt`

El archivo `client.js` en la carpeta `mqtt` define el cliente MQTT y gestiona la conexión con el broker MQTT para la comunicación asíncrona entre la API y los dispositivos MQTT.

## Contenido del Archivo

```jsx
// Importar módulos necesarios
import mqtt from 'mqtt';
import Garland from '../models/garland.model.js';
import Control from '../models/control.model.js';
import Block from '../models/block.model.js';
import app from '../app.js';
import { generateAlert, generateAlertBlocks } from '../libs/functions.js';

// Definir tópicos MQTT
const topicGuirnaldas = 'guirnaldas';
const topicControl = 'capiro/control/verificar';
const topicBloques = 'capiro/control/bloques';

// Configuración de la conexión MQTT
const options = {
    clientId: 'emqx_test-1152215097',  // Identificador único del cliente MQTT
};

// Crear el cliente MQTT
const client = mqtt.connect('mqtt://test.mosquitto.org:1883', options);
console.log('Conexión MQTT establecida');

// Evento de conexión establecida
client.on('connect', () => {
    // Suscribirse a los tópicos relevantes
    client.subscribe(topicGuirnaldas, (err) => { if (err) console.error('Error al suscribirse al tema', err); });
    client.subscribe(topicControl, (err) => { if (err) console.error('Error al suscribirse al tema', err); });
    client.subscribe(topicBloques, (err) => { if (err) console.error('Error al suscribirse al tema', err); });
});

// Evento de mensaje recibido
client.on('message', async (topic, message) => {
    const messageReceive = JSON.parse(message.toString());

    // Manejo de mensajes para diferentes tópicos
    if (topic === topicGuirnaldas) {
        let warning = false;
        const garland = await Garland.findOne({
            bloque: messageReceive.bloque,
            guirnalda: messageReceive.guirnalda
        });

        // Generar alerta si es necesario
        if (messageReceive.estado === 'on') {
            if (generateAlert(messageReceive, garland)) {
                warning = true;
            }
        }

        // Actualizar estado de la guirnalda en la base de datos
        await Garland.findOneAndUpdate(
            {
                bloque: messageReceive.bloque,
                guirnalda: messageReceive.guirnalda
            },
            {
                bloque: messageReceive.bloque,
                guirnalda: messageReceive.guirnalda,
                estado: warning ? 'warning' : messageReceive.estado
            }
        );

        // Emitir evento de actualización de guirnaldas
        app.emit('garland');
    } else if (topic === topicControl) {
        // Obtener datos de control asociados al bloque y recientes
        const dataControl = await Control.findOne({ bloque: messageReceive.bloque, reciente: true });
        const date = new Date();

        // Crear objeto de control para enviar al dispositivo
        const controlEsp = {
            start_time: dataControl.hora_inicio,
            end_time: dataControl.hora_final,
            on_time: dataControl.tiempo_encendido,
            off_time: dataControl.tiempo_apagado,
            date: date.getTime() / 1000
        };

        // Publicar datos de control al tópico correspondiente
        setTimeout(() => {
            client.publish(`capiro/${messageReceive.bloque}/control`, JSON.stringify(controlEsp), (error) => {
                if (error) {
                    console.log('No se pudo enviar el mensaje');
                    console.log(error);
                }
            });
        }, 2000);
    } else if (topic === topicBloques) {
        // Generar alerta y actualizar estado del bloque en la base de datos
        if (messageReceive.estado_lectura !== messageReceive.estado_salida) {
            generateAlertBlocks(messageReceive);
            await Block.findOneAndUpdate({ bloque: messageReceive.bloque }, {
                bloque: messageReceive.bloque,
                estado: 'warning'
            });
        } else {
            await Block.findOneAndUpdate({ bloque: messageReceive.bloque }, {
                bloque: messageReceive.bloque,
                estado: messageReceive.estado_lectura ? 'on' : 'off'
            });
        }

        // Emitir evento de actualización de bloques
        app.emit('blocks');
    }
});

// Evento de cierre de conexión
client.on('close', () => {
    console.log('Conexión MQTT cerrada inesperadamente');
});

// Exportar el cliente MQTT
export default client;
```

## Descripción

- **Importación de Módulos:**
  - Se importa la biblioteca `

mqtt` para la comunicación MQTT y se importan los modelos relevantes y funciones desde otros archivos.

- **Definición de Tópicos MQTT:**
  - Se definen constantes para los tópicos MQTT que serán utilizados en la comunicación.

- **Configuración de la Conexión MQTT:**
  - Se establecen opciones y configuraciones para la conexión MQTT, incluyendo el cliente ID.

- **Creación del Cliente MQTT:**
  - Se crea el cliente MQTT utilizando la biblioteca `mqtt` y se establece la conexión con el broker MQTT.

- **Eventos:**
  - Se manejan eventos como la conexión exitosa (`connect`), la recepción de mensajes (`message`), y el cierre de conexión (`close`).

- **Manejo de Mensajes:**
  - Se gestionan los mensajes recibidos en función del tópico al que pertenecen, realizando acciones específicas y actualizando la base de datos.

- **Publicación de Mensajes:**
  - Se utiliza el cliente MQTT para publicar mensajes en tópicos específicos.

- **Exportación del Cliente MQTT:**
  - Se exporta el cliente MQTT para que pueda ser utilizado en otros archivos del proyecto.
