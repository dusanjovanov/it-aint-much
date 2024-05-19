import { Options, createPopper } from "@popperjs/core";

export class Popover {
  constructor(args: PopoverArgs) {
    this.popover = args.popover;
    this.isOpen = args.isOpen;
    this.onOpenChange = args.onOpenChange;
    this.popper = createPopper(args.trigger, args.popover, args.options);
  }
  popover;
  popper;
  isOpen;
  onOpenChange;

  _onChange(open: boolean) {
    this.onOpenChange(open);
  }

  show() {
    this.popover.dataset.show = "";
    this.popper.update();
    this._onChange(true);
  }

  hide() {
    delete this.popover.dataset.show;
    this.popper.update();
    this._onChange(false);
  }

  toggle() {
    this.isOpen() ? this.hide() : this.show();
  }
}

type PopoverArgs = {
  trigger: Element;
  popover: HTMLElement;
  isOpen: () => boolean;
  onOpenChange: (open: boolean) => void;
  options?: Options;
};
