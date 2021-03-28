import {Meteor} from 'meteor/meteor';
//MEteor: import allows us to access to Meteor startup which waits for the server
//to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
//this gives us access to the UserPosts object so we can interact with the // DEBUG:


Meteor.startup(function(){
  let numbers= [3,12, 54, 17];
//challenge 1 use ES5 version to print everything in the array +1
 let newNumbers= numbers.map(function(number){
   return number + 1;
 });
 console.log(newNumbers);


//challenge 2 uses an arrow function to do the exact same thing

let newNumbers2= numbers.map((number) => number + 1);
console.log(newNumbers2)
});
