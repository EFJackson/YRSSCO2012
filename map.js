$(function() {

  function drawShapes() {
    
    var polygon = new google.maps.Polygon({
      
      strokeColor: '#BADA55',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#ff0000',
      fillOpacity: 0.35,
      paths: [
        new google.maps.LatLng(25.774252, -80.190262),
        new google.maps.LatLng(18.466465, -66.118292),
        new google.maps.LatLng(32.321384, -64.75737),
        new google.maps.LatLng(25.774252, -80.190262)
      ]
      
    });
     
  }

  function init() {
  
    var mapOptions = {
      center: new google.maps.LatLng(24.886436490787712, -70.2685546875),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map($('#map')[0], mapOptions);
    
    drawShapes();
    
  }
  
  $(window).load(init);
  
});