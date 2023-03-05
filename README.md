# html-schema

### Usage

```js
const schema = getSchema(document.body);
```

### Output

```js
{
  "ref": { "current": Element }
  "tagName": "body",
  "attributes": {},
  "children": [
    {
      "ref": { "current": Element },
      "tagName": "h2",
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
