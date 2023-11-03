//SI NO EMPIEZA CON LA FUNCION DE LAS LINEAS 1 Y 2  NO FUNCIONA Y DA ERROR

    let contenidoTitulo = "Akylez";
    let titulo = document.querySelector(".acerca-de");
    titulo.innerHTML = contenidoTitulo;
    let textoTitulo = titulo.innerText;
    console.log(textoTitulo);
    if(textoTitulo == "Daniel Zambrano"){
        titulo.innerHTML = "Zambrano Daniel";
    }else{
        console.log("no se cumple");
    }
    let nombre = "Akylez";
    let temporada = "otoño";
    let pais = "Alemania";

    let parrafo = document.querySelector(".parrafo2");

    function cambiarTexto(nombre, temporada, pais){
        let contenido = `Me llamo ${nombre}, nací en Venezuela y vivo en ${pais}. Me gusta el ${temporada} y la tecnologia. Me encantaría aprender a programar para poder desarrollar nuevas y mas eficientes IA.`;
        return contenido; 
    }

    parrafo.innerText = cambiarTexto(nombre, temporada, pais);
    let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navegador");
        navBar.classList.toggle("active");
      };


//alert("Hola este es mi Javascript");
//SELECCIONAR ELEMENTOS





