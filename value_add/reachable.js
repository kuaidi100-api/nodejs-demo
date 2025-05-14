const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

class ReachableParam {
    constructor(recManPrintAddr, sendManPrintAddr, recManMobile,
                sendManName, recManName, kuaidicom, sendManMobile) {
        this.recManPrintAddr = recManPrintAddr;
        this.sendManPrintAddr = sendManPrintAddr;
        this.recManMobile = recManMobile;
        this.sendManName = sendManName;
        this.recManName = recManName;
        this.kuaidicom = kuaidicom;
        this.sendManMobile = sendManMobile;
    }
}

/**
 * 快递可用性接口
 */
async function reachable() {
    const method = "reachable";

    const param = new ReachableParam(
        "浙江省湖州市吴兴区织****",
        "福建省宁德市霞***",
        "****",
        "****",
        "***",
        "yuantong",
        "*****"
    );

    const t = Date.now().toString(); // 时间戳

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    try {
        await httpUtil.doMethodRequest(method, t, requestParams, URL.REACHABLE_URL);
    } catch (error) {
        console.error('快递可用性查询请求失败:', error.message);
    }
}

reachable();