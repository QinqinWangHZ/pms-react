import React, { Component, PropTypes } from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/layout/header';
import Nav from '../components/layout/sliderBar';

const { Sider } = Layout;


class Page extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="page">
        <Layout>
          <AppHeader router={this.props} />
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Nav />
            </Sider>
            <Layout style={{ padding: '0 15px 15px' }}>
              {this.props.children}
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}


Page.propTypes = {
  children: PropTypes.element,
}

export default Page
