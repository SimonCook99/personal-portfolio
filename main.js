let body = document.body;
let toggle_checkbox = document.getElementById("checkbox");
let toggle = document.getElementById("toggle");
let cardsList= document.getElementsByClassName("card");

toggle_checkbox.addEventListener("change", function(){

    body.classList.toggle("dark-mode");
    
    if(toggle_checkbox.checked){ //se la checkbox passa a checked una volta cambiata
        toggle.style.left="30px";
        toggle.innerHTML= '<i class="bi bi-moon-stars"></i>';

        document.getElementById("navbar").setAttribute("data-bs-theme", "dark"); //attributo "data-bs-theme" per la navbar e le cards
        for(let i = 0; i < cardsList.length; i++){
            cardsList[i].setAttribute("data-bs-theme", "dark");
        }

        document.querySelector("header .ms_toggle label").style.backgroundColor = "#222222"; //cambio colore dello sfondo del toggle
    }else{ //se la checkbox passa a unchecked una volta cambiata
        toggle.style.left="0";
        toggle.innerHTML= '<i class="bi bi-brightness-high"></i>'

        document.getElementById("navbar").setAttribute("data-bs-theme", ""); //attributo "data-bs-theme" per la navbar e le cards
        for(let i = 0; i < cardsList.length; i++){
            cardsList[i].setAttribute("data-bs-theme", "");
        }

        document.querySelector("header .ms_toggle label").style.backgroundColor = "#cfcfcf";
    }

})

//configurazione toolbar fancybox sezione progetti
Fancybox.bind('[data-fancybox]', {

    contentClick: "toggleCover",
    hideScrollbar: false,
    /* Images:{ //configurazione movimento immagine con mouse dopo lo zoom dell'immagine
        Panzoom: {
            panMode: "mousemove",
            mouseMoveFactor: 1.1,
            mouseMoveFriction: 0.12
        },
    }, */

    /* Images: {
        initialSize: "cover",
    }, */

    Toolbar: {
        display: {
          
          right: [
            "zoomIn",
            "zoomOut",
            "toggle1to1",
            "fullscreen",
            "thumbs",
            "close"
          ],
        },
    },
  }); 

