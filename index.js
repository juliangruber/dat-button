'use strict'

const yo = require('yo-yo')
const css = require('yo-css')

module.exports = (props, onclick) => {
  const style = {
    border: 0,
    backgroundColor: 'green',
    color: 'white',
    textTransform: 'uppercase'
  }

  return yo`
    <button onclick=${onclick} style=${css(style, props.style)}>
      ${props.text}
    </button>
  `
}

