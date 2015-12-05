listing1 =
  person:
    name: 'Carrot Man Jeff'
  listing:
    title: 'Buy my veggies'
    location: 'Albion St, Brunswick 3057'
    items: ['Tomatoes', 'Broccoli']

helpers =
  listingId: ->
    FlowRouter.getParam 'listingId'
  listing: ->
    listing1.listing
  person: ->
    listing1.person

Template.listing.helpers helpers
Template.listingSummary.helpers helpers
