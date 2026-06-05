Sprint 17 - Around the US

Esta API conecta la aplicación con una base de datos en MongoDB para gestionar la información de forma dinámica.

Funcionalidades principales:

Control de usuarios: Permite registrar perfiles, listar los miembros existentes y buscar usuarios específicos por ID, además de actualizar la información del perfil y el avatar.

Control de tarjetas: Maneja la creación de locaciones con imágenes, su eliminación y el sistema de likes/unlikes mediante operadores de Mongo para evitar duplicados en el array de interacciones.

Estructura del proyecto:

controllers: Contiene la lógica de comunicación con la base de datos y el manejo de excepciones con orFail para responder con los códigos de estado correctos si un recurso no existe.

models: Define los esquemas de datos para usuario y tarjeta en singular.

routes: Organiza los puntos de acceso que reciben las peticiones.

app.js: Configura la conexión inicial, middlewares y los enrutadores principales.

Instalación local:

Clonar el repositorio.

Ejecutar npm install en la terminal para instalar las dependencias necesarias.

Iniciar el servidor con el comando node app.js. El proyecto correrá en el puerto 3000.
