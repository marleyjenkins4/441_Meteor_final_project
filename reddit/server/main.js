import {Meteor} from 'meteor/meteor';
//MEteor: import allows us to access to Meteor startup which waits for the server
//to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
//this gives us access to the UserPosts object so we can interact with the // DEBUG:


Meteor.startup(() => {

class Person5{
  constructor(name = 'anonymous', age=0){
    this.age= age;
    this.name=name;
  }
  getGreeting(){

    return `hi , I am ${this.name}`;

  }
  getPersonDescription(){
    return `${this.name} is ${this.age}`;
  }
}
  //This class takes all the property of the person5 class
  class Employee extends Person5{

  }
  let me5= new Person5('newman', 33);
  console.log(me5.getGreeting());
  console.log(me5.getPersonDescription());

  let me6= new Employee('chris', 44);
  console.log(me6.getPersonDescription());

  //employee2 class passes a job title into employee2 contstucotr
  class Employee2 extends Person5{ // this means Employee is identitcal to Person5
    constructor(name, age, title){ // get name/age from super and title has no def in case
      super(name,age); // this calls the parent constructor and asks for name and age
      this.title = title;

    }

    hasJob(){
      //this.title; // string or undefined but wewant a boolean if they did or didnt
      return !!this.title; // this flips twice. first to if underfined (true)
                          // second is false- no job

    }

  }
  let me7= new Employee2('pat', 55, 'driver'); // we need a constructor that can handle the data provided
  console.log(me7.getPersonDescription()); // this is coming from Person5
  console.log('has job', me7.hasJob()); // this is testing that extra argument


  //Aise from creating our own functions, we can override functions
  //same as the constructor, just name it again in the sub


    class Employee3 extends Person5{ // this means Employee is identitcal to Person5
      constructor(name, age, title){ // get name/age from super and title has no def in case
        super(name,age); // this calls the parent constructor and asks for name and age
        this.title = title;

      }
      getPersonDescription(){ // they dont have a title, use parent's desc. if title then use title
        if (this.title){ // checks to see if title exits
          return `hi, this is ${this.name} and I am a[n] ${this.title}`;

        }
        else{
          return super.getPersonDescription();
        }

      }

    }
    let me8= new Employee3('des', 19 ,'actor');
    console.log(me8.getPersonDescription());
    let me9= new Employee3('pat' , 33);
    console.log(me9.getPersonDescription());







    class Programmer extends Person5{
      constructor(name, age, language= 'cobol'){
        super(name,age);
        this.language=language;
      }
      getGreeting(){

        return `hi, this is ${this.name} and I am ${this.age} and I like to program is ${this.language}`

        }

      }
      let me11= new Programmer('marley', 22,'java');
      console.log(me11.getGreeting());






  });

/*
  Basics of class- define a class, define a constructor function which sets up
  intial data, define a set of custom methods available to the class
  to the class. These Methods can use this class's data
*/
