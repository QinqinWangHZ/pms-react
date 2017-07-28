// 使用外部的 history 模块去掉 ?_k=adseis 这样的字符串
import { useRouterHistory } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
// { queryKey: true } 参数
// hashType:'hashbang'
// hashType:'noslash'
// hashType:'slash'//默认
export default useRouterHistory(createHashHistory)();
