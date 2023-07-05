import isMobileLib from 'ismobilejs'

// 根据 ua 判断是否是移动端
export const isMobile = () => {
    const userAgent = window.navigator.userAgent;
    const ret = isMobileLib(userAgent).phone
    console.log('当前设备为移动端', ret)
    return ret
}