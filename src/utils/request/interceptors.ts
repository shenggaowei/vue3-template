import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { showLoading, hideLoading } from './loading'

export function showLoadingBefore(config: AxiosRequestConfig) {
    showLoading()
    return config
}

export function hideLoadingAfter(res: AxiosResponse) {
    hideLoading()
    return res
}