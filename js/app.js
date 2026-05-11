// =====================================================
// FASE 2: MENÚ DE HAMBURGUESA
// =====================================================



const btnMenu = document.getElementById("btn-menu");
const menuLinks = document.getElementById("menu-links");

btnMenu.addEventListener("click", function () {
  menuLinks.classList.toggle("activo");
});


// =====================================================
// FASE 3: GALERÍA AUTOMÁTICA
// =====================================================

const imagenes = [
  "img/image-6.webp",
  "img/pelota1.png",
  "img/polera3.png"
];

const imagenGaleria = document.getElementById("imagen-galeria");

let indiceImagen = 0;

imagenGaleria.src = imagenes[indiceImagen];

setInterval(function () {

  indiceImagen++;

  if (indiceImagen >= imagenes.length) {
    indiceImagen = 0;
  }

  imagenGaleria.src = imagenes[indiceImagen];

}, 3000);


// =====================================================
// FASE 4: REDES SOCIALES INTERACTIVAS
// =====================================================
const instagram = document.getElementById("instagram");
const tiktok = document.getElementById("tiktok");
const whatsapp = document.getElementById("whatsapp");

instagram.addEventListener("mouseenter", function () {
  instagram.style.color = "#E1306C";
});

instagram.addEventListener("mouseleave", function () {
  instagram.style.color = "#222";
});

tiktok.addEventListener("mouseenter", function () {
  tiktok.style.color = "#ff0050";
});

tiktok.addEventListener("mouseleave", function () {
  tiktok.style.color = "#222";
});

whatsapp.addEventListener("mouseenter", function () {
  whatsapp.style.color = "#25D366";
});

whatsapp.addEventListener("mouseleave", function () {
  whatsapp.style.color = "#222";
});


// =====================================================
// FASE 5: FORMULARIO CON SWEETALERT2
// =====================================================

const formulario = document.getElementById("form-contacto");

formulario.addEventListener("submit", function (event) {

  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const comentario = document.getElementById("comentario").value;

  if (nombre === "" || email === "" || comentario === "") {

    Swal.fire({
      title: "Campos incompletos",
      text: "Por favor completa todos los campos.",
      icon: "warning",
      confirmButtonText: "Aceptar"
    });

    return;
  }

  Swal.fire({
    title: "¡Éxito!",
    text: "Tu compra fue realizada correctamente.",
    icon: "success",
    confirmButtonText: "Aceptar"
  });

  formulario.reset();

});


// =====================================================
// BOTÓN FLOTANTE DE WHATSAPP CON HORARIO
// Se muestra desde las 08:00 hasta las 17:30
// =====================================================

const whatsappFlotante = document.getElementById("whatsapp-flotante");

function controlarBotonWhatsapp() {

  const ahora = new Date();

  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();

  // Convertimos la hora actual a minutos totales del día
  const minutosActuales = hora * 60 + minutos;

  // 08:00 a. m. = 8 * 60 = 480
  const horaInicio = 8 * 60;

  // 17:30 p. m. = 17 * 60 + 30 = 1050
  const horaFin = 17 * 60 + 30;

  if (minutosActuales >= horaInicio && minutosActuales <= horaFin) {
    whatsappFlotante.classList.add("activo");
  } else {
    whatsappFlotante.classList.remove("activo");
  }

}

// Ejecutamos la función apenas carga la página
controlarBotonWhatsapp();

// Revisamos el horario cada minuto
setInterval(controlarBotonWhatsapp, 60000);