import React from 'react';   //specify the module and then specifcy the library name
                            //meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; //named export from Meteor

  //as far we have 3 ways to imports
  //1. relative paths './../imports/file'
  //2. npm libraries providig the name 'react-dom'
  //3. metoer modules 'metoer/meteor' . the meteor / removes name conflicts

Meteor.startup(function(){
  let name= 'newman';
  let jsx = (
          <div>
              <p> this is from client/main.js </p>
              <p> Hello {name} </p>
           </div>
         );

  ReactDOM.render (jsx,document.getElementById('content'));
});





//relative paths './../imports/file'
