const common = require('./elec_common'); // 引入统一请求模块

/**
 * Contact 类 - 收件人/发件人信息模型
 */
class Contact {
    constructor({ name, mobile, printAddr, company } = {}) {
        this.name = name;
        this.mobile = mobile;
        this.printAddr = printAddr;
        this.company = company;
    }
}

/**
 * OrderParam 类 - 电子面单下单参数模型
 */
class OrderParam {
    constructor({
        partnerId,
        partnerKey,
        code,
        kuaidicom,
        recMan,
        sendMan,
        cargo,
        tempId,
        childTempId,
        backTempId,
        payType,
        expType,
        remark,
        collection,
        needChild,
        needBack,
        count,
        printType,
        siid,
        needDesensitization,
        needLogo,
        needOcr
    } = {}) {
        this.partnerId = partnerId;
        this.partnerKey = partnerKey;
        this.code = code;
        this.kuaidicom = kuaidicom;
        this.recMan = recMan;
        this.sendMan = sendMan;
        this.cargo = cargo;
        this.tempId = tempId;
        this.childTempId = childTempId;
        this.backTempId = backTempId;
        this.payType = payType;
        this.expType = expType;
        this.remark = remark;
        this.collection = collection;
        this.needChild = needChild;
        this.needBack = needBack;
        this.count = count;
        this.printType = printType;
        this.siid = siid;
        this.needDesensitization = needDesensitization;
        this.needLogo = needLogo;
        this.needOcr = needOcr;
    }
}

/**
 * 电子面单 - 下单接口
 */
async function order() {
    const recMan = new Contact({
        name: "张三",
        mobile: "13888888888",
        printAddr: "广东深圳市南山区金蝶软件园",
        company: ""
    });

    const sendMan = new Contact({
        name: "李四",
        mobile: "13888888888",
        printAddr: "广东深圳市南山区金蝶软件园",
        company: ""
    });

    const param = new OrderParam({
        partnerId: "123456",
        partnerKey: "",
        code: "",
        kuaidicom: "zhaijisong",
        recMan: recMan,
        sendMan: sendMan,
        cargo: "test",
        tempId: "60f6c17c7c223700131d8bc3",
        childTempId: "61bff9efc66fb00013a1b168",
        backTempId: "61bffa26c66fb00013a1b16c",
        payType: "SHIPPER",
        expType: "标准快递",
        remark: "测试下单,请勿发货",
        collection: "0",
        needChild: "0",
        needBack: "0",
        count: 1,
        printType: "CLOUD",
        siid: "KX100*******",
        needDesensitization: true,
        needLogo: true,
        needOcr: false
    });

    const method = "order";

    try {
        await common.DoLabelOrderRequest(method, param);
    } catch (error) {
        console.error('电子面单下单失败:', error.message);
    }
}

// 自动执行
order();