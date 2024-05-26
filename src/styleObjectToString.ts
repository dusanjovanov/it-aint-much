import { CssProperties } from "./types";
import { addPxIfNeeded, camelToKebab } from "./utils";

export const styleObjectToString = (obj: CssProperties) => {
  const keys = Object.keys(obj);
  let s = "";

  for (const key of keys) {
    let v = (obj as any)[key];

    if (v == null) {
      continue;
    }

    s += `${camelToKebab(key)}:${addPxIfNeeded(key, v)};`;
  }
  return s;
};
