import { effect } from "@preact/signals-core";

export const bindText = (el: Node, fn: () => string | number) => {
  effect(() => {
    el.textContent = String(fn());
  });
};
