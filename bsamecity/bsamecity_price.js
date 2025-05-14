const common = require('./bsamecity_common'); // 引入统一请求模块

/**
 * Goods 类 - 商品信息模型
 */
class Goods {
    constructor({ name, type, count } = {}) {
        this.name = name;
        this.type = type;
        this.count = count;
    }
}

/**
 * PriceParam 类 - 同城快递价格查询参数模型
 */
class PriceParam {
    constructor({
        kuaidicom,
        lbsType,
        recManName,
        recManMobile,
        recManProvince,
        recManCity,
        recManDistrict,
        recManAddr,
        recManLat,
        recManLng,
        sendManName,
        sendManMobile,
        sendManProvince,
        sendManCity,
        sendManDistrict,
        sendManAddr,
        sendManLat,
        sendManLng,
        weight,
        remark,
        volume,
        orderType,
        expectPickupTime,
        expectFinishTime,
        insurance,
        price,
        goods,
        callbackUrl,
        salt
    } = {}) {
        this.kuaidicom = kuaidicom;
        this.lbsType = lbsType;
        this.recManName = recManName;
        this.recManMobile = recManMobile;
        this.recManProvince = recManProvince;
        this.recManCity = recManCity;
        this.recManDistrict = recManDistrict;
        this.recManAddr = recManAddr;
        this.recManLat = recManLat;
        this.recManLng = recManLng;
        this.sendManName = sendManName;
        this.sendManMobile = sendManMobile;
        this.sendManProvince = sendManProvince;
        this.sendManCity = sendManCity;
        this.sendManDistrict = sendManDistrict;
        this.sendManAddr = sendManAddr;
        this.sendManLat = sendManLat;
        this.sendManLng = sendManLng;
        this.weight = weight;
        this.remark = remark;
        this.volume = volume;
        this.orderType = orderType;
        this.expectPickupTime = expectPickupTime;
        this.expectFinishTime = expectFinishTime;
        this.insurance = insurance;
        this.price = price;
        this.goods = goods; // 数组类型
        this.callbackUrl = callbackUrl;
        this.salt = salt;
    }
}

/**
 * 同城快递 - 查询价格接口
 */
async function getPrice() {
    const goods = [
        new Goods({
            name: "外卖",
            type: "食品",
            count: 0
        })
    ];

    const param = new PriceParam({
        kuaidicom: "shunfengtongcheng",
        lbsType: 2,
        recManName: "张三",
        recManMobile: "13587654321",
        recManProvince: "北京市",
        recManCity: "北京市",
        recManDistrict: "海淀区",
        recManAddr: "学清嘉创大厦A座15层",
        recManLat: "40.014838",
        recManLng: "116.352569",
        sendManName: "李四",
        sendManMobile: "13512345678",
        sendManProvince: "北京市",
        sendManCity: "北京市",
        sendManDistrict: "海淀区",
        sendManAddr: "清华大学",
        sendManLat: "40.002436",
        sendManLng: "116.326582",
        weight: "1",
        remark: "测试下单",
        volume: "",
        orderType: 0,
        expectPickupTime: "",
        expectFinishTime: "",
        insurance: "",
        price: "0",
        goods: goods,
        callbackUrl: "http://www.baidu.com",
        salt: ""
    });

    const method = "price";

    try {
        await common.doBsamecityRequest(method, param);
    } catch (error) {
        console.error('同城快递价格查询失败:', error.message);
    }
}

// 自动执行
getPrice();