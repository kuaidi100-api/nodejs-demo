const common = require('./corder_common'); // 引入统一请求模块

/**
 * CreateParam 类 - 创建C端快递订单参数模型
 */
class CreateParam {
    constructor({
        kuaidicom,
        recManName,
        recManMobile,
        recManPrintAddr,
        sendManName,
        sendManMobile,
        sendManPrintAddr,
        cargo,
        callBackUrl,
        payment,
        weight,
        remark,
        salt,
        dayType,
        pickupStartTime,
        pickupEndTime,
        op,
        pollCallBackUrl,
        resultv2
    } = {}) {
        this.kuaidicom = kuaidicom;
        this.recManName = recManName;
        this.recManMobile = recManMobile;
        this.recManPrintAddr = recManPrintAddr;
        this.sendManName = sendManName;
        this.sendManMobile = sendManMobile;
        this.sendManPrintAddr = sendManPrintAddr;
        this.cargo = cargo;
        this.callBackUrl = callBackUrl;
        this.payment = payment;
        this.weight = weight;
        this.remark = remark;
        this.salt = salt;
        this.dayType = dayType;
        this.pickupStartTime = pickupStartTime;
        this.pickupEndTime = pickupEndTime;
        this.op = op;
        this.pollCallBackUrl = pollCallBackUrl;
        this.resultv2 = resultv2;
    }
}

/**
 * C端寄件 - 创建订单接口
 */
async function create() {
    const param = new CreateParam({
        kuaidicom: "yuantong",
        recManName: "王超",
        recManMobile: "12345678910",
        recManPrintAddr: "西藏日喀则市定日县珠穆朗玛峰",
        sendManName: "王大",
        sendManMobile: "12345678910",
        sendManPrintAddr: "西藏日喀则市定日县珠穆朗玛峰",
        cargo: "文件",
        callBackUrl: "http://www.baidu.com",
        payment: "SHIPPER",
        weight: "1",
        remark: "",
        salt: "",
        dayType: "",
        pickupStartTime: "",
        pickupEndTime: "",
        op: "0",
        pollCallBackUrl: "",
        resultv2: "0"
    });

    const method = "cOrder";

    try {
        await common.doCorderRequest(method, param);
    } catch (error) {
        console.error('C端快递订单创建失败:', error.message);
    }
}

// 自动执行
create();