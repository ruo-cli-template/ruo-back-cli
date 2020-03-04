import router from '@/router';
/**
 * 接口返回code码检验函数
 * @param {Number} code 
 */
export const inspectionStatusCode = (code) => {
    switch (Number(code)) {
        case 200:
            return true
        case 400:
            router.replace({
                name: 'login'
            })
            return false
        default:
            return false
    }
}