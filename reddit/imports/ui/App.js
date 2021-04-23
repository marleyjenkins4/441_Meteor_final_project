import React from 'react';
import AddTopics from './AddTopics.js';
import TitleBar from './TitleBar.js';
import TopicList from './TopicList.js';
import PropTypes from 'prop-types';
export default class App extends React.Component{
  render(){
    return(
      <>
        <TitleBar
          title = {this.props.passedPropTitle}
          moderator={this.props.passedPropModerator}/>
          <div className='wrapper'>
            <AddTopics />
            <TopicList passed_posts= {this.props.passedPropAllPosts} />
        </div>
      </>
    )
  }
};
//require title and posts
App.propTypes ={
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired,
}
