var geo = navigator.geolocation;
var opciones ={}

function geo_error() {
	console.log("lo siento no se a podido cargar el contenido del mapa");
}

function geo_exito(posicion){
	var lat =posicion.coords.latitude;
	var lon = posicion.coords.longitude;
	var mapa= new image();

	mapa.src="http://maps.googleapis.com/maps/api/staticmap?maptype=hybrid&zoom=13&size=300x300&sensor=false&center="+lat+","+lon;
	$('.mapa').append(mapa);

}

geo.getCurrentposition(geo_exito, geo_error, opciones);