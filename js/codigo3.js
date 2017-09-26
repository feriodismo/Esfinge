var boton3 = document.querySelector(".boton3");
var luzAudio = document.querySelector ("#luzAudio");
luzAudio.play();

boton3.addEventListener('click', devolverEsfinge);

function devolverEsfinge(){
	window.open("index.html", "_self");
}