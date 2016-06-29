
# dat-button

A [dat](https://github.com/maxogden/dat) style button.

WIP

## Example

```js
const button = require('dat-button')

const onclick = () => console.log('click')

const el = button({
  text: 'BUTTON',
  style: {
    color: 'black'
  }
}, onclick)

document.body.appendChild(el)
```

## API

### button({ text, style }, onclick)

