import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col, Menu, Modal } from 'antd';
import 'moment/locale/zh-cn';

import moment from 'moment';

import Styles from './header.less';

moment.locale('zh-cn');


// const Option = Select.Option;
const MenuItem = Menu.Item;

class Header extends Component {
  // 退出登录
  logout = () => {
    Modal.confirm({
      title: '提示',
      content: '确认退出吗？',
      onOk: () => {
        this.props.dispatch({
          type: 'indexPage/logout',
        });
      },
    });
  }

  selectMenu = (e) => {
    const menuObj = {
      indexPage: '',
      customer: 'manageCustomer',
      ad: 'adList',
      adData: 'adData',
      financeRecord: 'financeRecord',
      manageAccount: 'manageAccount',
      myCenter: 'accountInfo',
    };
    this.props.dispatch({
      type: 'indexPage/setCurrentMenu',
      payload: {
        currentMenu: e.key,
      },
    });
    this.props.dispatch({
      type: 'indexPage/setCurrentSubMenu',
      payload: {
        currentSubMenu: menuObj[e.key],
      },
    });
  }

  render() {
    return (
      <Row className={Styles.header}>
        <Col span={16}>
          <Menu
            mode="horizontal"
            className={Styles.menu}
            onSelect={this.selectMenu}
            selectedKeys={[this.props.currentMenu]}
          >
            <MenuItem key="indexPage">
              <Link to="/page/indexPage">前台</Link>
            </MenuItem>
            <MenuItem key="customer">
              <Link to="/page/manageCustomer">订单</Link>
            </MenuItem>
            <MenuItem key="ad">
              <Link to="/page/adList">住客</Link>
            </MenuItem>
            <MenuItem key="adData">
              <Link to="/page/adData">渠道</Link>
            </MenuItem>
            <MenuItem key="financeRecord">
              <Link to="/page/financeRecord">统计</Link>
            </MenuItem>
          </Menu>
        </Col>
        <Col span={8}>
          <div className={Styles.account}>
            <span className={Styles.title}>当前账户</span>
            <span className={Styles.logout} onClick={this.logout}>退出</span>
            <Link className={Styles.myCenter} to="/page/accountInfo" onClick={this.selectMenu.bind(this, {"key": "myCenter"})}>个人中心</Link>
          </div>
        </Col>
      </Row>
    );
  }
}

export default connect((state) => {
  // const { currentMenu } = state.indexPage;
  return {
    // currentMenu,
  };
})(Header);
