import React from 'react';
import { LocaleProvider, Radio } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import skSK from 'antd/lib/locale-provider/sk_SK';
// 推荐在入口文件全局设置 locale
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');
// import moment from 'moment';
// import 'moment/locale/ar-dz';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Date from '../components/date.js';

moment.locale('en');


class DateRange extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: enUS,
    };
  }
  changeLocale = (e) => {
    const localeValue = e.target.value;
    console.log(localeValue);
    this.setState({ locale: localeValue });
    // if (!localeValue) {
    //   moment.locale('zh-cn');
    // } else {
    //   moment.locale('en');
    // }
  }
  render() {
    return (
      <div>
        <div className="change-locale">
          <span style={{ marginRight: 16 }}>Change locale of components: </span>
          <Radio.Group defaultValue={enUS} onChange={this.changeLocale}>
            <Radio.Button key="en" value={enUS}>English</Radio.Button>
            <Radio.Button key="cn" >中文</Radio.Button>
            <Radio.Button key="sk" value={skSK}>第三种</Radio.Button>
          </Radio.Group>
        </div>
        <LocaleProvider locale={this.state.locale}><Date /></LocaleProvider>
      </div>
    );
  }
}
export default DateRange;
