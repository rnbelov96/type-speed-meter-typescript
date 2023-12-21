export type ModalOptions = {
  unlockScroll?: boolean;
};

export type ModalState = {
  name: string;
  options?: ModalOptions;
};

export type ModalApi = {
  active: () => string;
  options: () => ModalOptions | undefined;
  show: (name: string, options?: ModalOptions) => void;
  close: () => void;
};
