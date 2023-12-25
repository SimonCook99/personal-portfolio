let body = document.body;
let toggle_checkbox = document.getElementById("checkbox");
let toggle = document.getElementById("toggle");

toggle_checkbox.addEventListener("change", function(){

    
    if(toggle_checkbox.checked){ //se la checkbox passa a checked una volta cambiata
        toggle.style.left="30px";
        toggle.innerHTML= '<i class="bi bi-moon-stars"></i>';
        document.getElementById("navbar").setAttribute("data-bs-theme", "dark");
        document.querySelector("header .ms_toggle label").style.backgroundColor = "#222222"; //cambio colore dello sfondo del toggle
    }else{ //se la checkbox passa a unchecked una volta cambiata
        toggle.style.left="0";
        toggle.innerHTML= '<i class="bi bi-brightness-high"></i>'
        document.getElementById("navbar").setAttribute("data-bs-theme", "");
        document.querySelector("header .ms_toggle label").style.backgroundColor = "#cfcfcf";
    }

    body.classList.toggle("dark-mode");
})

