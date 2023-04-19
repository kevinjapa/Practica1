
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
  var select = document.getElementById("mi-select");
  var seleccion = select.value;

  switch (seleccion) {
    case "rojo":
      var elemento = document.getElementById("mi-elemento");
      elemento.style.background = "red";
      break;
    case "nulo":
      alert("Seleccione un color");
      break;
    case "azul":
      var elemento = document.getElementById("mi-elemento");
      elemento.style.background = "blue";
      break;
    case "amarillo":
      var elemento = document.getElementById("mi-elemento");
      elemento.style.background = "yellow";
      break;
  case "verde":
      var elemento = document.getElementById("mi-elemento");
      elemento.style.background = "green";
      break;
  }
  
}


