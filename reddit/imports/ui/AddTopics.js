import React from 'react'; // specficy the module and then specify  the library name
import {UP_Collection_Access} from './../api/user_posts.js';



export default class AddTopics extends React.Component{ // jsx requires uppercase when naming
  //by default react componants only need to define one method and it not the constructor
  // it is a render method- this returns the jsx to the screen
  processFormData(event){
    // the event (sometimes e ) parameter is a default event handler object
    //that is passed by in the browser  when an event occurs
    //this is an important argument because it allows us to access the topic name
    //which we need in order to insert a new topic into the db
    event.preventDefault(); //stops the page from reloading
    let newTopic=event.target.formInputNameAttribute.value;
    //event.target grabs the target element - the form in this case which allows us
    // to grab any of its inputs referencing by name (.formINputNameAttribute)
    //value gets us the value
   console.log(newTopic);
   if(newTopic){
     event.target.formInputNameAttribute.value=''; //clears input box
     UP_Collection_Access.insert({
       topic: newTopic,
       votes: 0,
     });
   }
  }
  render(){

    return (

      <div className='singleItemStyle'>
      <form onSubmit={this.processFormData.bind(this)}>
        <input type='text' name= "formInputNameAttribute" placeholder='Topic Name'/>
        <button className= ' button'> Add Topic </button>
      </form>
      </div>
    );
    }
  }; // this class will move to imports/ui/Titlebar.js
