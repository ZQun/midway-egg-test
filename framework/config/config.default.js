const path = require('path');
const fs = require('fs');

module.exports = appInfo => {

    const config = {};

    // 透过nginx 获取真实IP
    config.proxy = true;

    config.coreMiddleware = [];

    return config;
};
