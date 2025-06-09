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


// Configurazione chiusura hamburger menu da mobile quando clicchi in un punto dello schermo fuori dal menu stesso
document.addEventListener("click", function(event) {
    let navbarCollapse = document.querySelector(".navbar-collapse");

    //controllo se il menu a tendina è aperto, e che il click dell'utente sia fuori dal menu
    if(navbarCollapse.classList.contains("show") && !navbarCollapse.contains(event.target)) {
        let navbarToggler = document.querySelector(".navbar-toggler");
        navbarToggler.click(); //forzo un click del toggle per chiudere il menu
    }

});

//configurazione animazioni con lo scroll della pagina
let sections = document.querySelectorAll(".ms_animation");

//richiamo la funzione dedicata (scrollanimation) sia all'evento di scroll che all'avvio/refresh della pagina
scrollAnimation();

window.addEventListener("scroll", scrollAnimation);

//funzione che gestisce l'animazione di scroll delle sezioni in base all'altezza della finestra del browser
function scrollAnimation(){

    //altezza della finestra
    let innerHeight = window.innerHeight;

    sections.forEach(section => {

        //coordinata top della singola sezione
        let sectionHeight = section.getBoundingClientRect().top;

        //se l'altezza della finestra supera la cima, allora aggiungo la classe che fa scattare l'animazione
        if(sectionHeight < innerHeight - 100){
            section.classList.add("animating");    
        }
    })
}

