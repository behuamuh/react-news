import React, { Component } from 'react';

export default Origin =>
  class ToggleAccordeon extends Component {
    constructor(props) {
      super(props);
      this.state = {
        openedId: null,
      };
    }

    toggleOpen = id => () => {
      const { openedId } = this.state;
      this.setState({
        openedId: id === openedId ? null : id,
      });
    };

    render() {
      return (
        <Origin {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
      );
    }
  };
