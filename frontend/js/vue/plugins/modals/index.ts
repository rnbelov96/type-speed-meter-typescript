import { App, reactive } from 'vue';
import { lockScroll, unlockScroll } from '../../../utils/scroll-lock';
import { ModalState, ModalOptions, ModalApi } from '../../../types';

const current = reactive<ModalState>({
  name: '',
  options: {},
});

const api: ModalApi = {
  active() {
    return current.name;
  },

  options() {
    return current.options;
  },

  show(name: string, options?: ModalOptions) {
    current.name = name;

    current.options = options || {};

    if (!current.options.unlockScroll) {
      lockScroll();
    }
  },

  close() {
    current.name = '';
    unlockScroll();
  },
};

const plugin = {
  install: (AppProvided: App) => {
    AppProvided.provide('$modals', api);
  },
};

export default plugin;
