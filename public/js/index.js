var viewport = document.getElementsByTagName("BODY")[0];
function render(state){
  var html = "";
  html += '<h2>Hora Actual</h2>  <div id="analogo">    	<div id="reloj">    		<h6 class="hora-1">1</h6>    		<h6 class="hora-2">2</h6>    		<h6 class="hora-3">3</h6>    		<h6 class="hora-4">4</h6>    		<h6 class="hora-5">5</h6>    		<h6 class="hora-6">6</h6>    		<h6 class="hora-7">7</h6>    		<h6 class="hora-8">8</h6>    		<h6 class="hora-9">9</h6>    		<h6 class="hora-10">10</h6>    		<h6 class="hora-11">11</h6>    		<h6 class="hora-12">12</h6>        <div id="horera"></div>        <div id="minutera"></div>        <div id="segundera"></div>        <div class="rayita"></div>    	</div>    </div>    <div id="digital">      <div id="hora"></div>      <div id="minuto"></div>      <div id="segundo"></div>    </div>  	<div>  		<select id="opciones">  			<option value="Análogo">Análogo</option>  			<option value="Digital">Digital</option>  		</select>  	</div>';
  return html;
}

viewport.innerHTML = render();


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
	if (h.toString().length == 1){
		h = '0'+h;
	}
	if (m.toString().length == 1){
		m = '0'+m;
	}
	if (s.toString().length == 1){
		s = '0'+s;
	}
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