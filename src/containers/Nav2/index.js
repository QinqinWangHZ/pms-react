import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

export default class Nav2 extends Component {
  render() {
    return (
        <div className="nav2_container">
          <div className="nav2_side">
            <div className="ss_left">
              <ul>
                <li>1111</li>
              </ul>
            </div>
            <div className="ss_right">{this.props.children}</div>
          </div>
        </div>
    );
  }
}
