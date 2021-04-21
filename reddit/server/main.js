import {Meteor} from 'meteor/meteor';
//MEteor: import allows us to access to Meteor startup which waits for the server
//to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
//this gives us access to the UserPosts object so we can interact with the // DEBUG:


Meteor.startup(() => {

//binding example
  let basic_object = { //object with two things defined
    moderator: 'newman', //1 - moderator property
    print_moderator() { //2- method
      console.log(`Moderator: ${this.moderator}`); // reference the basic_object

    }

  };
  basic_object.print_moderator(); // it prints b/c this references basic_object
  // however in AddTopics.js we have registered the
  //processFormData as a callback- what this means,
  //when the form gets submitted call processFormData
  //the following exploits the same flaw
  setTimeout(basic_object.print_moderator, 250);
  //notice we are not calling obj.print_moderator
  // we are actually passing its reference in
  setTimeout(basic_object.print_moderator.bind(basic_object), 500);
  //bind method gets called and it returns
  // a brand new function that accesses
  // the obj's this rather than global's


  });

/*
  Basics of class- define a class, define a constructor function which sets up
  intial data, define a set of custom methods available to the class
  to the class. These Methods can use this class's data
*/
