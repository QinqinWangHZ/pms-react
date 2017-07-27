import React from 'react';
import { Pagination, DatePicker, Modal } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

const RangePicker = DatePicker.RangePicker;

class Date extends React.Component {
  state = {
    visible: false,
  }
  showModal = () => {
    this.setState({ visible: true });
  }
  hideModal = () => {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div className="locale-components">
        <div className="example">
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>
        <div className="example">
          <DatePicker />
          <RangePicker style={{ width: 200 }} />
        </div>
        <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
          <p>Locale Modal</p>
        </Modal>
      </div>
    );
  }
}

export default Date;
