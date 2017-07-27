
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
// import Styles from './sliderBar.less';
import './sliderBar.less';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class SlideBar extends Component {

  selectMenu = (e) => {
    this.props.dispatch({
      type: 'indexPage/setCurrentSubMenu',
      payload: {
        // currentSubMenu: e.key,
      },
    });
  }

  renderIndexPageMenu = () => {

    return (
      <Menu
        mode="inline"
        className="menu"
        onSelect={this.selectMenu}
        openKeys={['customer', 'ad', 'data', 'financeRecord', 'account']}
        // selectedKeys={[this.props.currentSubMenu]}
      >
        <SubMenu key="ad" title={<span><Icon type="caret-right" /><span>广告</span></span>}>
          <MenuItem key="all">
            <Link to="/page/all">全部</Link>
          </MenuItem>
          <MenuItem key="now1">
            <Link to="/page/now1">待分房</Link>
          </MenuItem>
          <MenuItem key="now2">
            <Link to="/page/now2">今日到店</Link>
          </MenuItem>
          <MenuItem key="now3">
            <Link to="/page/now3">当前在店</Link>
          </MenuItem>
          <MenuItem key="now4">
            <Link to="/page/now4">预定未到</Link>
          </MenuItem>
          <MenuItem key="now5">
            <Link to="/page/now5">今日离店</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu key="customer" title={<span><Icon type="caret-right" /><span>渠道直连</span></span>}>
          <MenuItem key="now6">
            <Link to="/page/now6">全部</Link>
          </MenuItem>
          <MenuItem key="now7">
            <Link to="/page/now7">待确认</Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    );
  }

  render() {
    return (
      <div className="nav">
        <a className="logo" href='javascript:void(0)'></a>
        {this.renderIndexPageMenu()}
      </div>
    )
  }
}

export default connect((state) => {
  return {
  }
})(SlideBar);
