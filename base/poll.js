const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

class PollParameters {
    constructor(callbackurl, salt, phone, resultv2) {
        this.callbackurl = callbackurl;
        this.salt = salt;
        this.phone = phone;
        this.resultv2 = resultv2;
    }
}

class PollParam {
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
快递信息推送服务-订阅接口
*/
async function poll() {
    const parameters = new PollParameters(
        "http://www.您的域名.com/kuaidi?callbackid=...",
        "XXXXXXXXXX",
        "13868688888",
        "4"
    );

    const param = new PollParam(
        "yuantong",
        "YT6186594166532",
        "",
        "",
        account.KEY,
        parameters
    );

    const formData = {
        schema: "json",
        param: JSON.stringify(param)
    }

    try {
        await httpUtil.doMapRequest(formData, URL.POLL_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

poll();