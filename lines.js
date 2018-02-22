'use strict'

let h = require('virtual-hyperscript-svg')

module.exports = Lines

function Lines (options) {
	let {viewport, values, width, color, opacity, dash} = options

	let linesItems = values.map(v => {
		return h('use', {x: v, 'xlink:href': '#line'})
	})

	return (
		<g class="cartesian-lines">
			<style>{`
				#line {
					opacity: ${opacity};
					stroke: ${color};
					stroke-width: ${width};
					stroke-dasharray: ${dash};
				}
			`}</style>
			<defs>
				<path id="line" class="line" d="M0,0 v100Z"/>
			</defs>
			<g id="lines">
				{ linesItems }
			</g>
		</g>
	)
}
