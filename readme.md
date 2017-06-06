# img-data
> Easily read from and write to [`ImageData`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) instances

## install
```sh
npm install img-data
```

## usage
This example takes a `<canvas>` element from the DOM and fills it with the color of the top-left pixel.
```js
const { get, set } = require('img-data')

var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var data = context.getImageData(0, 0, canvas.width, canvas.height)
var color = get(data, { x: 0, y: 0 })
for (var y = 0; y < canvas.height; y++) {
  for (var x = 0; x < canvas.width; x++) {
    set(data, { x, y }, color)
  }
}

context.putImageData(data, 0, 0)
```

### `color = get(image, position)`
Retrieves the `color` (`[red, green, blue, alpha]`) of the pixel found at the given `position` on `image`.
- `image`: The `ImageData` instance to read from
- `position`: The position (`{ x, y }`) denoting the location of the desired pixel

`get` will return `undefined` if `position` is out of bounds.

### `set(image, position, color)`
Replaces the color of the pixel found at the given `position` on `image` with `color`.
- `image`: The `ImageData` instance to write to
- `position`: The position (`{ x, y }`) denoting the location of the desired pixel
- `color`: The color (`[red, green, blue, alpha]`) to use in the replacement process

`set` will fail silently if `position` is out of bounds.

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
