import React from 'react';

import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';




const renderPosts= function(passed_posts){
  console.log(passed_posts);

  let formattedPosts = passed_posts.map(function(post){
    return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;

  });
  return formattedPosts;
};



const renderCandidates = function(candidateList) {
    return candidateList.map(function(candidate) {

      return <p key={candidate._id}>{candidate.name} have {candidate.votes} vote[s]</p>;
    });

};



Meteor.startup(function(){


  const candidates = [{
      _id: '01',
      name: 'pat',
      votes: 5,
    }, {
      _id: '02',
      name: 'chris',
      votes: 2,
    }
  ];

const posts=[{

            _id: '01',
            topic:'cats',
            votes: 3,
          },
          {
            _id: '02',
            topic:'dogs',
            votes: 2,
          },
          {
            _id: '03',
            topic:'birds',
            votes: 5,
          }
];
  let title="441 Reddit";
  let jsx= (
            <div>
            
              <h1> {title}</h1>

              {/*renderPosts('hello')*/}
              {renderPosts(posts)}
              {renderCandidates(candidates)}


            </div>
  );
  ReactDOM.render (jsx,document.getElementById('content'));
});





//relative paths './../imports/file'
