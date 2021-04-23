import React from 'react'; // specficy the module and then specify  the library name



export default class RenderPost extends React.Component{ // jsx requires uppercase when naming


  render(){
    return (
      <>
      <p key={this.props.post_prop_obj._id}>
      {this.props.post_prop_obj.topic} have {this.props.post_prop_obj.votes} vote[s]{' '}
        <button onClick={() => {

            UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes:1}})
        }}>+1</button>
        <button onClick={() => {

            UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes:-1}})
        }}>-1</button>
          <button onClick={() => {

              UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
          }}> X </button>
          </p>

      </>
    );
    }
  };
