function validateForm(){
	/* Escribe tú código aquí */
	var error = "";
	var name = document.getElementById('name');
	var lastname = document.getElementById('lastname');
	var email = document.getElementById('input-email');
	var password = document.getElementById('input-password');
	var opcion = document.getElementsByClassName('form-control')[4];
	var checkbox = document.getElementById('checkbox');
	var inputSocial = document.getElementById('input-social');
	//Expresiones Regulares
	var ExpNombre = /([A-ZÁÉÍÓÚ][a-zñáéíóú]+[\s]*)+$/;
	var ExpEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	//Nombre y Apellidos con la primera letra mayuscula
	var firstNombre = name.value.split(' ');
	var arrayNombre;
	if(firstNombre.length > 1){
		arrayNombre = firstNombre.map((e,i) =>  e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()).join('');
	}
	else{
		arrayNombre = name.value.charAt(0).toUpperCase() + name.value.substring(1).toLowerCase();
	}

	var firstLastname = lastname.value.split(' ');
	var arrayLastName;
	if(firstLastname.length > 1){
		arrayLastName = firstLastname.map((e,i) =>  e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()).join('');
	}
	else{
		arrayLastName = lastname.value.charAt(0).toUpperCase() + lastname.value.substring(1).toLowerCase();
	}
	
	//console.log(firstNombre.join(''));
	//console.log(arrayNombre);
	var stringNombre = name.value.charAt(0).toUpperCase() + name.value.substring(1).toLowerCase();
	var stringApellido = lastname.value.charAt(0).toUpperCase() + lastname.value.substring(1);
	console.log(stringNombre);
	//Condicines a validar 
	if(name.value == "" || ExpNombre.test(name.value) == false || firstNombre.join('') !== arrayNombre){
		error = "Debe Escribir un Nombre valido \n";
		name.focus();
	}
	else if(lastname.value == "" || ExpNombre.test(lastname.value) == false || firstLastname.join('') !== arrayLastName){
		error = "Debe Escribir Apellido valido\n";
		lastname.focus();
	}
	else if(email.value == "" || !ExpEmail.test(email.value)){
		error = "El Email debe ser Valido Ejm. name@domain.com \n";
		email.focus();
	}
	else if(password.value == "" || password.value.length < 6 || password.value == '123456' || password.value == '098754'){
		error = "El Password debe tener al menos 6 caracteres o diferente\n";
		password.focus();
	}
	else if(opcion.value == 0){
		error = "Debe seleccionar una Bici\n";
		opcion.focus();
	}
	else error = "SIn errores puede continuar";	
	alert(error);
}