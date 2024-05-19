import { Signal, effect } from "@preact/signals-core";

export const bindList = <Item>(
  el: Element,
  arr: Signal<Item[]>,
  renderItem: (item: Item, index: number) => Node
) => {
  effect(() => {
    el.innerHTML = "";
    arr.value.forEach((todo, index) => {
      el.append(renderItem(todo, index));
    });
  });
};
