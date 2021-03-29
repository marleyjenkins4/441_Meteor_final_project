import React from 'react'; // specficy the module and then specify  the library name
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{ // jsx requires uppercase when naming
  //by default react componants only need to define one method and it not the constructor
  // it is a render method- this returns the jsx to the screen
  render(){
    return (
      <>

         <h1>{this.props.title}</h1>
      </>
    );
    }
  }; // this class will move to imports/ui/Titlebar.js
  TitleBar.propTypes={ // this equals an object
    title : PropTypes.string.isRequired, //throws warnings in browser when not string
    //useful if you did create the componaent and if you are trying to use it wrong
  };

  TitleBar.defaultProps={
    title: 'Default Title'; // this removes the // WARNING:
    
  }
