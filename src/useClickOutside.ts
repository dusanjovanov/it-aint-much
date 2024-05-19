export const useClickOutside = (nodes: Node[], fn: () => void) => {
  const handler = (e: MouseEvent) => {
    const targetNode = e.target as Node;
    const contain = nodes.some((node) => node.contains(targetNode));
    if (!contain) fn();
  };
  window.addEventListener("click", handler);
  return () => {
    window.removeEventListener("click", handler);
  };
};
