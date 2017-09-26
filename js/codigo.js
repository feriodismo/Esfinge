//creando el objeto usuario
var usuario = {}

//variable que enlaza los botones de "enter" y "borrar" del html
var enter = document.querySelector('.j');
var prueba = document.querySelector('.k');
//hasta aqui

//variables que salvan los datos ingresado por el usuario
var nombre = document.querySelector('.usNombre');
var apellido = document.querySelector('.usApellido')
var email = document.querySelector('.usEmail')
var pass = document.querySelector('.usPass')
//hasta aqui

//variable que enlaza el div con la clase "par" del html
var par = document.querySelector('.par');

//funcion que lleva los input del usuario a los atributos
//del objeto creado al principio (usuario)
enter.addEventListener('click', function(){
usuario.fname = nombre.value;
usuario.lname = apellido.value;
usuario.email = email.value;
usuario.pass = pass.value;
//debugea los datos del objeto usuario
cero();
ingreso();
console.log(usuario);
/*aparece un div interno de .par con la clase de estilo aparecer
par.innerHTML = "<div class= aparecer>" + "<p>" + " hola como estan" + "</p>" + "</div>";
*/
})

//funcion que le da la accion al boton de borrar
//de resetear los datos ingresados por el usuario
prueba.addEventListener('click', function(){
nombre.value = "";
apellido.value = "";
email.value = "";
pass.value = "";
})



//funcion en proceso, que valida si el usuario
//deja en blanco las casillas
function cero(){
	if (usuario.fname==""){
		par.innerHTML = "ingresa bien los datos"
		alert("ingrese datos, no puede dejar la casilla en blanco");
	}
	else if (usuario.lname==""){
		alert("apellido");
	}

}



//funcion que le pide al usuario su email y contrasenia
//a traves de prompt, si el usuario responde bien,
//se cargara la pagina, si el usuario responde mal,
//lo devolvera a la pagina que estaba
//DOCUMENTARSE DE COMO SE COLOCA LAS INDICACIONES Y / O (&& ||)
function ingreso(){
	var ing = prompt("ingrese su email");
	var pas = prompt("ingrese su pass");

	//si el usuario coloco el email (hasta ahora) correcto en el prompt, pasa lo siguiente...	
	if ((ing==usuario.email) && (pas==usuario.pass)){

		alert(usuario.fname + " gracias por ingresar a nuestra pagina");
			alert("cargando...");
			alert("cargando...");
			alert("cargando...");
			alert("fintiaste?");
	}

	//si el usuario coloco el email incorrecto, pasa lo siguiente...
	else {
		alert(usuario.fname + "el email o contrasenia fue mal ingresada");
	}
}

/*PROBAR LO SIGUIENTE:

agregar un buton listener, cuya funcion es agregar
un <i> de fa fa con clase, usando el metodo de
btn.addEventListener('click', function(){
	var node = document.createElement("i");
	node.classList.add("fa", "fa-check-circle");                
	var textnode = document.createTextNode(input.value); 
	node.appendChild(textnode);
	uTxh.appendChild(node);
probarlo en la pagina web de la tarea del lunes, ya que
ya tiene instalado el font awesone*/
