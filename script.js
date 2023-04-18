function validarCorreoElectronico(correo) {
    var expresionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return expresionRegular.test(correo);
  }
  
  // Ejemplo de uso
function correo()
{
  var correoElectronico = document.getElementById("email");
  if (validarCorreoElectronico(correoElectronico)) {
    alert("Notificacion enviada...");
    console.log(good)
  } else {
    alert("Correo Incorrecto");
  }
}

function cambiarEstilo() {
  var parrafo = document.getElementById("mi-elemento");
  parrafo.style.fontSize = "24px";
}

