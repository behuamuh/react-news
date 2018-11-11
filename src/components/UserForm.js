import React, { Component } from 'react';

export default class UserForm extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <p>
        Name: <input value={this.state.name} onChange={this.handleChange} />
      </p>
    );
  }
}
