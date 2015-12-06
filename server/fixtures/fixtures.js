if (Meteor.users.find().count() === 0) {

    var bobId = Accounts.createUser({
        'username'  : 'Bob Bobson',
        'email'     : 'bob@bob.com',
        'password'  : 'bobbob', //encrypted automatically
        'profile'    : {
             firstName: "Bob"
         }
    });

    var bob = Meteor.users.findOne(bobId);

    var sueId = Accounts.createUser({
        'username'  : 'Sue Susson',
        'email'     : 'sue@sue.com',
        'password'  : 'suesue', //encrypted automatically
        'profile'   : {
             firstName: "Sue"
         }
    });

    var sue = Meteor.users.findOne(sueId);
    
    var listingData = [
    {
        creatorId: sueId,
        type: 'exchange',
        title: 'Buy my veggies', // change this
        image: 'http://lorempixel.com/400/400/food/5/', //Can find other placeholder image
        location: {
            description: 'Camberwell, VIC 3124', // change this: suburb name, state, postcode
            position: {lat: -37.831369, lng: 145.057717}, // change these, right-click "What's here?" in google maps for coordinates
            map: 'foodMap'
        }
    },
    {
       creatorId: sueId,
       type: 'exchange',
       title: 'The best and juiciest oranges',
       image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZ8rsO9dXeCtd1A4AuobE0RgwFqYSQGcDFbqeL_wQUbQ0LOxIm',
       location: {
           description: 'Camberwell, VIC 3124',
           position: {lat: -37.827939, lng: 145.074010},
           map: 'foodMap'
       }
    },
    {
       creatorId: sueId,
       type: 'exchange',
       title: 'The best and juiciest oranges',
       image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZ8rsO9dXeCtd1A4AuobE0RgwFqYSQGcDFbqeL_wQUbQ0LOxIm',
       location: {
           description: 'Camberwell, VIC 3124',
           position: {lat: -37.827939, lng: 145.074010},
           map: 'foodMap'
       }
    },
    {
       creatorId: sueId,
       type: 'exchange',
       title: 'Want to swap tomatoes for anything',
       image: 'http://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/images/tomato-tips-380-1.jpg',
       location: {
           description: 'Camberwell, VIC 3124',
           position: {lat: -37.822414, lng: 145.083280},
           map: 'foodMap'
       }
    },
    {
       creatorId: sueId,
       type: 'exchange',
       title: 'Herbs up for grab',
       image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWnhyuLhkHOVJj1Lpgqrc8XQ_87ZtYg63j4WjRcIfihFVXLcVO',
       location: {
           description: 'Camberwell, VIC 3124',
           position: {lat: -37.832426, lng: 145.068326},
           map: 'foodMap'
       }
    },
    {
       creatorId: sueId,
       type: 'exchange',
       title: 'Looking for bananas!',
       image: 'https://i.ytimg.com/vi/rZrO6x-sLpY/maxresdefault.jpg',
       location: {
           description: 'Camberwell, VIC 3124',
           position: {lat: -37.834587, lng: 145.063924},
           map: 'foodMap'
       }
    },
    {
       creatorId: bobId,
       type: 'event',
       title: 'Popup Farmers Market',
       image: 'https://i.ytimg.com/vi/rZrO6x-sLpY/maxresdefault.jpg',
       location: {
           description: 'Camberwell, VIC 3124',
           position: {lat: -37.834587, lng: 145.063924},
           map: 'foodMap'
       }
    }
    ]

    for (listing in listingData){
        Listings.insert(listingData[listing])
    };
};