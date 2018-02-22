import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../components/Page';
import Comments from '../../components/Comment';
import { addComment, removeComment } from '../../../actions/comment';

class AboutPage extends Component {
  render() {
    return (
      <Page title="Abhoot" description="Hoot Hoot Hoot" id="about">
        <h1>Hoot Hoot Hoot</h1>
        <p>Hoot Hoot Hoot.</p>
        <button
          onClick={() => this.props.addComment({ text: 'This is a Comment' })}>
          Add Comment
        </button>
        <Comments
          comments={this.props.comments}
          removeFunc={this.props.removeComment}
        />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comment.comments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addComment, removeComment }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
