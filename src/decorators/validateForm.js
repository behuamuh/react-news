import React, { Component } from 'react';

export default Origin =>
  class ValidatedInput extends Component {
    state = {
      input: '',
    };

    handleChange = event => {
      this.setState({
        input: event.target.value,
      });
    };

    render() {
      const { input } = this.state;
      const { min = 0, max = Infinity, ...other } = this.props;
      return (
        <Origin
          {...other}
          value={input}
          handleChange={this.handleChange}
          className={validate(min, max, input) ? null : 'invalidInput'}
        />
      );
    }
  };

const validate = (min, max, string) =>
  !string.length || (string.length >= min && string.length <= max);
