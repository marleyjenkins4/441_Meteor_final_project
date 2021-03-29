import {Meteor} from 'meteor/meteor';
//MEteor: import allows us to access to Meteor startup which waits for the server
//to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
//this gives us access to the UserPosts object so we can interact with the // DEBUG:


Meteor.startup(() => {
//convention is to capitalize class names
  class Person{

  };

  let me= new Person(); //this will create ab empty object
                        //which is expected because there is no data for this person
  console.log(me);


  class Person2 { //constructor called behind scenes
    constructor(name){
      //so far the name is not stored on the Person instance. the following does that

      this.name = name;
      //every instance can have a diffrent name and its stored in name


    }

  } // no comma or semi-this correct class definition for ES6
  let me2= new Person2('Michael'); //this passes to the class's constructor function
  console.log(me2);

  class Person3 {


    constructor(name ='anonymous'){

      this.name = name;


    }
}
let me3= new Person3(); //will print anonymous
let me3b= new Person3('passed name'); // will print anonymous
console.log(me3,me3b);

//the following sets up a method
class Person4{
  constructor(name='marley'){
    this.name = name;
  }
  getGreeting (){
    //return custom greeting using their names
    //will use ES6 template strings
    //these are disned to make it easy to inject values into a strings
    //will use the back tick which is to the left of the I key
    // return 'hi. I am + this name' ; will work but template are
    return `hi , I am ${this.name}`; // this is a js expression

  }
}
let me4= new Person4(); // will print anonymous


console.log(me4.getGreeting());

});

/*
  Basics of class- define a class, define a constructor function which sets up
  intial data, define a set of custom methods available to the class
  to the class. These Methods can use this class's data
*/
