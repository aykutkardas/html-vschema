export type HTMLSchema = {
  ref: { current: Element };
  tagName: string;
  attributes: { [key: string]: string };
  children: Array<HTMLSchema | string>;
};

export const getSchema = (el: Element | string): HTMLSchema | string => {
  if (typeof el === "string") return el;

  const tagName = el.tagName.toLowerCase();
  const ref = { current: el };
  const attributes = {};
  const children: Array<HTMLSchema | string> = [];

  for (let attr of el.attributes) {
    attributes[attr.name] = attr.value;
  }

  for (let child of el.children) {
    children.push(getSchema(child));
  }

  return { ref, tagName, attributes, children };
};
