import moment from 'moment';
import React from 'react';
import { DatePicker } from 'antd';

// 推荐在入口文件全局设置 locale
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');
import 'moment/locale/ar-dz';

moment.locale('ar-dz');
const dateFormat = 'MMMM Do YY';

class DateRange extends React.Component {
  render() {
    return (
      <div>
        <DatePicker
          size="default"
          defaultValue={moment('2015/01/01', dateFormat)}
          format={dateFormat}
          showToday={false}
        />
      </div>
    );
  }
}
export default DateRange;
