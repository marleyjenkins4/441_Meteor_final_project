import React from 'react';   //specify the module and then specifcy the library name
                            //meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; //named export from Meteor

  //as far we have 3 ways to imports
  //1. relative paths './../imports/file'
  //2. npm libraries providig the name 'react-dom'
  //3. metoer modules 'metoer/meteor' . the meteor / removes name conflicts


//meteor.startup wait for the dom to be renders before doing anything
Meteor.startup(function(){ //this takes a function as its one and onyl argument
  //we now need to render jsx which is javascript
  //let jsx=       <p> this is from client/main.js </p>

  let name= 'newman';
  let jsx =  <p> Hello {name} </p>

  //the following causes problems b/c it violates the rule that you argument
  //you are only allowed to have one root element
  //let jsx= <p> this is form client/main.js </p> <p> hello {name}</p>;
  //instead we need to wrap it in a single root element i.e <div>

  jsx= <div> <p> this is from client/main.js</p><p> hello {name}!</p></div>;
  jsx= (
    <div>
      <p> this is from client/main.js</p>
      <p> hello {name}!</p>
      </div>
  );
  ReactDOM.render (jsx,document.getElementById('content'));
});





//relative paths './../imports/file'
