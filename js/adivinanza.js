var random = {}

function repetir(){

var recon1 = confirm("quieres otro acertijo seleccionado de forma aleatoria?");

					if (recon1 == true){
						gameA();
					}

					else{
						alert("ok, ahora tendra que llenar de nuevo el formulario");
				       
				        window.open("index.html", "_self")
					}
}

//se abre la primera adivinanza
function aUno(){
	
	var a1 = prompt("donde hay mas pescados en la tierra o en el mar");

	if ((a1 == "en la tierra") || (a1 == "la tierra") || (a1 == "tierra")){

		alert("correcto!!!");
		alert("los pescados tienen forma de espadas, pero los peces nadan!")
		alert("ahora cargare la pagina de aterrizaje");
		link();
	}

	else if ((a1 == "en el mar") || (a1 == "el mar") || (a1 == "mar")){

		alert("como?...");
		alert("en el mar?...")
		alert("en el mar hay peces, no pescados!");
		repetir();
	
	}

	else {
			
			alert("lo siento, no puede acceder a la siguiente pagina por no haber respondido de forma correcta la adivinanza");
			var con1 = confirm("quiere repetir la pregunta?");
				
				if (con1 == true){
					aUno();
				}
				else {
				//MODIFICAR este campo en las nuevas adivinanzas
				alert('la respuesta correcta del acertijo era "en la tierra"');
				repetir();	
				}
	}
}
//se cierra la primera adivinaza


//se abre la segunda adivinanza
function aDos(){
	
	var a1 = prompt("si usted esta abajo de una mesa, que cosa hay encima de usted?");

	if ((a1 == "la mesa") || (a1 == "una mesa") || (a1 == "mesa")){

		alert("por supuesto que una mesa!!");
		alert("cuando hay flores en el camino, siempre hay mesas debajo de usted!!")
		alert("ahora cargare la pagina de aterrizaje");
		//CAMBIAR EL LANDING.HTML
		link();
		
	}

	else {
			
			alert("lo siento, no puede acceder a la siguiente pagina por no haber respondido de forma correcta la adivinanza");
			var con1 = confirm("quiere repetir la pregunta?");
				
				if (con1 == true){
					aDos();
				}
				else {
				//MODIFICAR este campo en las nuevas adivinanzas
				alert('la respuesta correcta del acertijo era "una mesa"');
				repetir();	
				}
	}
}
//se cierra la segunda adivinaza


//se abre la tercera adivinanza
function aTres(){
	
	var a1 = prompt("al final de los brazos estan las manos, al final de los dedos nosotras estamos, quienes somos?");

	if ((a1 == "las uñas") || (a1 == "uñas")){

		alert("somos las uñas danzantes que protejen tus dedos");
		alert("pero en verdad eso no es cierto, porque yo no soy somos, ni tampoco uñas: soy la esfinge de la web!")
		alert("ahora cargare la pagina de aterrizaje");
		//CAMBIAR EL LANDING.HTML
		link();
	}

	else {
			
			alert("usted se ha equivocado, o me han programado mal");
			var con1 = confirm("quiere repetir la pregunta? acuerdese que para acceder a la pagina de aterrizaje tiene que responder correctamente");
				
				if (con1 == true){
					aTres();
				}
				else {
				//MODIFICAR este campo en las nuevas adivinanzas
				alert('la respuesta correcta del acertijo era "las uñas"');
				repetir();	
				}
	}
}
//se cierra la tercera adivinanzaa



function gameA(){
random.x = Math.floor(Math.random()*3);
console.log(random.x);

/*
//ESTOS ALERTS TIENEN QUE IR EN LA FUNCION DE codigo2.js SINO SE REPITE CADA VEZ QUE EL USUARIO QUIERA UN NUEVO ACERTIJO
alert("cargando...");
alert("no mentira...");
alert("me presento: soy la esfinge de esta web... para acceder a la pagina de aterrizaje tiene que responder correctamente el siguiente acertijo");
*/
//si la condicion se cumple llama a la primera adivinanza
	if (random.x == 0){

		aUno();
	}

	else if (random.x == 1){

		aDos();

	}

	else if (random.x == 2){

		aTres();
		
	}


}

function link(){
	window.open("landing.html", "_self");
}
