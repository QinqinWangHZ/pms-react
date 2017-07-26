// 使用外部的 history 模块去掉 ?_k=adseis 这样的字符串
import { useRouterHistory } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

export default useRouterHistory(createHashHistory)({ queryKey: false });
