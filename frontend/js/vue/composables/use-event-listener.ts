import { onMounted, onUnmounted } from 'vue';

const useEventListener = (
  target: string | HTMLElement | Document,
  event: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: any,
) => {
  let el: HTMLElement | Document;
  if (typeof target === 'string') {
    el = document.querySelector(target) as HTMLElement;
  } else {
    el = target;
  }
  onMounted(() => el.addEventListener(event, callback));
  onUnmounted(() => el.removeEventListener(event, callback));
};

export default useEventListener;
