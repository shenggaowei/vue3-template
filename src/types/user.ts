export enum ERole {
    Owner = 1, // 业主
    Audit = 2, // 测算单位
    platform = 3 // 平台方
}

// 1. 林场 2 测算单位 3 平台方
export type TRole = ERole.Owner | ERole.Audit | ERole.platform;

