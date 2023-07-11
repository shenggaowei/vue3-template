import { POST } from "@/utils/request";
import { IUploadParams, IUploadRes } from './interface'

// 上传图片或文件
export async function upload(params: IUploadParams) {
    const fd = new FormData()
    fd.append('file', params.file)
    return POST<FormData, IUploadRes>('/v1/upload', fd, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}