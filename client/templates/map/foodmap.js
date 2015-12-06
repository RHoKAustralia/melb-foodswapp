if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
}

var infowindow;

function createInfoWindow() {
  return new google.maps.InfoWindow({
    content: Blaze.toHTML(Template.listingSummary).toString()
  });
};

var createMarker = function(map, listing){
  var marker = new google.maps.Marker({
    position: listing.location.position,
    map: map.instance
  });

  marker.addListener('click', function() {
    FlowRouter.setParams({listingId: listing._id});
    if (infowindow){
      infowindow.close()
    }
    
    infowindow = createInfoWindow()
    infowindow.open(map.instance, marker);
  });
}

Template.foodmap.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('foodMap', function(map) {
    // Create markers for listings
    var listings = Listings.find().fetch();

    for (listing in listings){
      createMarker(map ,listings[listing])
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
