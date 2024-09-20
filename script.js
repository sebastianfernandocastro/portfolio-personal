let divPosition;

document.addEventListener("DOMContentLoaded", function() {
    const imagen = document.getElementById("volver");
    const container = document.querySelector(".container");
    const volverImg = document.getElementById("volver");
    const menuImg = document.getElementById("menu");

    // Funciones para cambiar la dirección de las imágenes
    function changeVolverImage(newSrc) {
        volverImg.src = newSrc;
    }

    function changeMenuImage(newSrc) {
        menuImg.src = newSrc;
    }

    // Función para verificar la posición del scroll
    function checkScrollPosition() {
        const scrollPosition = container.scrollTop; // Obtener la posición actual del scroll
        // Aquí puedes determinar en qué div estás basado en la posición del scroll
        const divs = document.querySelectorAll(".divMaster");
        divs.forEach((div, index) => {
            const divTop = div.offsetTop; // Obtener la posición superior del div
            const divHeight = div.offsetHeight; // Obtener la altura del div
            
            if (scrollPosition >= divTop && scrollPosition < divTop + divHeight) {
                divPosition = index + 1;
            }
        });

        // Cambiar las imágenes según la posición del div
        switch (divPosition) {
            case 1:
                changeVolverImage("source/header-f-verde.png");
                changeMenuImage("source/header-mas-azul.png"); 
                break;
            case 2:
                changeVolverImage("source/header-f-azul.png");
                changeMenuImage("source/header-mas-verde.png"); 
                break;
            case 3:
                changeVolverImage("source/header-f-blanco.png");
                changeMenuImage("source/header-mas-blanco.png"); 
                break;
        }
    }

    // Añadir el evento de scroll para comprobar la posición al hacer scroll
    container.addEventListener("scroll", checkScrollPosition);

    // Agregar el evento de clic a la imagen
    if (imagen) {
        imagen.addEventListener("click", function() {
            console.log("Imagen clickeada");

            // Mover el scroll del contenedor a la parte superior
            container.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.error("No se encontró el elemento con el ID 'volver'");
    }
});
let indice = 0;

var popupGlutch = document.getElementById("popup-Glutch");
var popupWindowG = document.getElementById("popup-window-G");
var closeButtonG = document.getElementById("close-button-G");

popupGlutch.addEventListener("click", function(event) {
event.preventDefault();
popupWindowG.style.display = "block";
});
closeButtonG.addEventListener("click", function() {
popupWindowG.style.display = "none";
});

var popupBenjamin = document.getElementById("popup-Benjamin");
var popupWindowB = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");

popupBenjamin.addEventListener("click", function(event) {
event.preventDefault();
popupWindowB.style.display = "block";
});
closeButton.addEventListener("click", function() {
popupWindowB.style.display = "none";
});

const benjaminImg = document.getElementById("imagenBenjamin");
const glutchImg = document.getElementById("imagenGlutch");
const BBDDImg = document.getElementById("imagenBBDD");
const portfolioImg = document.getElementById("imagenPortfolio");
const vectorBenjamin = ["source/BenjaminPerez/img0.png", "source/BenjaminPerez/img1.png", "source/BenjaminPerez/img2.png", "source/BenjaminPerez/img3.png", "source/BenjaminPerez/img4.png", "source/BenjaminPerez/img5.png",]
const vectorGlutch = ["source/GLUTCH/img0.png", "source/GLUTCH/img1.png", "source/GLUTCH/img2.png", "source/GLUTCH/img3.png" ]

function btnsiguiente(vector, cadena)
{
    indice ++;
    if(indice > vector.length -1 )
    {
        indice = 0;
    }
    cadena.src = vector[indice];
}
function btnanterior(vector, cadena) {
    indice --;
    if(indice < 0)
    {
        indice = vector.length -1;
    }
    cadena.src = vector[indice];
}