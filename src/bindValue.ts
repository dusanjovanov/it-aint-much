import { addEvent } from "./addEvent";
import { bindProp } from "./bindProp";

/** Two way binding */
export const bindValue = (
  el: Element,
  get: () => any,
  set: (value: string) => void
) => {
  addEvent(el, "input", (e) => {
    set((e.currentTarget as HTMLInputElement).value);
  });
  bindProp(el, "value", get);
};
