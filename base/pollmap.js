const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

class PollMapParameters {
    constructor(callbackurl, salt, phone, resultv2) {
        this.callbackurl = callbackurl;
        this.salt = salt;
        this.phone = phone;
        this.resultv2 = resultv2;
    }
}

class PollMapParam {
    constructor(company, number, from, to, key, parameters) {
        this.company = company;
        this.number = number;
        this.from = from;
        this.to = to;
        this.key = key;
        this.parameters = parameters;
    }
}
/*
*地图轨迹推送接口
 */
async function pollMap() {
    const parameters = new PollMapParameters(
        "http://www.您的域名.com/kuaidi?callbackid=...",
        "*",
        "",
        "5"
    );

    const param = new PollMapParam(
        "ems",
        "1136281381675",
        "广东省深圳市南山区",
        "北京市朝阳区",
        account.KEY,
        parameters
    );

    const formData = {
        schema: "json",
        param: JSON.stringify(param)
    }

    try {
        await httpUtil.doMapRequest(formData, URL.POLL_MAP_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

pollMap();