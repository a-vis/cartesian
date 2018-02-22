/* @module replot-cartesian */

'use strict'

let h = require('virtual-hyperscript-svg')

module.exports = Cartesian

function Cartesian (options, children) {

	return (
		<g>
			<g id="axes">
			</g>
			<g id="labels">
			</g>
			<g id="ticks">
			</g>
			{ children }
		</g>
	)
}
