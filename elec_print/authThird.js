const utils = require('../utils/httpUtil'); // 引入统一请求模块
const URL = require('../config/url');       // 引入配置

/**
 * AuthThirdParam 类 - 第三方平台账号授权参数模型
 */
class AuthThirdParam {
    constructor({
        net,
        callBackUrl,
        partnerId,
        view
    } = {}) {
        this.net = net;
        this.callBackUrl = callBackUrl;
        this.partnerId = partnerId;
        this.view = view;
    }
}

/**
 * 电子面单 - 第三方平台账号授权接口
 */
async function authThird() {
    const param = new AuthThirdParam({
        net: "123",
        callBackUrl: "www.baidu.com",
        partnerId: "123",
        view: "web"
    });

    const t = Date.now().toString(); // 时间戳（毫秒）

    const requestParams = {
        param: JSON.stringify(param)
    };

    try {
        await utils.doRequest(t, requestParams, URL.AUTH_URL);
    } catch (error) {
        console.error('第三方平台账号授权失败:', error.message);
    }
}

// 自动执行
authThird();