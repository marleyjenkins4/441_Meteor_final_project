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



 const processFormDataFunction= (event) => {
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

              <TitleBar />
                <form onSubmit={processFormDataFunction}>
                <input type='text' name= "formInputNameAttribute" placeholder='Topic Name'/>
                <button> Add Topic </button>
                </form>
                {renderPosts(allPostsInDB)}
                <AddTopics />
              </div>
    );
    ReactDOM.render (jsx,document.getElementById('content'));
  });


  });


//db stuff

// to find a specfic topic db.user_posts_collection.find({topic: 'dogs'})

// to remove db.users_posts_collection.remove({topic: 'dogs'})
