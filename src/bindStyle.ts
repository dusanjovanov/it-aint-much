import { effect } from "@preact/signals-core";
import { CssProperties } from "./types";
import { addPxIfNeeded } from "./utils";

export const bindStyle = (
  el: HTMLElement | SVGElement,
  fn: () => CssProperties
) => {
  let prevStyle: CssProperties | undefined;

  effect(() => {
    const obj = fn();

    // remove no longer present keys
    if (prevStyle) {
      Object.keys(prevStyle).forEach((key) => {
        if (!(key in obj)) {
          el.style[key as any] = "";
        }
      });
    }
    prevStyle = obj;

    const entries = Object.entries(obj);
    entries.forEach(([key, value]) => {
      el.style[key as any] = addPxIfNeeded(key, value);
    });
  });
};
