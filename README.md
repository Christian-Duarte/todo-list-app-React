# Todo List App

Una aplicación de lista de tareas desarrollada con React.js, que permite a los usuarios agregar, editar, completar y eliminar tareas de manera intuitiva. El proyecto incluye el uso de varios hooks de React como `useState`, `useEffect`, `useRef` y `useReducer`, así como la integración de `localStorage` para la persistencia de los datos.

## Características

- **Agregar tareas**: Los usuarios pueden agregar nuevas tareas a la lista utilizando un formulario sencillo.
- **Marcar tareas como completadas**: Permite marcar tareas como completadas con un simple clic.
- **Editar tareas**: Funcionalidad para editar la descripción de una tarea existente.
- **Eliminar tareas**: Posibilidad de eliminar una tarea de la lista.
- **Persistencia de datos**: Los datos de las tareas se guardan en `localStorage`, lo que permite que la lista de tareas se mantenga al recargar la página.
- **Interfaz moderna y dinámica**: Estilo moderno y responsivo con animaciones suaves que hacen la experiencia de usuario más agradable.

## Capturas de Pantalla

## Tecnologías utilizadas

- **React.js**: Biblioteca para la creación de interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera para aplicaciones React.
- **JavaScript**: Lenguaje de programación utilizado para la lógica de la aplicación.
- **CSS**: Estilos personalizados para darle un aspecto moderno a la aplicación.

## Estructura del proyecto

```plaintext
todo-list-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx          # Formulario para agregar y editar tareas.
│   │   ├── TodoItem.jsx          # Componente que representa cada tarea.
│   │   ├── TodoList.jsx          # Lista que muestra las tareas.
│   │   └── TodoUpdate.jsx        # Formulario para actualizar una tarea existente.
│   ├── Hooks/
│   │   └── useTodoReducer.js     # Custom hook que gestiona el estado de las tareas usando useReducer.
│   ├── App.jsx                   # Componente principal de la aplicación.
│   ├── App.css                   # Estilos de la aplicación.
│   └── main.jsx                  # Punto de entrada de la aplicación.
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Christian-Duarte/cat-pictures-app.git
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd cat-pictures-app
   ```
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Ejecutar la aplicación:
   ```bash
   npm run dev
   ```
