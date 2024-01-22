---
id: menus-js
title: menus.js
---

# Archivo `menus.js`

El archivo `menus.js` define arreglos de menús para diferentes roles de usuario en la aplicación. Cada menú contiene objetos con información sobre la ruta (`to`), título (`title`), e icono (`icon`) asociado.

## Menús Definidos

### `adminMenu`

Este menú está destinado al rol de administrador (`admin`). Contiene enlaces a diferentes secciones de la aplicación, cada uno con un título y un icono asociado.

```javascript
import iGarland from '../assets/icons/guirnalda.png';
import iGraphic from '../assets/icons/grafico.png';
import iAlerts from '../assets/icons/alertas.png';
import iControl from '../assets/icons/control.png';
import iUser from '../assets/icons/usuario.png';
import iGreenHouse from '../assets/icons/invernadero.png';

const adminMenu = [
    { to: 'estado-guirnaldas', title: 'Estado Guirnalda', icon: iGarland },
    { to: 'estado-bloques', title: 'Estado Bloques', icon: iGreenHouse },
    { to: 'grafica-guirnalda', title: 'Gráfica Guirnalda', icon: iGraphic },
    { to: 'alertas', title: 'Alertas', icon: iAlerts },
    { to: 'control', title: 'Control', icon: iControl },
    { to: 'datos-bloque', title: 'Datos de Bloques', icon: iGreenHouse },
    { to: 'usuarios', title: 'Usuarios', icon: iUser },
];
```

### `adminUser`

Este menú está destinado a usuarios con roles diferentes a administrador. Contiene enlaces a secciones específicas de la aplicación, adaptadas para un perfil de usuario distinto.

```javascript
const adminUser = [
    { to: 'estado-guirnaldas', title: 'Estado Guirnalda', icon: iGarland },
    { to: 'alertas', title: 'Alertas', icon: iAlerts },
    { to: 'edicion-guirnalda', title: 'Editar Guirnalda', icon: iControl },
];
```

### `menuRole(role)`

Esta función devuelve el menú correspondiente según el rol proporcionado como argumento.

```javascript
export const menuRole = (role) => {
    if (role === 'admin') {
        return adminMenu;
    } else {
        return adminUser;
    }
};
```

## Uso

Para obtener el menú correspondiente a un rol específico, puedes utilizar la función `menuRole(role)` y pasar el rol como argumento.

```javascript
const userRole = 'admin'; // Reemplaza con el rol del usuario actual
const userMenu = menuRole(userRole);
```

