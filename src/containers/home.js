import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../src/stylesheet/home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          首页
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(
  mapStateToProps,
)(Home);
