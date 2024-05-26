import { signal } from "@preact/signals-core";
import { observeInsert } from "./observeInsert";

export const getRect = (el: Element) => {
  const rect = signal(el.getBoundingClientRect());

  observeInsert(el, () => {
    rect.value = el.getBoundingClientRect();
  });

  return rect;
};
