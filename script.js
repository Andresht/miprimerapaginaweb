//alert("Hola este es mi Javascript");
// let nom = "Andres Herrera";

// let parrafo = document.querySelector(".parrafo1");

// function cambiartexto(nom){
//     let contenido = `¡Bienvenido a mi WEB!    Aquí, aprenderás más sobre mí.    Hola soy ${nom} Me Gustaría trabajar como programador web de forma remota creando proyectos desafiantes  para seguir aprendiendo y emprender como todo un buen programador. Me motivó hacer el curso porque vi una gran oportunidad para empezar en el mundo de la programación.`;

//     return contenido;
  
// }
// parrafo.innerText = cambiartexto("nom");

let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");

    }

// const menulinks = document.querySelectorAll('.menu a[href^"#"');
//     menulinks.forEach(menulink =>{ 
//       menulink.addEventListener("click", function (){
//         navBar.classList.remove("active");
//     })  
//   })





  // function mostrarFechaHora() {
  //       var fechaHora = new Date();
  //       var fecha = fechaHora.toLocaleDateString();
  //       var hora = fechaHora.toLocaleTimeString();
  //       var formatoCompleto = fecha + " - " + hora;
  //       document.getElementById("fechaHora").innerHTML = formatoCompleto;
  //   }

  //   mostrarFechaHora(); // Llamar a la función para mostrar la fecha y hora actual

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});









