import React from 'react'; // specficy the module and then specify  the library name
                           //meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; //named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import TitleBar from './../imports/ui/TitleBar.js';
import AddTopics from './../imports/ui/AddTopics.js';




//the following is an empty array b/c DDP has synched up with the two DB
console.log(UP_Collection_Access.find().fetch());

//hack fix- set timeout
setTimeout(function(){
  console.log('Posting 2', UP_Collection_Access.find().fetch());

},1000);
//this is a bad solution because it only fires content//if the data updates we wont see the updates


const renderPosts= (passed_posts) => {
  //console.log(passed_posts);

  let formattedPosts = passed_posts.map((post) => {

    return  (  <p key={post._id}>{post.topic} have {post.votes} vote[s]{' '}
    <button onClick={() => {

        UP_Collection_Access.update({_id: post._id}, {$inc: {votes:1}})
    }}>+1</button>
    <button onClick={() => {

        UP_Collection_Access.update({_id: post._id}, {$inc: {votes:-1}})
    }}>-1</button>
      <button onClick={() => {

          UP_Collection_Access.remove({_id: post._id})
      }}> X </button>
      </p>
);
    // return
    // (
    //     <p key={post._id}>{post.topic} have {post.votes} vote[s] {''}
    //     <button onClick={() => { //nice anonymous arrow functions
    //       UP_Collection_Access.remove({_id: post._id})
    //     }} X </button>
    //     </p>
    // );

  });
  return formattedPosts;
};









  Meteor.startup(() => {

    //it is better to use built in meteor function called Tracker
    //Tracker queries and reruns code when queries  change
    Tracker.autorun(() => {
    //  console.log('Posting 3', UP_Collection_Access.find().fetch());
      const allPostsInDB=UP_Collection_Access.find().fetch();

    let title="441 reddit";
    let jsx= (
              <div>

              <TitleBar  title = {title} moderator='newman'/>
               <AddTopics />
                {renderPosts(allPostsInDB)}

              </div>
    );
    ReactDOM.render (jsx,document.getElementById('content'));
  });


  });


//db stuff

// to find a specfic topic db.user_posts_collection.find({topic: 'dogs'})

// to remove db.users_posts_collection.remove({topic: 'dogs'})
