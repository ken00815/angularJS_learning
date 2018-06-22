

  //Maps initiation
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {"lat" : 22.396428,"lng" : 114.109497},
      zoom: 11
    });
    var marker = new google.maps.Marker({
            position: {"lat" : 22.3693916, "lng" : 114.1274462},
            map: map
          });
  }
angular.module('mapDemo')
.controller('MapController', [ function() {


}]);
