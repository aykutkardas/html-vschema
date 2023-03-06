# html-schema

### Usage

```js
const schema = getSchema(document.body);
```

### Output

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
        "HTML Schema"
      ]
    }
  ]
}
```

```js
const schema = getSchema(document.body, { ref: true });
```

### Output

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
        "HTML Schema"
      ]
    }
  ]
}
```
