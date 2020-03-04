import http from "@/services/http";
import Services from '@/services/serviceConfig'
import { inspectionStatusCode } from '@/common/utils';

function getDataInfo(url = '', data = {}) {
    return new Promise((resolve, reject) => {
        http.$ctmc
            .post(url, data)
            .then(ret => {
                if (inspectionStatusCode(ret.data.code)) {
                    resolve(ret.data)
                } else {
                    reject(`获取失败，遇到未知错误`)
                }
            })
            .catch(err => {
                reject(`获取失败! ${err}`)
            })
    })
}
/**
 * 
 * @param {Object} 发送参数
 * @returns {Promise} 返回一个Promise实例
 */
export function getAllocateInfo(data) {
    return getDataInfo(Services, data)
}


