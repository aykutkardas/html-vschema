# html-vschema

`html-vschema` creates a simplified and manipulable schema of html.

### Usage

```html
<html>
  <body>
    <h1 class="text-2xl font-bold">HTML VSchema</h1>
  </body>
</html>
```

```js
const schema = getSchema(document.body);
```

```js
{
  "tagName": "body",
  "attributes": {},
  "children": [
    {
      "tagName": "h1",
      "attributes": {
        "class": "text-2xl font-bold"
      },
      "children": [
        {
          "text": "HTML VSchema"
        }
      ]
    }
  ]
}
```

### With Options

#### **ref**

```js
const schema = getSchema(document.body, { ref: true });
```

```js
{
  "ref": Element
  "tagName": "body",
  "attributes": {},
  "children": [
    {
      "ref": Element,
      "tagName": "h1",
      "attributes": {
        "class": "text-2xl font-bold"
      },
      "children": [
        {
          "ref": Text,
          "text": "HTML VSchema"
        }
      ]
    }
  ]
}
```

#### **ignoreTags**

```js
const schema = getSchema(document.body, { ignoreTags: ["h1"] });
```

```js
{
  "tagName": "body",
  "attributes": {},
  "children": []
}
```
