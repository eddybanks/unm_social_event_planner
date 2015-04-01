// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
//= require moment
//= require fullcalendar
//= require fullcalendar/gcal
//= require underscore
//= require gmaps/google

/* Calendar */
$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    defaultDate: '2015-4-1',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
    ]
  });

});

/* Google Maps */

var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();

function calcRoute() {
  var origin      = new google.maps.LatLng(41.850033, -87.6500523);
  var destination = new google.maps.LatLng(42.850033, -85.6500523);
  var request = {
      origin:      origin,
      destination: destination,
      travelMode:  google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

calcRoute();

var handler = Gmaps.build('Google');
handler.buildMap({ internal: {id: 'directions'}}, function(){
  directionsDisplay.setMap(handler.getMap());
});
    
