// La funcionalidad de tu proyecto
function initMap() {
    var uluru = {lat: -12.120290210463269, lng: -76.67679206875005};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }