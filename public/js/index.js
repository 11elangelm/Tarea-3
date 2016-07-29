var combobox = document.getElementById('opciones');
function actualizarHora(){
	var d = new Date(); // for now
	var h = d.getHours(); // => 9
	var m = d.getMinutes(); // =>  30
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

setInterval(actualizarHora,1000);

combobox.addEventListener('change',changeClock,combobox);
function changeClock(){
	var str = combobox.options[combobox.selectedIndex].text;
	console.log(str);
}
