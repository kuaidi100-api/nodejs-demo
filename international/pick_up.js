const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');

class SendMan {
    constructor(name, mobile, addr, countryCode, city, zipcode) {
        this.name = name;
        this.mobile = mobile;
        this.addr = addr;
        this.countryCode = countryCode;
        this.city = city;
        this.zipcode = zipcode;
    }
}

class RecMan {
    constructor(name, mobile, addr, countryCode, city, zipcode) {
        this.name = name;
        this.mobile = mobile;
        this.addr = addr;
        this.countryCode = countryCode;
        this.city = city;
        this.zipcode = zipcode;
    }
}

class PackageInfo {
    constructor(height, width, length, weight) {
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
    }
}

class PickUpParam {
    constructor(pickupTimestamp, pickupLocationCloseTime, instruction,
                partnerId, partnerName, partnerSecret, kuaidicom,
                sendMan, recMan, packageInfos) {
        this.pickupTimestamp = pickupTimestamp;
        this.pickupLocationCloseTime = pickupLocationCloseTime;
        this.instruction = instruction;
        this.partnerId = partnerId;
        this.partnerName = partnerName;
        this.partnerSecret = partnerSecret;
        this.kuaidicom = kuaidicom;
        this.sendMan = sendMan;
        this.recMan = recMan;
        this.packageInfos = packageInfos;
    }
}

/**
* 预约取件API
 */
async function pickUp() {
    const sendMan = new SendMan(
        "Kaka",
        "13500000000",
        "Kingdee Software Park",
        "CN",
        "SHEN ZHEN",
        "518057"
    );

    const recMan = new RecMan(
        "Cindy Martinez / Ana Luz Medina",
        "(86)13510002000",
        "Apoquindo 4001, of. 501. Las Condes",
        "CL",
        "Santiago",
        "7550000"
    );

    const packageInfos = [
        new PackageInfo("10", "20", "11", "0.1"),
        new PackageInfo("10", "20", "11", "0.1"),
        new PackageInfo("10", "20", "11", "0.1")
    ];

    const param = new PickUpParam(
        "2022-05-16 08:41:35",
        "17:00",
        "Collect at reception",
        "******",
        "******",
        "******",
        "dhl",
        sendMan,
        recMan,
        packageInfos
    );

    const t = Date.now().toString();

    try {
        await httpUtil.doRequest(t, JSON.stringify(param), URL.PICK_UP_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

pickUp();