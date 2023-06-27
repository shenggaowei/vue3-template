import { POST } from '@/utils/request';
import type { ILoginRes, ILoginParams } from './interface';

export async function login(params: ILoginParams) {
    return POST<ILoginParams, ILoginRes>(`/v1/user/login`, params);
}