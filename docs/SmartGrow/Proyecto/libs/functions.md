---
id: functions-js
title: functions.js
---

# Archivo `functions.js`

El archivo `functions.js` contiene varias funciones de utilidad que realizan tareas comunes dentro de la aplicación.

## Funciones

### `getStateBlocks(arrayBlocks)`

Esta función toma un array de bloques y devuelve un array con el estado de cada bloque. Si hay algún bloque con estado "warning", todo el bloque se marca como "warning".

```javascript
export const getStateBlocks = (arrayBlocks) => {
    let statesBlocks = [];
    let warning = false;
    let state;

    for (let i = 1; i <= arrayBlocks.length; i++) {
        const arrayBloque = arrayBlocks.filter(obj => obj.bloque === i);

        arrayBloque.forEach(obj => {
            if (obj.estado === "warning") {
                warning = true;
            } else {
                state = obj.estado;
            }
        });

        statesBlocks.push({
            bloque: i,
            estado: warning ? "warning" : state
        });

        warning = false;
    }

    return statesBlocks;
};
```

### `formatDate(dateISO)`

Esta función formatea una fecha en formato ISO (AAAA-MM-DDTHH:mm:ss.sssZ) a un formato de fecha más legible (DD-MM-AAAA).

```javascript
export const formatDate = (dateISO) => {
    const date = new Date(dateISO);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
};
```

### `formatHour(dateISO)`

Esta función formatea la hora de una fecha en formato ISO a un formato de 12 horas con am/pm.

```javascript
export const formatHour = (dateISO) => {
    const date = new Date(dateISO);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
};
```

### `convertFormatDate(dateAAAAMMDD)`

Esta función convierte una fecha en formato AAAA-MM-DD a un formato DD-MM-AAAA.

```javascript
export const convertFormatDate = (dateAAAAMMDD) => {
    const [year, month, day] = dateAAAAMMDD.split('-');
    const dateDDMMAAAA = `${day}-${month}-${year}`;

    return dateDDMMAAAA;
};
```

### `arrayFilter(array, filters)`

Esta función filtra un array de elementos según los criterios especificados en el objeto `filters`.

```javascript
export const arrayFilter = (array, filters) => {
    let arrayFiltered = array;

    if (filters.fecha_inicio !== '' && filters.fecha_final !== '') {
        arrayFiltered = array.filter((item) => {
            return filterDates(item, filters);
        });
    }

    if (filters.bloque !== '') {
        arrayFiltered = arrayFiltered.filter((item) => {
            return filterBlocks(item, filters.bloque);
        });
    }

    if (filters.guirnalda !== '') {
        arrayFiltered = arrayFiltered.filter((item) => {
            return filterGarland(item, filters.guirnalda);
        });
    }

    return arrayFiltered;
};
```

### Funciones de Filtrado Internas

- `filterBlocks(item, filter)`: Filtra los elementos según el número de bloque.
- `filterGarland(item, filter)`: Filtra los elementos según el número de guirnalda.
- `filterDates(item, filters)`: Filtra los elementos según las fechas especificadas.

Estas funciones de filtrado son utilizadas internamente por `arrayFilter`.
