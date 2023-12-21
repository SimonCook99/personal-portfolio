let body = document.body;
let toggle_checkbox = document.getElementById("checkbox");
let toggle = document.getElementById("toggle");

toggle_checkbox.addEventListener("change", function(){

    
    

    if(toggle_checkbox.checked){
        toggle.style.left="30px";
        toggle.innerHTML= '<i class="bi bi-moon-stars"></i>';
    }else{
        toggle.style.left="0";
        toggle.innerHTML= '<i class="bi bi-brightness-high"></i>'
    }

    body.classList.toggle("dark-mode");
})


function darkModeToggle(){
    
}