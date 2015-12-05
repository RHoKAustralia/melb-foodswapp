if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
}

Template.foodmap.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('foodMap', function(map) {
        // Create markers for listings
          var listings = Listings.find().fetch();

          for (listing in listings){
              var l = listings[listing];

              new google.maps.Marker({
                 position: l.location.position,
                 map: map.instance
              });
          };
    });
});

Template.foodmap.helpers({
  foodMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-37.831097, 145.054197),
        zoom: 16
      };
    }
  }
});