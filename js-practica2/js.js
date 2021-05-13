
var listapaises=document.getElementById("paises");
var paises;
listapaises.addEventListener("change", nuevopais);
function nuevopais(event){
	infopais(event.target.value);
}

fetch("https://restcountries.eu/rest/v2/all")
.then(resposta => resposta.json())
.then(json => inicializar(json))
.catch(error => console.log("Error:", error));

function inicializar(varpais){
	paises = varpais;
	var opciones= "";

	paises.forEach(pais=> opciones=opciones + `<option value="${pais.alpha3Code}">${pais.name}</option>`);

	listapaises.innerHTML = opciones;
}
function infopais(paisalpha3Code){
	var  paistodo = paises.find(pais=> pais.alpha3Code == paisalpha3Code);
	document.getElementById("capital").innerHTML = paistodo.capital;
	document.getElementById("poblacion").innerHTML = paistodo.population + " Poblacion";
	document.getElementById("continente").innerHTML = paistodo.region;
	document.getElementById("latitudlongitud").innerHTML = paistodo.latlng;
}