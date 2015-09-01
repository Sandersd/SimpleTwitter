Template.posts.onCreated(function() {
  this.subscribe("userPics");
    this.subscribe('posts');
});

Template.posts.helpers({
  posts: function(){
     return Posts.find({}, {sort: {createdAt: -1}});
  }
});

Template.posts.events({
  'click #postBtn': function(){
     $('#myModal').modal('hide');
  }
});
