const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');

class CancelPickUpParam {
    constructor(pickUpDate, location, partnerId, partnerName, partnerSecret, partnerKey, code, kuaidicom, pickupConfirmationNumber) {
        this.pickUpDate = pickUpDate;
        this.location = location;
        this.partnerId = partnerId;
        this.partnerName = partnerName;
        this.partnerSecret = partnerSecret;
        this.partnerKey = partnerKey;
        this.code = code;
        this.kuaidicom = kuaidicom;
        this.pickupConfirmationNumber = pickupConfirmationNumber;
    }
}

/**
* 取消预约API
 */
async function cancelPickUp() {
    const param = new CancelPickUpParam(
        "2022-05-31",
        "CN",
        "xxx",
        "xxx",
        "xxx",
        "xxx",
        "xxx",
        "dhl",
        "CBJ220608002901"
    );

    const t = Date.now().toString();

    try {
        await httpUtil.doRequest(t, JSON.stringify(param), URL.CANCEL_PICK_UP_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

cancelPickUp();