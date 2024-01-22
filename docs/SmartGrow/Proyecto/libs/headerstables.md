---
id: headers-table-js
title: headersTable.js
---

# Archivo `headersTable.js`

El archivo `headersTable.js` contiene arreglos predefinidos de encabezados para tablas utilizadas en la aplicación. Estos encabezados son utilizados para mostrar información específica en las tablas.

## Encabezados Definidos

### `headersAlerts`

Este arreglo contiene los encabezados para la tabla de alertas. Cada elemento representa una columna en la tabla.

```javascript
export const headersAlerts = ['Fecha', 'Descripción', 'Bloque', 'Guirnalda', 'Estado'];
```

- **'Fecha'**: Columna que muestra la fecha de la alerta.
- **'Descripción'**: Columna que muestra la descripción de la alerta.
- **'Bloque'**: Columna que muestra el número de bloque asociado a la alerta.
- **'Guirnalda'**: Columna que muestra el número de guirnalda asociado a la alerta.
- **'Estado'**: Columna que muestra el estado actual de la alerta.

### `headersUsers`

Este arreglo contiene los encabezados para la tabla de usuarios. Cada elemento representa una columna en la tabla.

```javascript
export const headersUsers = ['Nombre', 'Usuario', 'Rol', 'Opciones'];
```

- **'Nombre'**: Columna que muestra el nombre del usuario.
- **'Usuario'**: Columna que muestra el nombre de usuario.
- **'Rol'**: Columna que muestra el rol del usuario.
- **'Opciones'**: Columna que proporciona opciones para el usuario, como editar o eliminar.

Estos encabezados son utilizados para estructurar y mostrar datos de manera organizada en las tablas correspondientes.
