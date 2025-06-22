const fps = 15,
	frameTime = 1000 / fps;

let lastFrame = 0,
	frameGenerator = false;

function animate(currentTime) {
	requestAnimationFrame(animate);

	if (currentTime - lastFrame >= frameTime) {
		lastFrame = currentTime;

		frameGenerator?.();
	}
}

export function render(cb) {
	frameGenerator = cb;

	requestAnimationFrame(animate);
}
