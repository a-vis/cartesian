'use strict'

require('enable-mobile')
let createElement = require('virtual-dom/create-element')
let h = require('virtual-hyperscript-svg')
let Cartesian = require('./cartesian')
let Lines = require('./lines')
let Axis = require('./axis')

let svg = h('svg', {
	width: 400,
	height: 300
}, [
	Cartesian({
		viewport: [0, 0, 400, 300],

	}, [
		Lines({
			viewport: [0, 0, 400, 300],
			orientation: 'x',
			values: [0, 10, 20, 30, 40, 50, 60, 70, 80],
			color: 'black',
			opacity: 1,
			width: 2,
			dash: '2, 3'
		})
	])
])


document.body.appendChild(createElement(svg))
