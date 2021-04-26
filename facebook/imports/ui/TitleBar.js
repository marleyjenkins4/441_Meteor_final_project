import React from 'react'; // specficy the module and then specify  the library name
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{

renderModerator(){
  if(this.props.moderator){
    return <p className= 'title-bar__moderator'> moderator: {this.props.moderator}</p>


  } else{
    return  <p className= 'title-bar__moderator'> moderator unknown </p>
  }
}
  render(){
    return (
      <div className='wrapper'>
            <div className='title-bar'>
              <h1>{this.props.title}</h1>
              {this.renderModerator()}
            </div>
            </div>
    );
   } 

  }; // this class will move to imports/ui/Titlebar.js
  TitleBar.propTypes={ // this equals an object
    title : PropTypes.string.isRequired, //throws warnings in browser when not string
    //useful if you did create the componaent and if you are trying to use it wrong
    moderator : PropTypes.string,
  };

  // TitleBar.defaultProps={
  //   title: 'Default Title', // this removes the // WARNING:
  //
  // }



  // // jsx requires uppercase when naming
  // //by default react componants only need to define one method and it not the constructor
  // // it is a render method- this returns the jsx to the screen
  // render(){
  //   return (
  //     <>
  //       {/*<h1>441 reddit</h1>*/}
  //
  //        <h1>{this.props.title}</h1>
  //        {/* Challenge display a moderator for the 441 reddit page
  //          it should be required and should be a string
  //          in client/ main.js
  //          modify <TitleBar title = {title}/>
  //          in a manner to have moderator's name show up under the Title
  //          */}
  //
  //
  //       <p> moderator: {this.props.moderator}</p>
  //     </
