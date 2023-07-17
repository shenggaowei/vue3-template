import { message } from "ant-design-vue";

let loadingCount = 0;

const key = "request-loading";

export function showLoading() {
  if (loadingCount === 0) {
    message.loading({
      content: "加载中",
      duration: 0,
      key,
    });
  }
  loadingCount++;
}

export function hideLoading() {
  if (loadingCount <= 0) {
    return;
  }
  loadingCount--;
  if (loadingCount === 0) {
    message.destroy(key);
  }
}
