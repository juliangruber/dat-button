'use strict'

const button = require('.')

document.body.appendChild(button({
  text: 'BUTTON',
  style: {
    color: 'black'
  }
}, () => console.log('click')))
