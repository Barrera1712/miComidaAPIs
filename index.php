<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiComida</title>
    <script src="https://kit.fontawesome.com/56497fa989.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/estilos.css">
    <meta property="og:url"           content="https://localhost/micomida/index.php" />
    <meta property="og:type"          content="website" />
    <meta property="og:title"         content="Micomida" />
    <meta property="og:description"   content="Conoce mas de resetas de comida" />
    <meta property="og:image"         content="https://localhost/micomida/img/prueba.png" />
</head>
<body>
    <script>
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk')
        );

        window.fbAsyncInit = function() {
            FB.init({
                appId   : '265233359804504',
                xfbml   : true,
                version : 'v18.0'
            });
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    // El usuario está conectado, muestra el botón de "Cerrar sesión"
                    document.querySelector('.sesion').style.display = 'none';
                    document.querySelector('.cerrar-sesion').style.display = 'block';
                } else {
                    // El usuario no está conectado, muestra el botón de "Iniciar sesión"
                    document.querySelector('.sesion').style.display = 'block';
                    document.querySelector('.cerrar-sesion').style.display = 'none';
                }
            });
            document.querySelector('.sesion').addEventListener('click',function(){
                FB.login(function(response) {
                    if (response.authResponse) {
                        const contenedordeinfo=document.getElementById('datosf');
                        FB.api('/me', {fields: 'name'}, function(response) {
                            const user=response.name;
                            contenedordeinfo.innerHTML=`
                                <h2>${user}</h2>
                            `;
                        });
                        FB.api('/me/picture?width=200&height=200', function(response) {
                            if (response.data && response.data.url) {
                                const contimage=document.getElementById('poto');
                                var profilePictureURL = response.data.url;
                                contimage.innerHTML=`
                                    <img src="${profilePictureURL}">
                                `;
                            }
                        });
                        document.querySelector('.sesion').style.display = 'none';
                        document.querySelector('.cerrar-sesion').style.display = 'block';
                    } else { 
                        console.log('User cancelled login or did not fully authorize.'); 
                    }
                });
            });
            document.querySelector('.cerrar-sesion').addEventListener('click', function() {
                FB.logout(function(response) {
                    const contenedordeinfo=document.getElementById('datosf');
                    contenedordeinfo.innerHTML=``;
                    document.querySelector('.sesion').style.display = 'block';
                    document.querySelector('.cerrar-sesion').style.display = 'none';
                });
            });
        };
    </script>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0&appId=265233359804504" nonce="lnbTLdER"></script>
    <header>
        <h1></i>MiComida</h1>
        <nav>
            <input type="text" name="buscar" id="buscar" placeholder="Nombre de comida">
            <button id="btn-buscar"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="sesion" >Inisiar sesión</button>
            <button class="cerrar-sesion" style="display: none;">Cerrar sesión</button>
            <i class="fa-regular fa-user"></i>
            <div id="datosf"></div>
            <div id="poto"></div>
        </nav>
    </header>
    <main>
        <article>
            <div id="options">
                <div id="teclado">
                    <?php
                        $abecedario=array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z');
                        foreach ($abecedario as $letra) {
                            echo "<button name='button' class='letra' value='".strtolower($letra)."'>".$letra."</button>";
                        }
                    ?>
                </div>
                <div>
                    <button id="random">No se que cosinar !!! <i class="fa-solid fa-lightbulb"></i></button>
                </div>
            </div>
            <div id="info">

            </div>
        </article>
        <div id="fb-root"></div>
        <div class="fb-like" 
            data-href="https://www.your-domain.com/your-page.html" 
            data-width=""
            data-layout="standard" 
            data-action="like" 
            data-size="small"  
            data-share="true">
        </div>
        <div id='sec'>

        </div>
        <div id="mas">
            
        </div>
    </main>
    <footer>
        <p>Echo por: Barrera Sánchez Uriel</p>
        <p>barrerasanchezu@gmail.com</p>
        <p>Derechos reservados</p>
    </footer>
</body>
<script src="js/carrucel.js"></script>
<script src="js/themealdb.js"></script>
</html>