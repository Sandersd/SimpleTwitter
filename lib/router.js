Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('posts', {
    path: '/',
    template: 'posts',
    waitOn: function() {
      return Meteor.subscribe("userPics");
    }
  });

  this.route('about');

  this.route('profile');
});
