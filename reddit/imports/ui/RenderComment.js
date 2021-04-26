import React from 'react'; // specficy the module and then specify  the library name
import PropTypes from 'prop-types';
import AddComments from './AddComments.js';
import TopicList from './TopicList.js';

import {UC_Collection_Access} from './../api/user_comments.js';


export default class RenderComment extends React.Component{

  render(){
    return (
      <>

      <div key={this.props.comment_prop_obj._id}>
      <div>
      <div>
          <h3 >
          {this.props.comment_prop_obj.comment}
         </h3>
        <p>
            have {this.props.comment_prop_obj.votes} vote[s]{' '}
        </p>

     </div>

        <div>
                    <button   className= 'button button--round' onClick={() => {

                        UC_Collection_Access.update({_id: this.props.comment_prop_obj._id}, {$inc: {votes:1}})
                    }}>+1</button>

                    <button  className= ' button button--round ' onClick={() => {

                        UC_Collection_Access.update({_id: this.props.comment_prop_obj._id}, {$inc: {votes:-1}})
                    }}>-1</button>
                      <button className= ' button button--round' onClick={() => {

                          UC_Collection_Access.remove({_id: this.props.comment_prop_obj._id})
                      }}> X </button>

                </div>

              </div>
              </div>



      </>
    );
    }
  };
  RenderComment.propTypes ={
    comment_prop_obj: PropTypes.object.isRequired,
  }
