const utils = require('../utils/httpUtil'); // 引入统一请求模块
const URL = require('../config/url');       // 引入配置路径

/**
 * QueryBalanceParam 类 - 第三方平台网点&面单余额查询参数模型
 */
class QueryBalanceParam {
    constructor({
        partnerId,
        partnerKey,
        net,
        com
    } = {}) {
        this.partnerId = partnerId;
        this.partnerKey = partnerKey;
        this.net = net;
        this.com = com;
    }
}

/**
 * 获取第三方平台网点&面单余额接口
 */
async function getThirdInfo() {
    const method = "getThirdInfo"; // 接口方法名

    const param = new QueryBalanceParam({
        partnerId: "123",
        partnerKey: "123",
        net: "taobao",
        com: "shentong"
    });

    const t = Date.now().toString(); // 时间戳（毫秒）

    const requestParams = {
        param: JSON.stringify(param)
    };

    try {
        await utils.doMethodRequest(method, t, requestParams, URL.THIRD_INFO_URL);
    } catch (error) {
        console.error('获取第三方平台网点&面单余额失败:', error.message);
    }
}

// 自动执行
getThirdInfo();