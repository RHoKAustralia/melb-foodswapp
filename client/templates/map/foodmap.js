if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
}

Template.foodmap.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }
});