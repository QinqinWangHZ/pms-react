import '../../src/stylesheet/home.scss';

import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'

 class Home extends Component {
    constructor(props) {
      super(props);
   }

  render() {
    // let user = this.props.home.user.name;
    // let age = this.props.home.user.age;
    return (
      <div>
        <div className="home">
            首页
        </div>
        <div>
          {this.props.children}
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  home: state.home
});

export default connect(
  mapStateToProps
)(Home)
