import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

export default class App extends Component {
  render() {
    return (
        <div>{this.props.children}</div>
    );
  }
}
