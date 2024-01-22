---
id: app-js
title: app.js
sidebar_position: 2
---

# Archivo `app.js`

El archivo `app.js` es el punto de entrada principal de la aplicación y configura la aplicación Express utilizada en la API REST. Define los middleware, las rutas y las configuraciones esenciales necesarias para el funcionamiento de la aplicación.

## Contenido del Archivo

```jsx
// Importar las bibliotecas necesarias
import express from 'express';
import cors from 'cors';
import garlandRoutes from './routes/garlands.routes.js';
import alertRoutes from './routes/alerts.routes.js';
import registerRoutes from './routes/registers.routes.js';
import userRoutes from './routes/user.routes.js';
import blocksRoutes from './routes/blocks.routes.js';
import controlRoutes from './routes/control.routes.js';
import morgan from 'morgan';

// Crear una instancia de la aplicación Express
const app = express();

// Configurar middleware
app.use(cors());  // Habilitar CORS para permitir solicitudes desde cualquier origen
app.use(morgan('dev'));  // Configurar el middleware de registro de solicitudes HTTP
app.use(express.json());  // Habilitar el análisis de JSON en las solicitudes

// Configurar las rutas para los diferentes recursos
app.use('/api/garlands', garlandRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/registers', registerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/blocks', blocksRoutes);
app.use('/api/control', controlRoutes);

// Exportar la aplicación configurada
export default app;
```

## Descripción

- **Express y Cors:**
  - Se importan las bibliotecas `express` y `cors`. Express se utiliza para la creación de la aplicación web, y Cors se utiliza para habilitar el intercambio de recursos entre diferentes dominios.

- **Middleware Morgan:**
  - Se utiliza el middleware `morgan` para registrar solicitudes HTTP en la consola en el entorno de desarrollo.

- **Middleware JSON:**
  - Se habilita el middleware `express.json()` para analizar automáticamente el cuerpo de las solicitudes con formato JSON.

- **Configuración de Rutas:**
  - Se configuran las rutas para cada recurso de la API (garlands, alerts, registers, users, blocks, control) utilizando las rutas definidas en archivos separados.

Este archivo es crucial para la configuración global de la aplicación Express, incluyendo la gestión de rutas y middleware esenciales para el manejo de solicitudes y respuestas en la API REST.
