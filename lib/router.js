FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "foodmap"});
  }
});