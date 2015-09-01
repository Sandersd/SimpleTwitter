Meteor.startup(function () {
    AccountsEntry.config({

      homeRoute: '/',
      dashboardRoute: '/',
      passwordSignupFields: 'USERNAME_AND_EMAIL'

    });

    Accounts.ui.config({
      passwordSignupFields: "USERNAME_AND_EMAIL",
    });


});

Template.registerHelper("getProfileImg", function(userId){
  return UserImages.findOne({userId: userId}, {sort: {createdAt: -1}}).image;
});
