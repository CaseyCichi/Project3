import React from 'react';
import './login.css';
import { MdArrowBack } from 'react-icons/lib/md';

const NavigationPanel = props => {
  return (
    <div className="NavigationPanel">
      <MdArrowBack onClick={props.initialState} className="back" />
      <div className="dots" />
      <div style={{ flex: 2 }} />
    </div>
  );
};

export default NavigationPanel;
