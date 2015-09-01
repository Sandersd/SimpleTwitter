Meteor.publish("userPics", function(){
  return UserImages.find();
});

Meteor.publish("posts", function(){
  return Posts.find();
});
