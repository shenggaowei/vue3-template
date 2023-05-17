import { ref } from 'vue';

export default function useCache() {
    const cache = ref({});

    const setCache = (key: string, data: any) => {
        localStorage.setItem(key, JSON.stringify(data));
        cache.value = data;
    };

    const getCache = (key: string) => {
        const data = localStorage.getItem(key);
        cache.value = data ? JSON.parse(data) : {};
        return cache;
    };

    const removeCache = (key: string) => {
        localStorage.removeItem(key);
        cache.value = ``;
    };

    const updateCache = (key: string, props: Record<string, any>) => {
        const currentCache = getCache(key);
        currentCache.value = { ...currentCache.value, ...props };
        setCache(key, currentCache);
    };

    return {
        cache,
        setCache,
        getCache,
        removeCache,
        updateCache
    };
}
