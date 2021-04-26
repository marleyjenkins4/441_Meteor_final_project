import {Meteor} from 'meteor/meteor';
//MEteor: import allows us to access to Meteor startup which waits for the server
//to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
import {UC_Collection_Access} from './../imports/api/user_comments.js';

//this gives us access to the UserPosts object so we can interact with the // DEBUG:


Meteor.startup(() => {



  });

// /*
//   Basics of class- define a class, define a constructor function which sets up
//   intial data, define a set of custom methods available to the class
//   to the class. These Methods can use this class's data
// */
// let person_one = {
//   name: 'Newman',
//   company: 'Post Office',
//   fav_num: 43,
// }
// console.log(person_one);
//
// let person_two = {
//   fav_num: 23,
// }
// console.log(person_two);  // expect to see { age: 23 } show up in terminal
//
//
// let person_three = {// Object Spread Operator allows us to spread out an
//   ...person_one,    // object's properties into another object
//   fav_num: 17,      // notice the ... which is the spread syntax
// }                   // also note that fav_num was updated to 17
// console.log(person_three)
//
//
// // Object Property Shorthand example
// //  - a way to define object properties when you have a variable w/ same name
//
// let pet = 'cat';
// let type = 'tabby';
// let animal = {
//   pet: pet, // value of pet getting set with a variable of the same name
//   type,     // since the name is the same, we can use this shorthand
// }
// console.log(animal);
//
//
//
// // mini challenge using Object Spread Operator and Object Property Shorthand
//
//
// let car = {
//   color: 'green',
//   doors: 2,
// }
// let car_year = 1999;
//
// // mini challenge
// // - create a new object then console log that object so it will
// //    look like the following when logged
//
// //      { color: 'red', doors: 2, car_year: 1999, make: 'AMC' }
//
// // notice the color changed, doors stayed the same, car_year variable was used
// //  and a new make: 'AMC' property was created
//
// //  make sure to use Object Spread Operator and Object Property Shorthand
// //    to recreate the previous object
//
//
//
//
// console.log({
//   ...car,         // object spread
//   color: 'red',   // overwrite color
//   car_year,       // object property shorthand
//   make: 'AMC',    // new property
// })
