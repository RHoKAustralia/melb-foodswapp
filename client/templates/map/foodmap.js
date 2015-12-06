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

var createMarker = function(map, listing, iconURL){
  var marker = new google.maps.Marker({
    position: listing.location.position,
    map: map.instance,
    icon: iconURL
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
    var exchangeListings = Listings.find({type: "exchange"}).fetch();

    for (listing in exchangeListings){
      var iconURL = "http://maps.google.com/mapfiles/marker.png"
      createMarker(map ,exchangeListings[listing], iconURL)
    };

    var eventListings = Listings.find({type: "event"}).fetch();

    for (listing in eventListings){
      var iconURL = "http://maps.google.com/mapfiles/marker_purple.png"
      createMarker(map ,eventListings[listing], iconURL)
    };

  });
});

Template.foodmap.helpers({
  foodMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-37.8306117,145.0728293),
        zoom: 15
      };
    }
  }
});
