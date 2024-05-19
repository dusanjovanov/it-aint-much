import { effect } from "@preact/signals-core";

export const bindProp = (el: Element, key: string, fn: () => any) => {
  effect(() => {
    el[key] = fn();
  });
};
