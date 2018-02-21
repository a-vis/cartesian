'use strict'

require('enable-mobile')
let createElement = require('virtual-dom/create-element')
let h = require('virtual-hyperscript-svg')
let Cartesian = require('./cartesian')
let Line = require('./line')
let Axis = require('./axis')

let svg = h('svg', {
	width: 400,
	height: 300
}, [
	Cartesian({

	})
])


document.body.appendChild(createElement(svg))
