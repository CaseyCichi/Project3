import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../components/Page';
import { addNotification } from '../../../actions/notification';

class Homepage extends Component {
  render() {
    return (
      <Page title="Homepage" id="homepage">
        <h1>Hoot!</h1>
        <button
          onClick={() => this.props.addNotification({ text: 'hooty hoot' })}>
          Add notification
        </button>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addNotification }, dispatch);

export default connect(null, mapDispatchToProps)(Homepage);
