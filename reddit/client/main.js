import React from 'react'; // specficy the module and then specify  the library name
                           //meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; //named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';

//the following is an empty array b/c DDP has synched up with the two DB
console.log(UP_Collection_Access.find().fetch());

//hack fix- set timeout
setTimeout(function(){
  console.log('Posting 2', UP_Collection_Access.find().fetch());

},1000);
//this is a bad solution because it only fires content//if the data updates we wont see the updates


const renderPosts= function(passed_posts){
  console.log(passed_posts);

  let formattedPosts = passed_posts.map(function(post){
    return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;

  });
  return formattedPosts;
};




Meteor.startup(function(){
  //it is better to use built in meteor function called Tracker
  //Tracker queries and reruns code when queries  change
  Tracker.autorun(function() {
  //  console.log('Posting 3', UP_Collection_Access.find().fetch());
    const posts=UP_Collection_Access.find().fetch();

  let title="CSCI EXAM";
  let jsx= (
            <div>

              <h1> {title}</h1>



              {renderPosts(posts)}

            </div>
  );
  ReactDOM.render (jsx,document.getElementById('content'));
});



});
