import { ref } from 'vue';

function useModal<T = any>() {
    const visible = ref<boolean>(false);
    const currentItem = ref<T>();

    const open = (item?: T) => {
        visible.value = true;
        if (item) {
            currentItem.value = item;
        }
    };

    const close = () => {
        visible.value = false;
        currentItem.value = undefined;
    };

    return {
        open,
        close,
        visible,
        currentItem
    };
}

export type TUseModal = ReturnType<typeof useModal<any>>;

export default useModal;
