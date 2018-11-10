import React, { Component } from 'react';

export default Original =>
  class ToggleOpen extends Component {
    state = {
      isOpen: false,
    };

    toggleOpen = () => {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    };

    render() {
      const { isOpen } = this.state;
      return (
        <Original
          {...this.props}
          toggleOpen={this.toggleOpen}
          isOpen={isOpen}
        />
      );
    }
  };
