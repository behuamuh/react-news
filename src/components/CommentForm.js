import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addComment} from '../actions'

class CommentForm extends Component {
  state = {
    user: '',
    text: '',
  };

  validate = (field, min, max) => {
    return !field.length || (field.length >= min && field.length <= max);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { user, text } = this.state;
    this.props.addComment(user, text, this.props.articleID)
  }

  render() {
    const { user, text } = this.state;
    return (
      <div>
        User:
        <br />
        <input
          name="user"
          value={user}
          onChange={this.handleChange}
          className={this.validate(user, 5, 10) ? null : 'invalidInput'}
        />
        <br />
        Text:
        <br />
        <textarea
          name="text"
          value={text}
          onChange={this.handleChange}
          className={this.validate(text, 20, 50) ? null : 'invalidInput'}
        />
        <br/>
        <button onClick={this.handleSubmit}>Add comment</button>
      </div>
    );
  }
}

export default connect(
  null,
  {addComment}
)(CommentForm)