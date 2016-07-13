
# dat-button

A [dat](https://github.com/maxogden/dat) style button.

WIP

## Example

```js
const button = require('dat-button')

const el = button({
  text: 'BUTTON',
  style: {
    color: 'black'
  },
  click: () => console.log('click'),
  klass: 'my-class'
}, onclick)

document.body.appendChild(el)
```

## API

### button({ text, style, click })

