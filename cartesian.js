/* @module replot-cartesian */

'use strict'

let h = require('virtual-hyperscript-svg')

module.exports = Cartesian

function Cartesian (options, children) {
	return (
		<g>
			<style>{
				`
				#line {
					stroke: gray;
					stroke-width: 10;
				}
				`
			}</style>
			<defs>
				<path id="line" class="line" d="M10,10 v100Z"/>
			</defs>
			<g>
				{ h('use', {x: 100, y: 100, 'xlink:href': '#line' }) }
				{ h('use', {x: 120, y: 100, 'xlink:href': '#line' }) }
				{ h('use', {x: 140, y: 100, 'xlink:href': '#line' }) }
			</g>
		</g>
	)
}
