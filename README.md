# GeoGenius 

**GeoGenius** es una aplicación web que pone a prueba tus conocimientos de geografía a través de preguntas sobre países y sus capitales. Este repositorio contiene el código del frontend, construido con **React.js**.

🌐 **Descripción**

**GeoGenius** permite a los usuarios:

* Responder preguntas sobre las capitales de los países.
* Ver sus puntuaciones después de responder correctamente.
* Guardar preguntas para revisarlas más tarde.
* Responder nuevas preguntas a través de un sistema interactivo.

🛠 **Tecnologías y herramientas**

* **React.js 19**
* **Vite**
* **HTML5 + CSS3**
* **JavaScript ES6+**
* **React Router**
* **Axios** (para realizar solicitudes HTTP)
* **CSS Modules** (para estilos modulares)
* **Postman** (para pruebas de la API)
* **Git & GitHub**

🧱 **Estructura del proyecto**

```
/geogenius-frontend
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/ # Imágenes y recursos estáticos
│   ├── components/ # Componentes reutilizables (Botones, Preguntas, etc.)
│   ├── pages/ # Páginas principales (Play, Home, etc.)
│   ├── api/ # Archivos para realizar solicitudes al backend
│   └── styles/ # Archivos de estilo (CSS Modules)
```

✅ **Requisitos funcionales implementados (Frontend)**

* Página de inicio con el título "GeoGenius" y un acceso a la sección de preguntas.
* Visualización de preguntas y opciones al hacer clic en "Nueva Pregunta".
* Sistema de puntuación que incrementa por cada respuesta correcta.
* Opción de guardar hasta 5 preguntas personalizadas.
* Diseño responsive para escritorio y móvil.

🔒 **Autenticación (si aplica en el futuro)**

* Integración con el backend en **Spring Boot**.
* Puede incluirse autenticación basada en JWT o similar.

🎨 **Diseño**

* Diseño **responsive** para escritorio y móvil.
* Estilos organizados con **CSS Modules**.
* Componentes diseñados bajo principios de **Atomic Design**.

🚦 **Estado del proyecto**

✅ **Sprint 1**:

* Maquetación inicial
* Estructura básica de preguntas y respuestas
* Integración con el backend para obtener preguntas

🚧 **Sprint 2 (en curso)**:

* Guardado de preguntas personalizadas
* Mejora de la lógica de puntuación
* Integración con el backend para persistencia


📄 **Licencia**

Este proyecto está bajo la licencia **MIT**.
