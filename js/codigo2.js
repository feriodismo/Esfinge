//OBEJETO USUARIO, donde se almacenaran los strings de los inputs
var usuario = {}
var contrasenia = {}
var validacion = {}
var ingreso = {}
//variable de los class de los INPUTS
//Contenedor 1
var nombre = document.querySelector(".nombre");
var apellido = document.querySelector(".apellido");
var email = document.querySelector(".email");
var dd = document.querySelector(".dd");
var mm = document.querySelector(".mm");
var year = document.querySelector(".year");
var contra1 = document.querySelector(".contra1");
var contra2 = document.querySelector(".contra2");
//Contenedor 2
var ingnombre = document.querySelector(".ingnombre");
var ingemail = document.querySelector(".ingemail");
var ingcontra = document.querySelector(".ingcontra");



//CHECK variables CONT1
var iNombre = document.querySelector(".iNombre");
var iApellido = document.querySelector(".iApellido");
var iEmail = document.querySelector(".iEmail");
var iFecha = document.querySelector(".iFecha");
var iContra1 = document.querySelector(".iContra1");
var iContra2 = document.querySelector(".iContra2");
contra2.disabled = true;

//CHECK variables CONT2
var iINombre = document.querySelector(".iINombre")
var iIEmail = document.querySelector(".iIEmail")
var iIContra = document.querySelector(".iIContra")

//ERRORES variables
var errorN = document.querySelector(".errorN");
var errorA = document.querySelector(".errorA");
var errorE = document.querySelector(".errorE");
var errorF = document.querySelector(".errorF");
var errorC1 = document.querySelector(".errorC1");
var errorC2 = document.querySelector(".errorC2");

//ERRORES variables Cont 2
var errorIN = document.querySelector(".errorIN")
var errorIE = document.querySelector(".errorIE")
var errorIC = document.querySelector(".errorIC") 



//OTRAS VARIABLES
var borrar = document.querySelector(".borrar");
var boton1 = document.querySelector(".boton1");
var boton2 = document.querySelector(".boton2");
var exitoAudio = document.querySelector ("#exitoAudio");
var errorAudio = document.querySelector ("#errorAudio");


/*PROBAR LO SIGUIENTE:

agregar un buton listener, cuya funcion es agregar
un <i> de fa fa con clase, usando el metodo de
btn.addEventListener('click', function(){
	
probarlo en la pagina web de la tarea del lunes, ya que
ya tiene instalado el font awesone*/


//Escuchar inputs, luego se convierten en funciones
nombre.addEventListener('input', fNombre);
apellido.addEventListener('input', fApellido);
email.addEventListener('input', fEmail);
dd.addEventListener('input', fDia);
mm.addEventListener('input', fMes);
year.addEventListener('input', fAnio);
contra1.addEventListener('input', fContra1);
contra2.addEventListener('input', fContra2);

//Escuchar inputs, luego se convierten en funciones contenedor 2
ingnombre.addEventListener('input', fingNombre)
ingemail.addEventListener('input', fingEmail)
ingcontra.addEventListener('input', fingContra)

//desactiva los inputs y botones del menu de ingreso(para esconder las funciones del menu)
ingnombre.disabled = true;
ingemail.disabled = true;	
ingcontra.disabled = true;
boton2.disabled = true;

//boton2.addEventListener('click', ingresoAceptado);
boton1.addEventListener('click', registroAceptado);
boton2.addEventListener('click', ingresoAceptado);

function registroAceptado(){
	
	//gameA();
	usuario.ufname = nombre.value;
	usuario.ulname = apellido.value;
	usuario.uemail = email.value;
	usuario.upass1 = contra1.value;
	usuario.upass2 = contra2.value;
	usuario.udia = dd.value;
	usuario.umes = mm.value;
	usuario.uyear = year.value;

if ((usuario.ufname.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]*$/u))
	 && (!usuario.ufname == "")
	 && (usuario.ulname.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]*$/u))
	 && (!usuario.ulname == "") 
	 && (usuario.uemail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) 
	 && (validacion.fecha == true)
	 && (usuario.upass1.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) 
	 && (usuario.upass2.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) 
	 && (usuario.upass1 == usuario.upass2 )){
	
	exitoAudio.play();
	alert("Su registro ha sido exitoso! Ahora puede proceder al ingreso")

	//desactiva los inputs y botones del contenedor1(menu de registro)
	nombre.disabled = true;
	apellido.disabled = true;
	email.disabled = true;
	contra1.disabled = true;
	contra2.disabled = true;

	//activa los inputs y botones del contenedor2(menu de ingreso)
	ingnombre.disabled = false;
	ingemail.disabled = false;	
	ingcontra.disabled = false;
	boton2.disabled = false;
	
	borrar.style.WebkitFilter = "blur(0px)";
	borrar.style.WebkitFilter = "blur(0px)";
	borrar.style.WebkitFilter = "blur(0px)";
	borrar.style.MozFilter = "blur(0px)";
  	borrar.style.OFilter = "blur(0px)";
  	borrar.style.MsFilter = "blur(0px)";
  	borrar.style.filter = "blur(0px)";
	borrar.style.transition = "all 1.5s";	
	boton1.disabled = true;
	}
else{
	
	
	errorAudio.play();
	console.log(usuario);
	alert("Oh! Oh! tuvo ciertos errores en el registro, o tal vez hay un campo vacio");
	
}
}


function ingresoAceptado(){

	ingreso.nombre = ingnombre.value;
	ingreso.email = ingemail.value;
	ingreso.contra = ingcontra.value;
	console.log(ingreso);

	if ((ingreso.nombre == usuario.ufname) 
		&& (ingreso.email == usuario.uemail) 
		&& (ingreso.contra == usuario.upass1)){
		alert("cargando...");
		alert("no mentira...");
		alert("me presento: soy la esfinge de esta web... para acceder a la pagina de aterrizaje tiene que responder correctamente el siguiente acertijo");
		
		gameA();
	}
	else{
		errorAudio.play();
		alert("Oh! Oh! los datos ingresados no coinciden con los datos de registro");
	}
}



function fNombre(){


	
	if ((nombre.value.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]*$/u)) && 
		(!nombre.value == "")){
	
	
	iNombre.style.color = "lightgreen"; 
	iNombre.style.transition = ".7s"               
	errorN.innerHTML="";
	
	}
	else if(nombre.value == ""){
	iNombre.style.color = "white";
	iNombre.style.transition = ".7s"	
	errorN.innerHTML="<p>" + "(no puedes dejar este campo vacio)" +"</p>";

	}
	else {
	iNombre.style.color = "white";
	iNombre.style.transition = ".7s"
	errorN.innerHTML="<p>" + "(este campo admite solo letras)" +"</p>";
	}

}

function fApellido(){
	
	
	
	if ((apellido.value.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]*$/u)) && 
		(!apellido.value == "")){
	
	
	iApellido.style.color = "lightgreen"; 
	iApellido.style.transition = ".7s"	               
	errorA.innerHTML="";
	
	}
	else if(apellido.value == ""){
	iApellido.style.color = "white";
	iApellido.style.transition = ".7s"	
	errorA.innerHTML="<p>" + "(no puedes dejar este campo vacio)" +"</p>";

	}
	else {
	iApellido.style.color = "white";
	iApellido.style.transition = ".7s"
	errorA.innerHTML="<p>" + "(este campo admite solo letras)" +"</p>";
	}

} 

function fecha(){
	if  ((validacion.dia == true) && (validacion.mes == true) && (validacion.anio == true)){
		
		iFecha.style.color = "lightgreen"; 
		iFecha.style.transition = ".7s"	               
		errorF.innerHTML="";
		validacion.fecha = true;
		
	}
	else if ((validacion.dia == false) || (validacion.mes == false) || (validacion.anio == false)){
		iFecha.style.color = "transparent"; 
		iFecha.style.transition = ".7s"	               
		errorF.innerHTML="<p>" + "(algo anda mal con tu fecha)" +"</p>";
		validacion.fecha = false;
		
	}
}

function fDia() {

	
	if ((dd.value > 31) || (dd.value==0) || (!dd.value.match(/^\d+$/))){
		validacion.dia = false;
		fecha();
	}
	else {
		validacion.dia = true;
		fecha();
	}
}



function fMes(){

	if ((mm.value>12) || (mm.value==0) || (!mm.value.match(/^\d+$/))){
		validacion.mes = false;
		fecha();
	}
	else {

		validacion.mes = true;
		fecha();
 	}	
}

function fAnio(){


	
if (year.value.length == 4){

	if ((year.value>2012) || (year.value<1900) || (!year.value.match(/^\d+$/))){
		validacion.anio = false;
		fecha();
	}
	else {
		validacion.anio = true;
		fecha();
	}	
}

else {
		validacion.anio = false;
		validacion.fecha = false;
		iFecha.style.color = "transparent"; 
		iFecha.style.transition = ".7s"	   
}

}



function fEmail(){


	
//mejorar esta expresion	
	if (email.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
	
	
	iEmail.style.color = "lightgreen"; 
	iEmail.style.transition = ".7s"               
	errorE.innerHTML="";
	validacion.email = true;
	}
	else if(email.value == ""){
	iEmail.style.color = "white";
	iEmail.style.transition = ".7s"	
	errorE.innerHTML="<p>" + "(no puedes dejar este campo vacio)" +"</p>";

	}
	else {
	iEmail.style.color = "white";
	iEmail.style.transition = ".7s"
	errorE.innerHTML="<p>" + "(coloca un e-mail valido)" +"</p>";
	}

} 

//CUANDO SE COLOCAN LAS DOS CONTRASENIAS Y MODIFICAN LUEGO LA PRIMERA,
//SIGUE VALIDANDO COMO CORRECTAS LAS DOS

function fContra1(){
	
	contrasenia.uno = contra1.value;
	
	
	if (contra1.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
		
	
	iContra1.style.color = "lightgreen"; 
	iContra1.style.transition = ".7s"               
	errorC1.innerHTML="";
	
	contra2.disabled = false;
	}
	else if(contra1.value == ""){
	iContra1.style.color = "white";
	iContra1.style.transition = ".7s"	
	iContra2.style.color = "white";
	errorC1.innerHTML="<p>" + "no puedes dejar este campo vacio" +"</p>";
	contra2.disabled = true;
	contra2.value = "";
	errorC2.innerHTML="";
	}
	else {
	iContra1.style.color = "white";
	iContra1.style.transition = ".7s"
	iContra2.style.color = "white";
	errorC1.innerHTML="<p>" + "(minimo: 8 caracteres, 1 letra, 1 numero)" +"</p>";
	contra2.disabled = true;
	contra2.value = "";
	errorC2.innerHTML="";
	}

}

function fContra2(){
	
	
	if ((contra2.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) && (contra1.value == contra2.value)){
		
	
	iContra2.style.color = "lightgreen"; 
	iContra2.style.transition = ".7s"               
	errorC2.innerHTML="";
	contra1.disabled = true;
	
	}
	else if (contra2.value == "") {
	iContra2.style.color = "white";
	iContra2.style.transition = ".7s"	
	errorC2.innerHTML="<p>" + "(no puedes dejar este campo vacio)" +"</p>";
	contra1.disabled = false;

	}
	else {
	iContra2.style.color = "white";
	iContra2.style.transition = ".7s"
	errorC2.innerHTML="<p>" + "(las contrasenias no coinciden)" +"</p>";
	contra1.disabled = false;
	}

}

//FUNCIONES DEL CONTENDOR DOS (Ingreso)

function fingNombre(){

	if (ingnombre.value == usuario.ufname){
		
		iINombre.style.color = "#7a9fe8"; 
		iINombre.style.transition = ".7s"               
		errorIN.innerHTML="";
		
	}

	else if (ingnombre.value == "") {
	iINombre.style.color = "transparent";
	iINombre.style.transition = ".7s"	
	errorIN.innerHTML="<p>" + "(no puedes dejar este campo vacio)" +"</p>";
	}
	
	else {

		iINombre.style.color = "transparent"; 
		iINombre.style.transition = ".7s"               
		errorIN.innerHTML="<p>" + "(esto no coincide con los datos de registro)" +"</p>";
	}
}

function fingEmail(){

	if (ingemail.value == usuario.uemail){
		
		iIEmail.style.color = "#7a9fe8"; 
		iIEmail.style.transition = ".7s"               
		errorIE.innerHTML="";
		
	}

	else if (ingemail.value == "") {
	iIEmail.style.color = "transparent";
	iIEmail.style.transition = ".7s"	
	errorIE.innerHTML="<p>" + "(no puedes dejar este campo vacio)" +"</p>";
	}
	
	else {

		iIEmail.style.color = "transparent"; 
		iIEmail.style.transition = ".7s"               
		errorIE.innerHTML="<p>" + "(esto no coincide con los datos de registro)" +"</p>";
	}
}

function fingContra(){

	if (ingcontra.value == usuario.upass1){
		
		iIContra.style.color = "#7a9fe8"; 
		iIContra.style.transition = ".7s"               
		errorIC.innerHTML="";
		
	}

	else if (ingcontra.value == "") {
	iIContra.style.color = "transparent";
	iIContra.style.transition = ".7s"	
	errorIC.innerHTML="<p>" + "(no puedes dejar este campo vacio)" +"</p>";
	}
	
	else {

		iIContra.style.color = "transparent"; 
		iIContra.style.transition = ".7s"               
		errorIC.innerHTML="<p>" + "(esto no coincide con los datos de registro)" +"</p>";
	}
}

