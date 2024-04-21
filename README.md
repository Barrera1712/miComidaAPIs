# miComidaAPIs (By: Barrera Sánchez Uriel)
Aplicación web para buscar y compartir recetas de cocina usando las APIs de The Meal DB, Facebook Y Unsplash.

## Configuración:


Opten appId de Facebook:

Antes de comenzar, asegúrate de tener un appId de la API de Meta Developers.

> Si aún no cuentas con ella:


1. Regístrate en [Meta for Developers](https://developers.facebook.com/).
2. Crea una nueva aplicación y opten tu appId. Una vez tengas tu appId abre el archivo `index.php`. Busca la constante llamada `facebookAppId` y remplaza el texto `TU_APP_ID_AQUI` por el appId que te proporciono meta developers al crear tu aplicación.


3. Regístrate en [Unsplash](https://unsplash.com/developers).
4. Crea una nueva aplicación y opten tu accesKey. Una vez tengas tu accesKey abre el archivo `unsplash.php` el cual se encuentra en la carpeta php. Busca la variable llamada `$accessKey` y remplaza el texto `Tu_Acces_Key` por el accesKey que te proporciono Unsplash Developers al crear tu aplicación.


## Requisitos del Sistema:


- Servidor web con soporte para PHP (por ejemplo, Apache, Nginx) > con protocolo HTTPS (Para soportar la API de Facebook).
- PHP versión 7.x o superior.
- appId de Facebook y accesKey de Unsplas


## Instrucciones de Implementación:


1. Clona este repositorio en tu servidor web o descarga los archivos en tu máquina local.
2. Configura la el appId y el accesKey.
3. Accede a la URL de tu aplicación en un navegador web.
