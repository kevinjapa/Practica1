jQuery(document).ready(function($){
	
	$('a.scroll-link').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top -20
		}, 750);
	});
	
});


function validarCorreoElectronico(correo) {
	var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(correo);
  }
  
  function validar() {
	var correoElectronico = document.getElementById("email").value;
	var numero = document.getElementById("telefono").value;
	var usuario=document.getElementById("nombre").value;
	/* validar campos vacios */
	var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
          if (inputs[i].value.trim() === "") {
            alert("Por favor completa todos los campos.");
            return;
          }
        }
			/*Validacion correo */
		if (validarCorreoElectronico(correoElectronico)) {
			/*validacion de telefono */
			if (isNaN(numero)) {
				alert("Por favor ingresa solo números.");
				document.getElementById("numero").value = "";
			  }else
			  {
				alert("Se a Contactado correctamente "+usuario	);
			  }
		  } else{
			alert("El correo electrónico es inválido.");
		  }
  }
