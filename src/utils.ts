export const addPxIfNeeded = (key: string, value: string | number) => {
  if (typeof value === "number" && !UNITLESS_CSS_PROP_MAP[key]) {
    return `${value}px`;
  }
  return String(value);
};

const regex = /[A-Z]/g;

export const camelToKebab = (s: string) => {
  return s.replace(regex, (match) => `-${match.toLowerCase()}`);
};

const UNITLESS_CSS_PROPS = [
  "animationIterationCount",
  "boxFlex",
  "boxFlexGroup",
  "boxOrdinalGroup",
  "columnCount",
  "fillOpacity",
  "flex",
  "flexGrow",
  "flexPositive",
  "flexShrink",
  "flexNegative",
  "flexOrder",
  "fontWeight",
  "lineClamp",
  "lineHeight",
  "opacity",
  "order",
  "orphans",
  "stopOpacity",
  "strokeDashoffset",
  "strokeOpacity",
  "strokeWidth",
  "tabSize",
  "widows",
  "zIndex",
  "zoom",
] as const;

const UNITLESS_CSS_PROP_MAP = UNITLESS_CSS_PROPS.reduce((m, t) => {
  m[t] = true;
  return m;
}, {} as Record<string, boolean>);
