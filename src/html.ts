export const html = <E = HTMLElement | SVGElement>(
  strings: TemplateStringsArray,
  ...values: any[]
) => {
  const template = strings
    .map((item: string, index: number) => {
      const value = values[index];
      return item + (value != null ? value : "");
    })
    .join("");

  const p = document.createElement("div");
  p.innerHTML = template;

  return p.firstChild as E;
};
