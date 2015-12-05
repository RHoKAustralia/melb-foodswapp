FlowRouter.route '/',
  action: ->
    BlazeLayout.render 'startScreen'

FlowRouter.route '/post',
  action: ->
    BlazeLayout.render 'main',
      content: 'postListing'

FlowRouter.route '/map',
  action: ->
    BlazeLayout.render 'foodmap'

FlowRouter.route '/listing/:listingId',
  action: (params) ->
    BlazeLayout.render 'main',
      content: 'listing'

FlowRouter.route '/listing-summary/:listingId',
  action: (params) ->
    BlazeLayout.render 'listingSummary'

FlowRouter.route '/userProfile',
  action: ->
    BlazeLayout.render 'main',
      content: 'userprofile'