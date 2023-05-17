import axios from 'axios'
import {
    showLoadingBefore,
    hideLoadingAfter
} from './interceptors'
import { hideLoading } from './loading'

const instance = axios.create({
    timeout: 60 * 60 * 1000,
    withCredentials: true,
    baseURL: ''
})

// before: 开始 loading
instance.interceptors.request.use(showLoadingBefore as any, error => {
    return Promise.reject(error)
})

// after: 隐藏 loading
instance.interceptors.response.use(hideLoadingAfter as any, error => {
    hideLoading()
    return Promise.reject(error)
})

export default instance