if (Meteor.users.find().count() === 0) {

    var bobId = Accounts.createUser({
        'username'  : 'Bob Bobson',
        'email'     : 'bob@bob.com',
        'password'  : 'bobbob' //encrypted automatically
    });

    var bob = Meteor.users.findOne(bobId);

    var sueId = Accounts.createUser({
        'username'  : 'Sue Susson',
        'email'     : 'sue@sue.com',
        'password'  : 'suesue' //encrypted automatically
    });

    var sue = Meteor.users.findOne(sueId);


    Listings.insert({
        creatorId: bobId,
        location: {
            position: {lat: -37.830636, lng: 145.051237},
            map: 'foodMap'
        }
    });

    Listings.insert({
        creatorId: sueId,
        location: {
            position: {lat: -37.831369, lng: 145.057717},
            map: 'foodMap'
        }
    });
};