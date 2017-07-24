import '../../src/stylesheet/list.scss';
import React, {Component, PropTypes} from 'react';
import { Rate,Switch,Icon,DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default  class Test extends Component {
  state = {
    value: 3,
    count: null,
  }
  handleChange = (value) => {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <div className="tt">
      <div className="list">我是list</div>
        <span>
          <DatePicker onChange={onChange} />
          <Switch checkedChildren="开" unCheckedChildren="关" />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
          <Rate onChange={this.handleChange} value={value} />
          {value && <span className="ant-rate-text">{value} stars</span>}
        </span>
      </div>
    );
  }
}
