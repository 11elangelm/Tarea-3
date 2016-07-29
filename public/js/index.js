var combobox = document.getElementById('opciones');
function actualizarHora(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	cambiarHora(h);
	cambiarMinuto(m);
	cambiarSegundo(s);
}

function cambiarHora(h){
	if (h > 12){
		h = h - 12;
	}
	var hourclass = 5*h; 
	var horera = document.getElementById("horera");
	horera.className = '';
	horera.className += 'ms-'+hourclass;
}

function cambiarMinuto(m){
	var minutera = document.getElementById('minutera');
	minutera.className = '';
	minutera.className += 'ms-'+m;
}

function cambiarSegundo(s){
	var segundera = document.getElementById('segundera');
	segundera.className = '';
	segundera.className += 'ms-'+s;
}

function actualizarDigital(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	document.getElementById('hora').innerHTML = h;
	document.getElementById('minuto').innerHTML = m;
	document.getElementById('segundo').innerHTML = s;
}

combobox.addEventListener('change',changeClock);
function changeClock(){
	var combobox = document.getElementById('opciones');
	var str = combobox.options[combobox.selectedIndex].text;
	if (str == "Análogo"){
		setInterval(actualizarHora,1000);
		digital = document.getElementById('digital');
		digital.className ="";
		digital.className += "hidden";
		analogo = document.getElementById('analogo');
		analogo.className ="";
	} else{
		setInterval(actualizarDigital,1000);
		analogo = document.getElementById('analogo');
		analogo.className ="";
		analogo.className += "hidden";
		digital = document.getElementById('digital');
		digital.className ="";
	}
}

changeClock();