const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

class Attach {
    constructor(uri, type) {
        this.uri = uri;
        this.type = type;
    }
}

class WorkOrderReplyParam {
    constructor(consultId, content = '', attach = []) {
        this.consultId = consultId;
        this.content = content;
        this.attach = attach;
    }
}

/**
 * 查询留言接口
 */
async function workOrderReply() {
    const method = "queryReply";

    const param = new WorkOrderReplyParam("1056");

    const t = Date.now().toString(); // 时间戳

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    try {
        await httpUtil.doMethodRequest(method, t, requestParams, URL.WORK_ORDER_REPLY_URL);
    } catch (error) {
        console.error('查询留言请求失败:', error.message);
    }
}

/**
 * 新增留言接口
 */
async function workOrderAddReply() {
    const method = "addReply";

    const attach = new Attach("xxxxx", 0);

    const param = new WorkOrderReplyParam("1023", "testApi", [attach]);

    const t = Date.now().toString(); // 时间戳

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    try {
        await httpUtil.doMethodRequest(method, t, requestParams, URL.WORK_ORDER_REPLY_URL);
    } catch (error) {
        console.error('新增留言请求失败:', error.message);
    }
}


workOrderReply();
workOrderAddReply();