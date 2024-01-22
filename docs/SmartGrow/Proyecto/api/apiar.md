---
id: api-js
title: api.js
---

# Archivo `api.js`

El archivo `api.js` proporciona una instancia de [Axios](https://axios-http.com/es/docs/intro) preconfigurada para realizar solicitudes HTTP a la API de la aplicación. Se establece una URL base y se configuran los encabezados para que las solicitudes se realicen con el tipo de contenido JSON.

## Contenido del Archivo

```javascript
import axios from 'axios';

// Crear una instancia de Axios con la configuración base
const api = axios.create({
    baseURL: 'http://localhost:3001/api', // URL base de la API
    headers: {
        "Content-Type": "application/json" // Tipo de contenido para las solicitudes (JSON)
    }
});

export default api;
```

## Descripción

- **Axios (`axios.create`):**
  - Se utiliza la función `axios.create` para crear una instancia de Axios con una configuración base.

- **URL Base (`baseURL`):**
  - La URL base de la API se establece como `http://localhost:3001/api`. Ajusta esto según la ubicación de tu servidor de API.

- **Encabezados (`headers`):**
  - Se configura el tipo de contenido de las solicitudes como JSON mediante el encabezado `"Content-Type": "application/json"`.

- **Exportación (`export default api`):**
  - La instancia de Axios se exporta como valor predeterminado para que pueda ser importada y utilizada en otros archivos de la aplicación.

Esta configuración centralizada simplifica la realización de solicitudes a la API desde diferentes partes de la aplicación, proporcionando una base consistente.
