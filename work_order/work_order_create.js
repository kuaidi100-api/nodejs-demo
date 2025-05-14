const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

class Attach {
    constructor(type, uri) {
        this.type = type;
        this.uri = uri;
    }
}

class Desc {
    constructor(attach) {
        this.attach = attach;
    }
}

class WorkOrderCreateParam {
    constructor(kuaidinum, telWeight, callBackUrl, secondType, desc, content) {
        this.kuaidinum = kuaidinum;
        this.telWeight = telWeight;
        this.callBackUrl = callBackUrl;
        this.secondType = secondType;
        this.desc = desc;
        this.content = content;
    }
}

/**
 * 创建工单接口
 */
async function workOrderCreate() {
    const attach = new Attach(0, 'http://xxxxxxxxxxxxxxxxxxxxx');
    const desc = new Desc([attach]);

    const param = new WorkOrderCreateParam(
        'asdsd123123123',
        '1',
        'http://127.0.0.1:9100/apitest/apiOrder/callback',
        4,
        desc,
        '重量异常'
    );

    const t = Date.now().toString(); // 时间戳

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    try {
        await httpUtil.doRequest(t, requestParams, URL.WORK_ORDER_CREATE_URL);
    } catch (error) {
        console.error('创建工单请求失败:', error.message);
    }
}

workOrderCreate();