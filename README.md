## it-aint-much

Collection of tiny helper functions for DOM manipulation combined with Preact signals.

```ts
import { html, signal, addEvent, qs, bindText } from "it-aint-much";

const Counter = () => {
  const count = signal(0);

  const root = html`<div>
    <h1>Counter</h1>
    <div id="display"></div>
    <button>+</button>
  </div>`;

  addEvent(qs(root, "button"), "click", () => {
    count.value++;
  });
  bindText(qs(root, "#display"), () => count.value);

  return root;
};

container.append(Counter());
```
