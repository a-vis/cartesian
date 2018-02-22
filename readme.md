# a-vis/cartesian

Cartesian grid svg element and virtual-dom component. Part of [a-vis](https://github.com/a-vis/a-vis)

```js
let Cartesian = require('a-cartesian')

let el = Cartesian({

})

document.body.appendChild(createElement(el))
```

## `Cartesian(options, children)`

Create svg vnode with cartesian grid based on `options`.

<!--
### `options`

Option | Default | Description
---|---|---
`line`, `lines` | `true` | Line options or list of lines. A bool, an object, an array or a function.
`axis`, `axes` | `true` | Axis options.
`label`, `labels` | `true` | Display labels for axes or provide custom label sets
`tick`, `ticks` | `true` | Display ticks for labels or provide custom tick sets, optionally based on data.
-->

### `Cartesian.lines(options)`

Display regular lines grid in defined dimension.

TODO: image

Option | Default | Description
---|---|---
`values` | `'linear'` | List of stops or a function, returning such list.
`orientation`, `direction` | `x` | `x`, `y`, `horizontal` or `vertical`
`color` | `'inherits'` | Line(s) color
`opacity` | `1` | Line opacity, independent of color
`width` | `'1'` | Line width
`dash` | `null` | Line dash pattern

### `Cartesian.intersection(options, lines)`

Display lines intersection grid based on the list of lines components.

TODO: image

`marker` | `'cross'` | Intersection marker: `cross`, `dot`, any character or svg shape.
`color` | `'inherits'` | Intersection shape stroke color
`opacity` | `1` | Intersection shape opacity
`width` | `'1'` | Intersection shape stroke width

### `Cartesian.axis`

Option | Default | Description
---|---|---
`position`, `origin` | `'top'` | Axis alignment: `top`, `bottom`, `left`, `right` or any number corresponding to value on the opposite axis
`color` | `'inherits'` | Axis color
`width` | `2` | Axis line width in px

### `options.label`

Option | Default | Description
---|---|---
`values` | `'linear'` | List of stops or a function, returning such list.
`align` | `'auto'` | Label alignment relative to axis: `0..1` or `auto`
`font`, `fontFamily`, `fontSize` | `` |
`format` | `` | Formatter function for labels

### `options.tick`

Option | Default | Description
---|---|---
`values` | `'linear'` | List of stops or a function, returning such list.
`color` | `` |
`width` | `` |
`size` | `` |
`align` | `` |


## virtual-dom

## `Cartesian.cartesian(options, children)`
## `Cartesian.lines(options, children)`
## `Cartesian.line(options, children)`


## License

(c) 2017 Dmitry Yv. MIT License
