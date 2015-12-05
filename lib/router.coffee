FlowRouter.route '/',
  action: ->
    BlazeLayout.render 'startScreen'

FlowRouter.route '/map',
  action: ->
    BlazeLayout.render 'foodmap'

FlowRouter.route '/listing/:listingId',
  action: (params) ->
    BlazeLayout.render 'mainLayout',
      content: 'listing'

FlowRouter.route '/listing-summary/:listingId',
  action: (params) ->
    BlazeLayout.render 'listingSummary'

FlowRouter.route '/userProfile',
  action: ->
    BlazeLayout.render 'mainLayout',
      content: 'userprofile'
