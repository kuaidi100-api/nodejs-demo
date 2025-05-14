const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

/**
 * 快递100短信发送接口
 */
async function smsSend() {
    const signStr = account.KEY + account.USER_ID;
    const crypto = require('crypto');
    const sign = crypto.createHash('md5').update(signStr).digest('hex').toUpperCase();

    const m = {
        sign: sign,
        userid: "9974ef2c377a4dbt9",
        seller: "快递100",
        phone: "13568688888",
        tid: "11",
        content: JSON.stringify({
            接收人姓名: "王帅",
            公司名: "快递100",
            快递单号: "154893238584",
            url: "https://api.kuaidi100.com/home"
        }),
        outorder: "143255893",
        callback: "http://xxx/callback"
    };

    try {
        await httpUtil.doMapRequest(m, URL.SMS_SEND_URL);
    } catch (error) {
        console.error('短信发送请求失败:', error.message);
    }
}

smsSend();