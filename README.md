# Backend del Sistema de Contratación de Servicios

Este repositorio contiene el desarrollo del backend de un sistema que permite a los usuarios contratar servicios, ya sea de tipo NORMAL o PREMIUM. El backend se encuentra conectado a una base de datos de MongoDB para almacenar la información de usuarios y servicios.

## Contenido del Proyecto

El proyecto incluye los siguientes componentes:

- **Base de Datos en Mongo Atlas:** Utilizamos MongoDB Atlas como servicio de base de datos en la nube para almacenar y gestionar los datos de la aplicación.

- **Colecciones en la Base de Datos:**
  1. **Usuarios:** Esta colección almacena la información de los usuarios registrados en el sistema, incluyendo detalles como nombres, correos electrónicos, contraseñas y otros datos relevantes.
  2. **Servicios:** Esta colección guarda información sobre los servicios que los usuarios pueden contratar, como tipo de servicio (NORMAL o PREMIUM), precios, etc.

- **Componentes del Backend:**
  - **Rutas:** El backend incluye rutas para gestionar las operaciones de registro, inicio de sesión, y CRUD (Crear, Leer, Actualizar y Eliminar) de usuarios y servicios.
  - **Modelos:** Definimos modelos de datos para los usuarios y servicios, que se utilizan para interactuar con la base de datos MongoDB.
  - **Middlewares:** Implementamos middlewares para la autenticación y autorización de usuarios.
  - **Controladores:** Los controladores manejan las solicitudes HTTP y gestionan las operaciones relacionadas con usuarios y servicios.
  - **Variables de Entorno:** Para una configuración segura y personalizada, se utilizan variables de entorno para definir configuraciones como la cadena de conexión a la base de datos, secretos de autenticación, etc.

## Requisitos

Antes de ejecutar el backend, asegúrate de tener instalado Node.js y npm. Además, necesitarás configurar las variables de entorno con las credenciales de MongoDB Atlas y otros parámetros necesarios.

## Instalación

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Configura las variables de entorno según tus necesidades.
4. Ejecuta `npm run dev` para iniciar el servidor.