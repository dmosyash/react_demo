import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <li>Hello {this.props.value}</li>
    );
  }
}

export default Name;
