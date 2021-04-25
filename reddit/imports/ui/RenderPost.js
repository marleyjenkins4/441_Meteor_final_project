import React from 'react'; // specficy the module and then specify  the library name
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';
import AddTopics from './AddTopics.js';
import AddComments from './AddComments.js';

import {UC_Collection_Access} from './../api/user_comments.js';


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
        <p className='post__stats'>
            have {this.props.post_prop_obj.votes} vote[s]{' '}
        </p>

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
