const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

class WorkOrderQueryParam {
    constructor(consultId) {
        this.consultId = consultId;
    }
}

/**
 * 查询工单接口
 */
async function workOrderQuery() {

    const param = new WorkOrderQueryParam("1");

    const t = Date.now().toString(); // 时间戳

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    try {
        await httpUtil.doRequest(t, requestParams, URL.WORK_ORDER_QUERY_URL);
    } catch (error) {
        console.error('查询工单请求失败:', error.message);
    }
}

workOrderQuery();