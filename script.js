
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

  if(seleccion == "rojo"){
    var elemento = document.getElementById("mi-elemento");
    elemento.classList.add("rojo");
  }else if(seleccion == "nulo"){
    alert("Seleccione un color");
  }
  
  
}


