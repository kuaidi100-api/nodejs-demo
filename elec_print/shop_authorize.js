const utils = require('../utils/httpUtil'); // 引入统一请求模块
const URL = require('../config/url');       // 引入配置路径

/**
 * ShopAuthorizeParam 类 - 获取店铺授权超链接参数模型
 */
class ShopAuthorizeParam {
    constructor({
        shopType,
        callbackUrl,
        salt
    } = {}) {
        this.shopType = shopType;
        this.callbackUrl = callbackUrl;
        this.salt = salt;
    }
}

/**
 * 获取店铺授权超链接接口
 */
async function shopAuthorize() {
    const param = new ShopAuthorizeParam({
        shopType: "TAOBAO",
        callbackUrl: "www.baidu.com",
        salt: "taobao"
    });

    const t = Date.now().toString(); // 时间戳（毫秒）

    const requestParams = {
        param: JSON.stringify(param)
    };

    try {
        await utils.doRequest(t, requestParams, URL.SHOP_AUTHORIZE_URL);
    } catch (error) {
        console.error('获取店铺授权失败:', error.message);
    }
}

// 自动执行
shopAuthorize();