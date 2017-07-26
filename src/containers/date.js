import moment from 'moment';
import React, { Component } from 'react';
import { DatePicker } from 'antd';

// 推荐在入口文件全局设置 locale
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');
import 'moment/locale/ar-dz';

moment.locale('ar-dz');

class DateRange extends React.Component {
  render() {
    return (
      <div>
        <br /><br />
        <DatePicker size="default" defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
      </div>
    );
  }
}
export default DateRange;
