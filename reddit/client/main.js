import React from 'react';

import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';


Meteor.startup(function(){
//basic functions that does ot accept any parameters
  const renderSomeParagraphs= function(){
    //return [<p> p1</p>, <p> p 2 </p> , <p> p 3 </p> ];
    return [<p key='1'> p1</p> , <p key='2'> p2</p>, <p key='3'> p3</p>];
  };
    const renderArrayMap= function(){
      let numbers=[{val:1},{val:2},{val:3}];
      //the following is an array map which is an array method
      //basically it is going to process the numbers renderArrayMap
      //one at a time- each array (e.g., val:1) is assigned to number
      let newNumbers= numbers.map(function(number){
        return number.val-1;

      });
      console.log(newNumbers);
    };
    const renderPosts= function(passed_posts){
      console.log(passed_posts);
      let numbers=[{val:11},{val:23},{val:33}];
      let newNumbers= numbers.map(function(number){
        return <p key={number.val}>{number.val}</p>;

      });
      return newNumbers;
    };
  let title="441 Reddit";
  let jsx= (
            <div>
              <h1> {title}</h1>
              {/* the following is static but in the future it will be dymnamic b/c it will come from idk i cant see */}
              {/*[<p key='1'> p1</p> , <p key='2'> p2</p>, <p key='3'> p3</p>]*/}
              {renderSomeParagraphs()}
              {renderArrayMap()}
              {renderPosts('hello')}
            </div>
  );
  ReactDOM.render (jsx,document.getElementById('content'));
});





//relative paths './../imports/file'
