exports.get = get
exports.set = set

function get(image, position) {
	if (contains(image, position)) {
		var color = new Uint8ClampedArray(4)
		var index = locate(image, position)
		for (var i = 4; i--;) {
			color[i] = image.data[index + i]
		}
		return color
	}
}

function set(image, position, color) {
	if (contains(image, position)) {
		var index = locate(image, position)
		for (var i = 4; i--;) {
			image.data[index + i] = color[i]
		}
	}
}

function contains(image, position) {
	return position.x >= 0 && position.y >= 0 && position.x < image.width && position.y < image.height
}

function locate(image, position) {
	return (position.y * image.width + position.x) * 4
}
