// Toggle for Persona images
//By Jasper Tu

function switchPersona(persona) {
    var x = document.getElementsByClassName("persona");
    var i = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i].classList.contains("persona-active") == true) {
            x[i].classList.remove("persona-active");
        }
    }
    x[persona].classList.add("persona-active");
    scheduleContent(persona);
}

function scheduleContent(persona) {
    var y = document.getElementsByClassName("personaImg");
    var i = 0;
    for (i = 0; i < y.length; i++) {
        if (y[i].classList.contains("hide") == true) {
            y[i].classList.remove("hide");
        }
    }
    var currentPersona = "";
    if (persona == 0) {
        currentPersona = "persona-1";
    } if (persona == 1) {
        currentPersona = "persona-2";
    } if (persona == 2) {
        currentPersona = "persona-3";
    }
    i = 0;
    for (i = 0; i < y.length; i++) {
        if (y[i].classList.contains(currentPersona) == false) {
            y[i].classList.add("hide");
        }
    }
}