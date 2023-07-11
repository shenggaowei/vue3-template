import isMobileLib from 'ismobilejs'

// 根据 ua 判断是否是移动端
export const isMobile = () => {
    const userAgent = window.navigator.userAgent;
    const ret = isMobileLib(userAgent).any
    return ret
}