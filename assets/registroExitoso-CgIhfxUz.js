import"./style-D1A0zZFH.js";document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
    <div>
      <header class="w-full h-[87px] bg-white border-b-10 border-primary flex justify-center items-center relative" style="height:87px;">
        <div class="absolute -bottom-8"> <!-- Mueve el logo 32px hacia abajo -->
          <img src="./images/LOGO-SF-PURPLE.png" 
               srcset="./images/LOGO-SF-PURPLE.png 1x, ./images/LOGO-SF-PURPLE@2x.png 2x" 
               alt="Logo">
        </div>
      </header>
      <div id="mainback" class="flex flex-col items-center bg-ver bg-auto bg-center h-">
        <div class="flex w-full max-w-screen-lg">
          <!-- Columna izquierda -->
          <div class="flex-1"></div>
          
          <!-- Columna central -->
          <div class="w-full lg:w-6/12 bg-primary text-white flex flex-col items-center p-4">
  <!-- Imagen -->
  <img src="./images/WEDOWE.png" 
       srcset="./images/WEDOWE.png 1x, ./images/WEDOWE@2x.png 2x" 
       alt="WE DO WE" 
       class="mb-10 mt-10">
  
  <!-- Texto de registro exitoso -->
  <p class="font-bebasNeue text-200 text-center mb-5">
    ¡Registro exitoso!
  </p>
  
  <!-- Texto de QR acceso -->
  <p class="text-accent text-center font-helveticaNeue text-[25px] mb-10">
    Muestra el código QR y accede al evento.
  </p>

  <!-- Contenedor para el QR -->
  <div class="qrcode bg-white  flex items-center justify-center mb-10">
    <!-- Código QR -->
    <img src="/ruta-del-qr.png" alt="Código QR" class="w-full h-full object-contain mx-auto">
  </div>

  <!-- Botón -->
  <button class="w-full lg:w-6/12 h-12 mb-10 border-5 border-softpink bg-accent text-primary text-2xl mt-5 font-bebasNeue uppercase text-center mx-auto block transition duration-200 ease-in-out hover:bg-accentHover">
    Enviar a tu correo
  </button>
</div>

          
          <!-- Columna derecha -->
          <div class="flex-1 w-100"></div>
        </div>

        <!-- Imagen -->
      </div>

      <footer class="bg-secondary text-white pt-8 pb-12">
        <!-- Contenedor principal -->
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
            <!-- Columna izquierda -->
            <div class="flex flex-col lg:flex-row justify-center items-center lg:items-start">
              <!-- Columna de la imagen -->
              <div class="mb-4 lg:mb-0 lg:mr-4">
                <img src="./images/DRINKiQ-Logo-White.png" 
                    srcset="./images/DRINKiQ-Logo-White.png 1x, ./images/DRINKiQ-Logo-White@2x.png 2x" 
                    alt="Logo DrinkIQ" class="h-auto w-auto">
              </div>
              <!-- Columna de texto -->
              <div class="text-xs font-helveticaNeue">
                <p>
                  Evita el exceso. Prohibida su venta a menores de 18 años.
                  <a href="https://www.alcoholinformate.org.mx" target="_blank" class="text-white underline">
                    www.alcoholinformate.org.mx
                  </a>
                </p>
                <p class="text-accent mt-2">
                  <a href="https://www.ejemplo.com/aviso-de-privacidad" target="_blank" class="underline">
                    AVISO DE PRIVACIDAD
                  </a>
                </p>
                <p class="text-accent mt-2">
                  <a href="https://www.alcoholinformate.org.mx" target="_blank" class="underline">
                    www.alcoholinformate.org.mx
                  </a>
                </p>
              </div>
            </div>
            
            <!-- Columna central -->
            <div class="flex flex-col justify-center items-center">
              <img src="./images/Layer.png" 
                  srcset="./images/Layer.png 1x, ./images/Layer@2x.png 2x" 
                  alt="Layer logo" class="mb-4">
              <hr class="w-6/12 border-t border-white mb-2">
              <p class="text-[10px] font-helveticaNeue">Visítanos en</p>
              <a href="https://www.thebar.com" target="_blank">
                <img src="./images/TheBar.png" 
                    srcset="./images/TheBar.png 1x, ./images/TheBar@2x.png 2x" 
                    alt="The Bar logo" class="mt-2 mb-4">
              </a>
              <hr class="w-6/12 border-t border-white">
            </div>

            <!-- Columna derecha -->
            <div class="flex flex-col items-center lg:items-start pl-7">
              <p class="text-md font-helveticaNeue mb-4">Síguenos en</p>
              <div class="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank">
                  <img src="./images/LOGO-FB.png" 
                      srcset="./images/LOGO-FB.png 1x, ./images/LOGO-FB@2x.png 2x" 
                      alt="Facebook logo" class="h-auto w-auto">
                </a>
                <a href="https://www.pinterest.com" target="_blank">
                  <img src="./images/LOGO-Pinterest.png" 
                      srcset="./images/LOGO-Pinterest.png 1x, ./images/LOGO-Pinterest@2x.png 2x" 
                      alt="Pinterest logo" class="h-auto w-auto">
                </a>
                <a href="https://www.youtube.com" target="_blank">
                  <img src="./images/LOGO-YT.png" 
                      srcset="./images/LOGO-YT.png 1x, ./images/LOGO-YT@2x.png 2x" 
                      alt="YouTube logo" class="h-auto w-auto">
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <img src="./images/LOGO-INSTA.png" 
                      srcset="./images/LOGO-INSTA.png 1x, ./images/LOGO-INSTA@2x.png 2x" 
                      alt="Instagram logo" class="h-auto w-auto">
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  `});
