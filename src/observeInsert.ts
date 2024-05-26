export const observeInsert = (el: Element, cb: () => void) => {
  const observer = new MutationObserver((records) => {
    records.forEach((r) => {
      if (r.type === "childList") {
        r.addedNodes.forEach((n) => {
          if (n.contains(el)) cb();
        });
      }
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
};
