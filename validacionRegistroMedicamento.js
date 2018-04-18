function validarFormularioRegistroArticulo() {

	var enviarForm = true;

	var campoNombre = document.getElementsByName("campoNombre")[0];
	var nombre = campoNombre.value;

	var campoCodigoMedicamento = document
			.getElementsByName("campoCodigoMedicamento")[0];
	var codigoMedicamento = campoCodigoMedicamento.value;

	var campoPrecio = document.getElementsByName("campoPrecio")[0];
	var precio = campoPrecio.value;

	var campoCantidad = document.getElementsByName("campoCantidad")[0];
	var cantidad = campoCantidad.value;
	
	

	var expresionCampoNombre = /^[\wαινσϊρό()/\s]{1,300}$/i;
	if (expresionCampoNombre.test(nombre)) {

	} else {
		alert("nombre incorrecto");
		enviarForm = false;
	}

	var expresionCampoCodigoMedicamento = /^[0-9]{1,10}$/;

	if (expresionCampoCodigoMedicamento.test(codigoMedicamento)) {

	} else {
		alert("codigo incorrecto");
		enviarForm = false;

	}

	var expresionCampoPrecio = /^\d{0,M}(\.\d{1})?\d{0,N}$/;
	if (expresionCampoPrecio.test(precio)) {

	} else {
		alert("precio incorrecto");
		enviarForm = false;

	}

	var expresionCampoCantidad = /^[0-9]{1,3}$/;

	if (expresionCampoCantidad.test(cantidad)) {

	} else {
		alert("cantidad incorrecta");
		enviarForm = false;

	}

	return enviarForm;

}// end function
