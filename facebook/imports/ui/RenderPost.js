import React from 'react'; // specficy the module and then specify  the library name
import {UP_Collection_Access} from './../api/user_posts.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';
import CommentList from './CommentList.js';
import PropTypes from 'prop-types';
import AddComments from './AddComments.js';


export default class RenderPost extends React.Component{

  render(){
    return (
      <>
      <div key={this.props.post_prop_obj._id} className='single-block-item-style'>

      <div className='post'>
      <div>
          <h3 className='post__topic'>
          {this.props.post_prop_obj.topic}
         </h3>
           {'rank: ' + this.props.post_prop_obj.rank}

                       <p className='post__stats'>
                         {this.props.post_prop_obj.position} place
                         with {this.props.post_prop_obj.votes} vote[s]</p> {''/* single space before button hack */}
        <AddComments />



     </div>
        <div className='post__actions'>
                    <button   className= 'button button--round' onClick={() => {

                        UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes:1}})
                    }}>+1</button>

                    <button  className= ' button button--round ' onClick={() => {

                        UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes:-1}})
                    }}>-1</button>
                      <button className= ' button button--round' onClick={() => {

                          UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
                      }}> X </button>

                </div>

              </div>
              </div>

      </>
    );
    }
  };
  RenderPost.propTypes ={
    post_prop_obj: PropTypes.object.isRequired,


  }
