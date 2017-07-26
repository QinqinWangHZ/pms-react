/**
 * Created by caoxifeng on.
 */

var path = require('path');
var containerPath = path.resolve('./');

//	别名
var alias = {
    config: path.resolve(containerPath, './app/src/utils/config'),
    action: path.resolve(containerPath, './app/src/actions'),
    api: path.resolve(containerPath, './app/src/api'),
    component: path.resolve(containerPath, './app/src/component')
};
module.exports = alias;
