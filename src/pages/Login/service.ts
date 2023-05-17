import { login } from '@/services/user';
import { useRequest } from 'vue-request';

export function useLogin() {
    return useRequest(login, {
        'manual': true
    });
}
