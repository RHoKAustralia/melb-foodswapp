FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("foodmap");
  }
});

FlowRouter.route('/listing/:listingId', {
  action: function(params) {
    BlazeLayout.render("mainLayout", {content: "listing"});
  }
});
FlowRouter.route('/userProfile', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "userprofile"});
  }
});
