if (Meteor.users.find().count() === 0) {

    var bobId = Accounts.createUser({
        'username'  : 'Johanna Jo',
        'email'     : 'jo@jo.com',
        'password'  : 'jojojo', //encrypted automatically
        'profile'    : {
             firstName: "Johanna",
             bio: "I make food happen.",
             img: "9/",
         }
    });

    var bob = Meteor.users.findOne(bobId);

    var sueId = Accounts.createUser({
        'username'  : 'Sue Susson',
        'email'     : 'sue@sue.com',
        'password'  : 'suesue', //encrypted automatically
        'profile'   : {
             firstName: "Sue",
             bio: "I love growing heirloom tomatoes and want to share these with the community",
             img: "8/"
         }
    });

    var sue = Meteor.users.findOne(sueId);

    var listingData = [
    {
        creatorId: sueId,
        type: 'exchange',
        title: 'Buy my veggies', // change this
        image: 'http://lorempixel.com/400/400/food/5/', //Can find other placeholder image
        description: "I have so many veges! I can't get rid of them all. Please take them from me.",
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
       description: "My orange tree has been in my family for decades. Come and buy some tasty oranges.",
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
       description: "Bacon ipsum dolor amet corned beef biltong turkey meatloaf bacon pancetta filet mignon. Pig cupim brisket, drumstick boudin beef ribs capicola hamburger strip steak.",
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
      description: "Bacon ipsum dolor amet rump prosciutto ribeye alcatra. Jowl ball tip landjaeger, jerky spare ribs ribeye meatloaf.",
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
      description: "Bacon ipsum dolor amet fatback filet mignon tenderloin, short loin jowl corned beef flank sirloin prosciutto strip steak cow.",
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
      description: "Check out the first popup farmers market in Camberwell",
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