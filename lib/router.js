FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "foodmap"});
  }
});

FlowRouter.route('/userProfile', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "userprofile"});
  }
});
