const fs = require('fs');
const path = require('path');
const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');
const crypto = require('crypto');

class WorkOrderUploadParam {
    constructor(fileName) {
        this.fileName = fileName;
    }
}

/**
 * 上传附件接口
 * @param {string} filePath 文件路径
 */
async function workOrderUpload(filePath) {
    // 获取文件名
    const fileName = path.basename(filePath);

    // 构造参数对象
    const param = new WorkOrderUploadParam(fileName);

    const paramStr = JSON.stringify(param);
    const t = Date.now().toString(); // 时间戳

    // 计算签名
    const signStr = paramStr + t + account.KEY + account.SECRET;
    const sign = crypto.createHash('md5')
                       .update(signStr)
                       .digest('hex')
                       .toUpperCase();

    // 请求参数
    const m = {
        key: account.KEY,
        sign: sign,
        t: t,
        param: paramStr,
    };

    try {
        // 发送请求（使用封装好的 DoFileRequest）
        await httpUtil.doFileRequest(m, filePath, URL.WORK_ORDER_UPLOAD_URL);
    } catch (error) {
        console.error('上传附件请求失败:', error.message);
    }
}

workOrderUpload('C:/Users/19625/Downloads/catalina (4).out');