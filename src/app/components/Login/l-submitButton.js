import React from 'react';
import PropTypes from 'prop-types';
import './login.css';
import { MdArrowForward } from 'react-icons/lib/md';
import { FaGooglePlus } from 'react-icons/lib/fa';

const SubmitButton = props => {
  let socialNets = null;

  if (props.type === 'signIn') {
    socialNets = (
      <div className="socialNets">
        <FaGooglePlus className="socialNetsIcon" />
      </div>
    );
  } else {
    socialNets = <div className="socialNets" />;
  }
  return (
    <div className={'submitButton'}>
      {socialNets}
      <button
        className={props.type === 'signIn' ? 'submitSignIn' : 'submitSignUp'}>
        <MdArrowForward />
      </button>
    </div>
  );
};

SubmitButton.PropTypes = {
  type: PropTypes.String
};

export default SubmitButton;
