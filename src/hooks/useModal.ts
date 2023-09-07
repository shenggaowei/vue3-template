import { ref, reactive } from "vue";

const useModal = <T = undefined>() => {
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

  return reactive({
    open,
    close,
    visible,
    currentItem,
  });
};

export type TUseModal = ReturnType<typeof useModal<undefined>>;

export default useModal;
