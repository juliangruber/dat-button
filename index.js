'use strict'

const yo = require('yo-yo')
const css = require('yo-css')

module.exports = (props, click) => {
  const style = {
    border: 0,
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    color: 'inherit'
  }
  if (typeof click == 'function') props.click = click

  return yo`
    <button onclick=${props.click} style=${css(style, props.style)}>
      ${props.text}
    </button>
  `
}

