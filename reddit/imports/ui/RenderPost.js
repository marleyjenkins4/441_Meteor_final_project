import React from 'react'; // specficy the module and then specify  the library name
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';



export default class RenderPost extends React.Component{ // jsx requires uppercase when naming


  render(){
    return (
      <>
      <div key={this.props.post_prop_obj._id} className='single-block-item-style'>
          <button   className= 'button button--round' onClick={() => {
-
              UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes:1}})
          }}>+1</button>

          <button  className= ' button button--round ' onClick={() => {

              UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes:-1}})
          }}>-1</button>
            <button className= ' button button--round' onClick={() => {

                UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
            }}> X </button>
            {this.props.post_prop_obj.topic} have {this.props.post_prop_obj.votes} vote[s]{' '}

            </div>

      </>
    );
    }
  };
  RenderPost.propTypes ={
    post_prop_obj: PropTypes.object.isRequired,
  }
