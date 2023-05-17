import type { TRole } from '@/types/user';

export interface ILoginParams {
    username: string;
    password: string;
}

export interface IUserInfo {
    userId: number;
    roleId: TRole;
    entName: string;
    userName: string;
    token: string;
}
export interface ILoginRes {
    loginUser: IUserInfo;
}
