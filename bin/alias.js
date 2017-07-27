/**
 * Created by caoxifeng on.
 */

var path = require('path');
var containerPath = path.resolve('./');

//	别名
var alias = {
    config: path.resolve(containerPath, './src/utils/config/'),
    action: path.resolve(containerPath, './src/actions/'),
    api: path.resolve(containerPath, './src/api/'),
    component: path.resolve(containerPath, './src/component/')
};
module.exports = alias;
