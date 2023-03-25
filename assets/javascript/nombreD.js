let nombre = document.getElementById("nombre");


setInterval(cambioNombre, 1000)

function cambioNombre(){
    if(screen.width >= 365 && screen.width <= 767){

        nombre.innerHTML = "Sergio Luis F.Q."
    
    }if(screen.width >= 768){
    
        nombre.innerHTML = "Sergio Luis Flores Quiroz"
    
    }
}

const sobreMi = document.getElementById("data-link-sobre");
const skills = document.getElementById("data-link-skills");
const hobbies = document.getElementById("data-link-hobbies");
const formacion = document.getElementById("data-link-formacion");
const proyectos = document.getElementById("data-link-proyectos");


 

