import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component{
  render(){
    return(
      <div className='footer'>
        <div className= 'footer-wrapper'>
          <p> {this.props.footerText}</p>
          </div>
          </div>
    );
  }
};
//require title and posts
Footer.propTypes ={
  footerText: PropTypes.string.isRequired,
};
