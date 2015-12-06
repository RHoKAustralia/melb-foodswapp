listing1 =
  person:
    name: 'Carrot Man Jeff'
  listing:
    title: 'Buy my veggies'
    location: 'Albion St, Brunswick 3057'
    items: ['Tomatoes', 'Broccoli']

listing = ->
  lId = FlowRouter.getParam "listingId"
  person = Listings.findOne
    _id: lId

helpers =
  listingId: ->
    FlowRouter.getParam "listingId"
  listing: ->
    listing()
  person: ->
    l = listing()
    person = Meteor.users.findOne
      _id: l.creatorId
    person

Template.listing.helpers helpers
Template.listingSummary.helpers helpers
