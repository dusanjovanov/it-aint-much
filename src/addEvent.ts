export const addEvent = <Type extends keyof HTMLElementEventMap>(
  target: EventTarget,
  type: Type,
  handler: (
    ev: HTMLElementEventMap[Type] & { currentTarget: EventTarget }
  ) => void
) => {
  target.addEventListener(type, handler as any);
  return () => {
    target.removeEventListener(type, handler as any);
  };
};
