const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const crypto = require('crypto');

const account = require('../config/account');

/**
 * 计算 MD5 签名
 * @param {string} str 原始字符串
 * @returns {string} 大写 MD5 值
 */
function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex').toUpperCase();
}

/**
 * 执行 POST 请求（默认 Content-Type: application/x-www-form-urlencoded）
 * @param {string} postUrl 请求地址
 * @param {Object} formData 表单数据对象
 * @returns {Promise<string>} 响应内容
 */
async function execute(postUrl, formData) {
    try {
        console.log("请求信息: ", postUrl);
        console.log("请求参数: ", formData);

        const response = await axios.post(postUrl, new URLSearchParams(formData).toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        console.log("响应内容:", response.data);
        return response.data;
    } catch (error) {
        console.error("请求失败:", error.message);
        if (error.response) {
            console.error("错误响应:", error.response.data);
        }
        throw error;
    }
}

/**
 * 标准请求方法（带 t 参数 + key + secret 的签名）
 * @param {string} t 时间戳
 * @param {string|Object} param 请求参数（JSON 字符串或对象）
 * @param {string} postUrl 接口地址
 * @returns {Promise<string>}
 */
async function doRequest(t, param, postUrl) {
    const paramString = typeof param === 'object' ? JSON.stringify(param) : param;

    const signStr = paramString + t + account.KEY + account.SECRET;
    const sign = md5(signStr);

    const formData = {
        key: account.KEY,
        t,
        sign,
        param: paramString,
    };

    return execute(postUrl, formData);
}

/**
 * 带 method 参数的请求（如 GET / POST / PUT）
 * @param {string} method 方法名
 * @param {string} t 时间戳
 * @param {string|Object} param 请求参数
 * @param {string} postUrl 接口地址
 * @returns {Promise<string>}
 */
async function doMethodRequest(method, t, param, postUrl) {
    const paramString = typeof param === 'object' ? JSON.stringify(param) : param;

    const signStr = paramString + t + account.KEY + account.SECRET;
    const sign = md5(signStr);

    const formData = {
        key: account.KEY,
        method,
        t,
        sign,
        param: paramString,
    };

    return execute(postUrl, formData);
}

/**
 * 使用 customer 鉴权的请求
 * @param {string|Object} param 请求参数
 * @param {string} postUrl 接口地址
 * @returns {Promise<string>}
 */
async function customerRequest(param, postUrl) {
    const paramString = typeof param === 'object' ? JSON.stringify(param) : param;

    const signStr = paramString + account.KEY + account.CUSTOMER;
    const sign = md5(signStr);

    const formData = {
        customer: account.CUSTOMER,
        sign,
        param: paramString,
    };

    return execute(postUrl, formData);
}

/**
 * 通过 Map 传入表单数据（直接发送）
 * @param {Object} data 表单字段键值对
 * @param {string} postUrl 接口地址
 * @returns {Promise<string>}
 */
async function doMapRequest(data, postUrl) {
    return execute(postUrl, data);
}

/**
 * 文件上传请求
 * @param {Object} fields 表单字段键值对
 * @param {string} filePath 文件路径
 * @param {string} postUrl 接口地址
 * @returns {Promise<string>}
 */
async function doFileRequest(fields, filePath, postUrl) {
    const form = new FormData();

    // 添加普通字段
    for (let key in fields) {
        form.append(key, fields[key]);
    }

    // 添加文件
    const fileStream = fs.createReadStream(filePath);
    const fileName = filePath.split('/').pop();
    form.append('file', fileStream, fileName);

    try {
        console.log("请求信息: ", postUrl);
        console.log("请求参数: ", fields, "文件:", fileName);

        const response = await axios.post(postUrl, form, {
            headers: form.getHeaders()
        });

        console.log("响应内容:", response.data);
        return response.data;
    } catch (error) {
        console.error("请求失败:", error.message);
        if (error.response) {
            console.error("错误响应:", error.response.data);
        }
        throw error;
    }
}

module.exports = {
    doRequest,
    doMethodRequest,
    customerRequest,
    doMapRequest,
    doFileRequest
};