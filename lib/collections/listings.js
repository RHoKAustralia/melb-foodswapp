Listings = new Mongo.Collection('listings');

if (Meteor.isServer){
    if (Listings.find().count === 0) {
        Listings.insert({
            position: {lat: -37.830636, lng: 145.051237},
            map: 'foodMap',
        });
    }
};