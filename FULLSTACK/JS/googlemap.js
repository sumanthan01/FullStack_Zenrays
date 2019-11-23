var map;
function initMap(position) {
    var cordinates={lat:position.coords.latitude, lng: position.coords.longitude};
    map = new google.maps.Map(document.getElementById('gmap'), {
    center:cordinates ,
    zoom: 25
    });
    var marker = new google.maps.Marker({position: cordinates, map: map});
    infoWindow = new google.maps.InfoWindow;

}
function cords(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMap);
    } else {
        alert("browser does not support geolocation")
    }
}
