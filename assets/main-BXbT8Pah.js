import"./style-D1A0zZFH.js";document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
    <div>
      <header class="w-full h-[87px] bg-white border-b-10 border-primary flex justify-center items-center relative" style="height:87px;">
        <div class="absolute -bottom-8"> <!-- Mueve el logo 32px hacia abajo -->
          <img src="./images/LOGO-SF-PURPLE.png" 
               srcset="./images/LOGO-SF-PURPLE.png 1x, ./images/LOGO-SF-PURPLE@2x.png 2x" 
               alt="Logo">
        </div>
      </header>
      <div id="mainback" class="flex flex-col items-center bg-ver bg-auto bg-center">
        <div class="flex w-full max-w-screen-lg">
          <!-- Columna izquierda -->
          <div class="flex-1"></div>
          
          <!-- Columna central -->
          <div class="w-[600px] bg-primary text-white flex flex-col items-center p-4 ">
            <img src="./images/ELECTRIZANTE.png" 
                srcset="./images/ELECTRIZANTE.png 1x, ./images/ELECTRIZANTE@2x.png 2x" 
                alt="Electrizante" 
                class="mb-10 mt-10">

            <form class="flex flex-col space-y-4">
              <label class="font-helveticaNeue text-[16px]" for="nombre">Nombre</label>
              <input id="nombre" type="text" placeholder="Nombre" class="border rounded p-2" />

              <label class="font-helveticaNeue text-[16px]" for="apellidos">Apellidos</label>
              <input id="apellidos" type="text" placeholder="Apellidos" class="border rounded p-2" />

              <label class="font-helveticaNeue text-[16px]" for="correo-electronico">Correo Electrónico</label>
              <input id="correo-electronico" type="email" placeholder="Correo Electrónico" class="border rounded p-2" />

              <label class="font-helveticaNeue text-[16px]" for="confirma-correo">Confirma tu Correo Electrónico</label>
              <input id="confirma-correo" type="email" placeholder="Confirma tu Correo Electrónico" class="border rounded p-2" />

              <label class="font-helveticaNeue text-[16px]" for="telefono">Teléfono</label>
              <input id="telefono" type="tel" placeholder="Teléfono" class="border rounded p-2" />

              <label class="font-helveticaNeue text-[16px]" for="codigo-postal">Código Postal</label>
              <input id="codigo-postal" type="text" placeholder="Código Postal" class="border rounded p-2" />

              <div class="flex flex-col items-center pt-4">
                <label class="font-helveticaNeue text-[16px] mb-2">Género</label>
                <div class="flex space-x-4">
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2">
                    Masculino
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2">
                    Femenino
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2">
                    Otro
                  </label>
                </div>
              </div>

              <div class="flex space-x-4 pt-4">
              <label class="flex items-center">
                <input type="checkbox" class="mr-2">
                Acepto recibir <a href="https://www.ejemplo.com" target="_blank" class="underline ml-1">comunicación por parte de DIAGEO México.</a>
              </label>

              </div>

              <div class="flex space-x-4 pb-6">
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2">
                  Acepto el <a href="https://www.ejemplo.com" target="_blank" class="underline ml-1">aviso de privacidad y cookies.</a>
                </label>
              </div>

              <button class="w-full lg:w-6/12 h-12 border-5 border-softpink bg-accent text-primary text-2xl mt-5 font-bebasNeue uppercase text-center mx-auto block transition duration-200 ease-in-out hover:bg-accentHover">
                Enviar
              </button>



              
            </form>

            <img src="./images/GUAVA-IMG.png" 
                 srcset="./images/GUAVA-IMG.png 1x, ./images/GUAVA-IMG@2x.png 2x" 
                 alt="Guava" 
                 class="mt-10">
          </div>
          
          <!-- Columna derecha -->
          <div class="flex-1 w-100"></div>
        </div>

        <!-- Imagen debajo del formulario -->
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
