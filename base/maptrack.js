const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');

class MapTrackParam {
    constructor(com, num, phone, from, to, resultv2, show, order) {
        this.com = com;
        this.num = num;
        this.phone = phone;
        this.from = from;
        this.to = to;
        this.resultv2 = resultv2;
        this.show = show;
        this.order = order;
    }
}

/*
快递查询地图轨迹
*/
async function mapTrack() {
    const param = new MapTrackParam(
        "ems",
        "em263999513jp",
        "13868688888",
        "广东省深圳市南山区金蝶软件园",
        "北京朝阳区国际金融大厦",
        "5",
        "0",
        "desc"
    );

    try {
        await httpUtil.customerRequest(JSON.stringify(param), URL.MAP_TRACK_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

mapTrack();