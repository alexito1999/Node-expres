# Node-expres

<h2>Problemas</h2>
La carpeta mysql no se pudo subir y se encuentra en el archivo comprimido

<h2>Uso</h2>
En primer lugar levantaremos el contenedor docker con un comando:

**-docker-compose up -d**

Con esto levantaremos nuestro entorno de trabajo con la cual podemos conectarnos a nuestra base de datos y a la cual realizaremos una serie de llamadas para extraer los datos.
<h2>Comando para la configuracion inicial del node</h2>
Estas carpetas se crean en la raiz despues de aplicar las instalaciones lo movemos al src
**$ npm install express --save** : Instalación del framework
**$ npm i mysql2** : La extensión de conexión con mysql
**$ npm i nodemon dotenv --save-dev** : La instalación de la extensión para la lectura de ficheros .env

Por ultimo, para que nuestro vaya escuchando cada momento usamos este comando

**nodemon src/app.js** : Nos colocamos sobre la app.js para que escuche el puerto 3000 y haga las llamadas

<h2>La estructura </h2>
En la carpeta src se encuentra el trabajo de node y fuera de ella los elementos listos para dockerizar y se tendria que incluir la carpeta permanente de mysql
