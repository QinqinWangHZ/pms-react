import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

export default class App extends Component {
  render() {
    return (
        <div className="nav2_container">
          <div className="nav2_side">
            <div className="ss_left">左边</div>
            <div className="ss_right">右边</div>
          </div>
        </div>
    );
  }
}
