/* @module replot-cartesian */

'use strict'

module.exports = Cartesian

let pick = require('pick-by-alias')
let h = require()

function Cartesian (options) {
	if (!options) options = {}

	let lines = [], axes = [], ticks = [], labels = []

	let container

	draw.update = update;

	update(options)

	// make sure elements are on proper positions
	function draw (plot) {
		let {range, container, element, grid, viewport} = plot

		// apply tree diff at grid container
	}

	function drawLines () {
		let paths = lines.map(line => {


			return line.values.map((v, i) =>
				// <path class=""
				// 	d="M0,0"
				// 	transform=""
				// 	style=""></path>
			)
		})

		return paths
	}

	// recalculate style params / grid state
	function update (options) {
		options = pick(options, {
			line: 'lines line grid dots',
			axis: 'axes axis',
			label: 'labels label',
			tick: 'ticks tick'
		})

		lines = options.map((line, i) => {
			if (!line) return lines[i]

			line = pick(line, {
				value: 'value values stops',
				orientation: 'orientation direction',
				color: 'color colors stroke stroke-color stroke-colors strokeColor',
				opacity: 'opacity alpha visible visibility',
				width: 'width linewidth lineWidth line-width thickness stroke-width strokewidth strokeWidth',
				dash: 'dash dashes pattern dash-pattern dashPattern dasharray dash-array dashArray',
				marker: 'marker symbol svg glyph shape',
				intersect: 'intersect intersects intersection intersected intersections'
			})

			updateDiff(lines[i], line, [{
				orientation: o => {
					if (o === 'x' || o === 'horizontal' || o === 'horiz' || o === 'h') {

					}
				}
			},
			{
				value: (arg, state) => {
					let stops

					// calculate stops
					if (typeof arg === 'function') {
						stops = arg(state)
					}
				}
			},
			{
				intersect: arg => {
					if (arg === true) {
						arg = Array()
					}

					// precalculate intersections
				}
			}])
		})

		axes = options.map((axis, i) => {
			if (!axis) return axes[i]

			axis = pick(axis, {
				position: 'origin position orientation',
				color: 'color colors stroke stroke-color stroke-colors strokeColor',
				width: 'width linewidth lineWidth line-width thickness stroke-width strokewidth strokeWidth',
			})
		})

		labels = options.map((label, i) => {
			if (!label) return labels[i]

		})

		ticks = options.map((tick, i) => {
			if (!tick) return ticks[i]

		})
	}

	return draw
}
