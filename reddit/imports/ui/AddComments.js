import React from 'react'; // specficy the module and then specify  the library name
import {UC_Collection_Access} from './../api/user_comments.js';


export default class AddComments extends React.Component{ // jsx requires uppercase when naming
  //by default react componants only need to define one method and it not the constructor
  // it is a render method- this returns the jsx to the screen
  processFormData(event){
    // the event (sometimes e ) parameter is a default event handler object
    //that is passed by in the browser  when an event occurs
    //this is an important argument because it allows us to access the topic name
    //which we need in order to insert a new topic into the db
    event.preventDefault(); //stops the page from reloading
    let newComment=event.target.formInputNameAttribute.value;
    //event.target grabs the target element - the form in this case which allows us
    // to grab any of its inputs referencing by name (.formINputNameAttribute)
    //value gets us the value
   console.log(newComment);
   if(newComment){
     event.target.formInputNameAttribute.value=''; //clears input box
     UC_Collection_Access.insert({
       comment: newComment,
       votes:0,
     });
   }
  }
  render(){

    return (

      <div>
      <form className= 'form' onSubmit={this.processFormData.bind(this)}>
        <input className= 'form__input' type='text' name= "formInputNameAttribute"/>
        <button className= ' button'> Comment </button>
      </form>
      </div>
    );
    }
  }; // this class will move to imports/ui/Titlebar.js
