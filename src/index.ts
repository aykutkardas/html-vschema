export type TextSchema = {
  text: string;
  ref?: ChildNode;
};

export type HTMLSchema = {
  ref?: Element;
  tagName: string;
  attributes: { [key: string]: string };
  children: Array<HTMLSchema | TextSchema | null>;
};

export type SchemaOptions = {
  ref?: boolean;
  ignoredTags?: Array<string>;
};

const getElement = (
  el: Element,
  options: SchemaOptions = {}
): HTMLSchema | null => {
  const tagName = el.tagName.toLowerCase();

  if (options.ignoredTags?.includes(tagName)) return null;

  const attributes = {};
  const children: Array<HTMLSchema | TextSchema | null> = [];

  for (let attr of el.attributes) {
    attributes[attr.name] = attr.value;
  }

  for (let child of el.childNodes) {
    const schema = getSchema(child, options);
    if (schema) children.push(schema);
  }

  const schema: HTMLSchema = { tagName, attributes, children };

  if (options.ref) schema.ref = el;

  return schema;
};

export const getSchema = (
  el: ChildNode | Element | undefined,
  options: SchemaOptions = {}
): HTMLSchema | TextSchema | null => {
  const ELEMENT_NODE_TYPE = 1;
  const TEXT_NODE_TYPE = 3;

  if (!el) return null;

  if (el.nodeType === TEXT_NODE_TYPE) {
    const text = (el as Text).wholeText.replace(/\\n/g, "").trim();
    return { text, ref: el } || null;
  }

  if (el.nodeType === ELEMENT_NODE_TYPE) {
    const element = getElement(el as Element, options);
    return element || null;
  }

  return null;
};
