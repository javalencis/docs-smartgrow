---
id: getting-started
title: Comenzando
sidebar_label: Comenzando
sidebar_position: 2
---

# Comenzando

Ahora que has completado la instalación, es el momento de sumergirte en los conceptos fundamentales de nuestra aplicación y comenzar a utilizar sus características clave.

## Conceptos Fundamentales

### Estructura del Proyecto

Nuestra aplicación sigue una estructura de proyecto común en React. Aquí hay un vistazo rápido:

```plaintext
my-app/
|-- src/
|   |-- api/
|   |-- assets/
|   |-- componets/
|   |-- containers/
|   |-- contexts/
|   |-- fonts/
|   |-- hooks/
|   |-- libs/
|   |-- pages/
|   |-- routes/
|   |-- styles/
|   |-- index.jsx
|-- public/
|-- node_modules/
|-- package.json
|-- ...
```
- **`my-app/`**: Directorio principal del proyecto.

  - **`src/`**: Contiene el código fuente de la aplicación.

    - **`api/`**: Contiene módulos relacionados con la lógica de la API.
    
    - **`assets/`**: Almacena recursos estáticos como imágenes y archivos multimedia.

    - **`components/`**: Contiene componentes de React reutilizables.

    - **`containers/`**: Contiene componentes de alto nivel que conectan la lógica de negocio.

    - **`contexts/`**: Contiene contextos de React utilizados para el manejo de estado global.

    - **`fonts/`**: Almacena archivos de fuentes utilizados en la aplicación.

    - **`hooks/`**: Contiene ganchos personalizados de React.

    - **`libs/`**: Contiene bibliotecas y utilidades compartidas.

    - **`pages/`**: Contiene componentes que representan páginas completas de la aplicación.

    - **`routes/`**: Define las rutas de la aplicación utilizando React Router.

    - **`styles/`**: Contiene archivos de estilo y hojas de estilo.

    - **`index.jsx`**: Archivo principal de entrada que inicia la aplicación.

  - **`public/`**: Almacena recursos estáticos accesibles públicamente como imágenes y archivos HTML.

  - **`node_modules/`**: Contiene las dependencias del proyecto instaladas por npm.

  - **`package.json`**: Archivo de configuración del proyecto que especifica las dependencias y scripts de npm.

  - **`...`**: Otros archivos y directorios específicos de tu proyecto.