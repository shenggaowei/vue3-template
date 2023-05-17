import { ElMessage } from 'element-plus'

let loadingCount = 0
let messageInstance: any

export function showLoading() {
    if (loadingCount === 0) {
        messageInstance = ElMessage({
            content: '加载中',
            duration: 0
        })
    }
    loadingCount++
}

export function hideLoading() {
    if (loadingCount <= 0) {
        return
    }
    loadingCount--
    if (loadingCount === 0) {
        messageInstance?.close()
    }
}