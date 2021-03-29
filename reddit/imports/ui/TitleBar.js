import React from 'react'; // specficy the module and then specify  the library name

export default class TitleBarExample extends React.Component{ // jsx requires uppercase when naming
  //by default react componants only need to define one method and it not the constructor
  // it is a render method- this returns the jsx to the screen
  render(){
    return (
      <>
         <h1>441 reddit</h1>
      </>
    );
    }
  }; // this class will move to imports/ui/Titlebar.js
