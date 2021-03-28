import {Meteor} from 'meteor/meteor';
//MEteor: import allows us to access to Meteor startup which waits for the server
//to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
//this gives us access to the UserPosts object so we can interact with the // DEBUG:


Meteor.startup(function(){
  //access
  let square = function(x){ //functions can be anonymous like this one
    return x*x;             //we take the anonymous function and store it on
  }                         //square variable
  console.log(square(10));

  function squareNamed(x){return x*x}; //named function that produces the same result
  console.log(squareNamed(9));
  //problem  - arrow functions only support anonymous functions

//ES6 function
  let square2 = (x) => { //dont need to state function
    return x*x; //this is known as a statment syntax
  };
  console.log(square2(4));

  let square3= (x) => x*x; //this is known as expression syntax

  //anotherexample with an object

  let user = {
    name :'newMan',
    sayHi: function(){ // this a basic ES5 function
      console.log(this.name)
    },
  }
  user.sayHi();


  // let user2= {
  //   name :'newMan',
  //   sayHi: () => {
  //     console.log(this.name)
  //   },
  // }
  // user.sayHi();
  //

});
