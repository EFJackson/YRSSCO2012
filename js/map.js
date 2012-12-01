window.onload = function() {

  var userPosition,
      map;

  function createMap(x, y, zoom) {
    var mapOptions = {
      center: new google.maps.LatLng(x, y),
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  
  function showPoint(x, y) {
    userPosition =  new google.maps.Circle({
      strokeColor: '#ff0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#ff0000',
      fillOpacity: 0.35,
      map: map,
      center: new google.maps.LatLng(x, y),
      radius: 10000
    });
  }
  
  function geolocate(position) {
    var x = position.coords.latitude,
        y = position.coords.longitude;
  
    createMap(x, y, 12);
    showPoint(x, y);
  }
  
  function noGeolocate() {
    createMap(52.8382, -2.327815, 6);
  }
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geolocate, noGeolocate);
  } else {
    noGeolocate();
  }
  
  console.log(userPosition);
    
};