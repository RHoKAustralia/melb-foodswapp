listing1 =
  person:
    name: 'Carrot Man Jeff'
  listing:
    title: 'Buy my veggies'
    location: 'Albion St, Brunswick 3057'
    items: ['Tomatoes', 'Broccoli']

listingId = ->
  FlowRouter.getParam 'listingId'

listing = ->
  Listings.findOne
    _id: listingId()

helpers =
  listingId: listingId
  listing: listing
  person: ->
<<<<<<< HEAD
    Meteor.users.findOne
      _id: listing().creatorId
=======
    l = listing()
    person = Meteor.users.findOne
      _id: l.creatorId
    person
  postListingURL: ->
    FlowRouter.path('postListing', {listingId: listing._id})
>>>>>>> Linking stuff to things

Template.listing.helpers helpers
Template.listingSummary.helpers helpers
Template.itemDescription.helpers helpers
