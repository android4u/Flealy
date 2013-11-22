	window.onload = function() {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			initialize(position.coords.latitude, position.coords.longitude);
			var positions = new Array();
			positions[0] = {"lat":51.484764,"lon":-3.173504};
			positions[1] = {"lat":51.485432,"lon":-3.177087};
			positions[2] = {"lat":51.485018,"lon":-3.169255};
			positions[3] = {"lat":51.488959,"lon":-3.172925};
			positions[4] = {"lat":51.480902,"lon":-3.182173};
			positions[5] = {"lat":51.489828,"lon":-3.187494};
			positions[6] = {"lat":51.492820,"lon":-3.170114};

			dropPins(position, positions)
		});
	};
};

function initialize(lat, lon) {
	var mapOptions = {
	  center: new google.maps.LatLng(lat, lon),
	  zoom: 15
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"),
	    mapOptions);
}

// pins is an array of Google Maps LatLng() objects.
function dropPins(position, pins) {
	var mapOptions = {
	 	zoom: 15,
	    center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	for (var i = 0; i < pins.length; i++) {
		var marker = new google.maps.Marker({
		    position: new google.maps.LatLng(pins[i]['lat'], pins[i]['lon']),
		    map: map,
		    title: 'Hello World!'
		});
	};

}