'use strict'

const button = require('.')

document.body.appendChild(button({
  text: 'Button',
  style: {
    color: 'black'
  },
  click: () => console.log('click')
}))
