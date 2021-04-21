import {Meteor} from 'meteor/meteor';
//MEteor: import allows us to access to Meteor startup which waits for the server
//to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
//this gives us access to the UserPosts object so we can interact with the // DEBUG:


Meteor.startup(() => {



  });

/*
  Basics of class- define a class, define a constructor function which sets up
  intial data, define a set of custom methods available to the class
  to the class. These Methods can use this class's data
*/
