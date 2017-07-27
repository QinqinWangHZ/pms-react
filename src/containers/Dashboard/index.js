import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

export default class App extends Component {
  render() {
    return (
        <div>
          <div>我是header</div>
          <div>{this.props.children}</div>
          <div>我是footer</div>
        </div>
    );
  }
}
