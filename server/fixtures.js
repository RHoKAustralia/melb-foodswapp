if (Listings.find().count() === 0) {
    Listings.insert({
        location: {
            position: {lat: -37.830636, lng: 145.051237},
            map: 'foodMap'
        }
    });
    
    Listings.insert({
        location: {
            position: {lat: -37.831369, lng: 145.057717},
            map: 'foodMap'
        }
    });
};