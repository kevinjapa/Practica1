
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
  var elemento = document.getElementById("mi-elemento");
  switch (seleccion) {
    case "rojo":
      elemento.style.background = "red";
      break;
    case "nulo":
      alert("Seleccione un color");
      break;
    case "azul":
      elemento.style.background = "blue";
      break;
    case "amarillo":
      elemento.style.background = "yellow";
      break;
  case "verde":
      elemento.style.background = "green";
      break;
  }

  var select2 = document.getElementById("mi-select2");
  var seleccion2 = select2.value;

  switch (seleccion2) {
    case "nulo":
      alert("Seleccione un tipo de letra");
      break;
    case "tipo1":
      elemento.style.fontFamily = "Courier New", monospace;
      break;
    case "tipo2":
      elemento.style.fontFamily = "cursive", sans-serif;
      break;
    case "tipo3":
      elemento.style.fontFamily = 'fantasy', sans-serif;
      break;
  case "tipo4":
      elemento.style.fontFamily = 'Times New Roman', sans-serif;
      break;
  }
  
}


