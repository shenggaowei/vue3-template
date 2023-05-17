import request from '@/utils/request/axios'

interface IResponse<T> {
    code: number;
    data: T;
    message: string;
}

export async function Get<P extends any, R extends any>(url: string, params?: P): Promise<R> {
    const ret = await request.get<IResponse<R>>(url, {
        params
    })
    return ret.data.data;
}

export async function POST<P extends any, R extends any>(url: string, data?: P): Promise<R> {
    const ret = await request.post<IResponse<R>>(url, {
        data
    })
    return ret.data.data;
}