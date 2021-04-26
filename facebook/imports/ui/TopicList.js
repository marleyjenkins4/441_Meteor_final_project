import React from 'react';
import RenderPost from './RenderPost.js';
import RenderComment from './RenderComment.js';

import PropTypes from 'prop-types';

export default class TopicList extends React.Component{
  renderAllPosts(){
    if(this.props.passed_posts.length ===0 ){
      return(
        <>


        <div className='single-block-item-style'>
          <p className= 'single-block-item-style__message'>
            Add a new topic to get started!
          </p>
          <p className= 'single-block-item-style__message single-block-item-style__message--empty'>
            empty message with modifiers
            </p>
            </div>

          </>


      );
    }
    else{
      return this.props.passed_posts.map((post) => {

        return <RenderPost key= {post._id} post_prop_obj={post}/>
      });
}
  }


    renderAllComments(){

        return this.props.passed_comments.map((comment) => {
          return <RenderComment key= {comment._id} comment_prop_obj={comment}/>
        });
  }
  render(){
    return(
      <>
      {this.renderAllPosts()}
    {this.renderAllComments()}
      </>
    )
  }
};




TopicList.propTypes ={
  passed_posts: PropTypes.array.isRequired,
  passed_comments: PropTypes.array.isRequired,

}
