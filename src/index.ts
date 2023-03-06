export type HTMLSchema = {
  ref?: Element;
  tagName: string;
  attributes: { [key: string]: string };
  children: Array<HTMLSchema | string | null>;
};

export type SchemaOptions = {
  ref?: boolean;
};

const getElement = (el: Element, options: SchemaOptions = {}): HTMLSchema => {
  const tagName = el.tagName.toLowerCase();
  const attributes = {};
  const children: Array<HTMLSchema | string | null> = [];

  for (let attr of el.attributes) {
    attributes[attr.name] = attr.value;
  }

  for (let child of el.childNodes) {
    const schema = getSchema(child);
    if (schema) children.push(schema);
  }

  const schema: HTMLSchema = { tagName, attributes, children };

  if (options.ref) schema.ref = el;

  return schema;
};

export const getSchema = (
  el: ChildNode | Element | undefined,
  options: SchemaOptions = {}
): HTMLSchema | string | null => {
  const ELEMENT_NODE_TYPE = 1;
  const TEXT_NODE_TYPE = 3;

  if (!el) return null;

  if (el.nodeType === TEXT_NODE_TYPE) {
    const text = (el as Text).wholeText.replace(/\\n/g, "").trim();
    return text || null;
  }

  if (el.nodeType === ELEMENT_NODE_TYPE) {
    return getElement(el as Element, options);
  }

  return null;
};
