import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './login.css';
import { Motion, spring } from 'react-motion';
import Input from './l-input';
import SubmitButton from './l-submitButton';

class SignExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexState: false,
      animIsFinished: false
    };
  }

  componentDidMount() {
    this.setState({ flexState: !this.state.flexState });
  }

  isFinished = () => {
    this.setState({ animIsFinished: true });
  };

  render() {
    return (
      <Motion
        style={{
          flexVal: spring(this.state.flexState ? 8 : 1)
        }}
        onRest={this.isFinished}>
        {({ flexVal }) => (
          <div
            className={
              this.props.type === 'signIn' ? 'signInExpanded' : 'signUpExpanded'
            }
            style={{
              flexGrow: `${flexVal}`
            }}>
            <Motion
              style={{
                opacity: spring(this.state.flexState ? 1 : 0, {
                  stiffness: 100,
                  damping: 20
                }),
                y: spring(this.state.flexState ? 0 : 20, {
                  stiffness: 50,
                  damping: 20
                })
              }}>
              {({ opacity, y }) => (
                <form
                  className="logForm"
                  style={{
                    WebkitTransform: `translate3d(0, ${y}px, 0)`,
                    transform: `translate3d(0, ${y}px, 0)`,
                    opacity: `${opacity}`
                  }}>
                  <h2>
                    {this.props.type === 'signIn' ? 'SIGN IN' : 'SIGN UP'}
                  </h2>
                  <Input id="login" type="text" placeholder="EMAIL" />
                  <Input id="password" type="password" placeholder="PASSWORD" />
                  <SubmitButton type={this.props.type} />
                </form>
              )}
            </Motion>
          </div>
        )}
      </Motion>
    );
  }
}

SignExpanded.PropTypes = {
  type: PropTypes.string
};

export default SignExpanded;
