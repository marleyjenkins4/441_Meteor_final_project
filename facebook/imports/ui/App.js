import React from 'react';
import AddTopics from './AddTopics.js';
import TitleBar from './TitleBar.js';
import TopicList from './TopicList.js';
import CommentList from './CommentList.js';
import PropTypes from 'prop-types';
import AddComments from './AddComments.js';
import Footer from './Footer.js';

export default class App extends React.Component{
  render(){
    return(
      <>
        <TitleBar
          title = {this.props.passedPropTitle}
          moderator={this.props.passedPropModerator}/>
          <div className='wrapper'>
            <AddTopics />

            <TopicList passed_posts= {this.props.passedPropAllPosts}
              passed_comments={this.props.passedPropAllComments}
/>


        </div>
        <Footer footerText={this.props.passedFooter} />
      </>
    )
  }
};

//require title and posts
App.propTypes ={
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired,
}
