function getStarCount() {
	const area = window.outerWidth * window.outerHeight;

	return Math.round(area * (150 / (1920 * 1080)));
}

function createStar() {
	const star = document.createElement("div");

	star.classList.add("star");

	const size = Math.random() * 2 + 1;

	star.style.width = `${size}px`;
	star.style.height = `${size}px`;

	star.style.top = `${Math.random() * window.outerHeight}px`;
	star.style.left = `${Math.random() * window.outerWidth}px`;

	star.style.animationDuration = `${Math.random() * 4 + 3}s`;
	star.style.animationDelay = `${Math.random() * 3}s`;

	return star;
}

export function createStars($stars) {
	const count = Math.min(250, Math.max(10, getStarCount()));

	for (let i = 0; i < count; i++) {
		$stars.appendChild(createStar());
	}
}

export function updateStarsOpacity($stars, angle) {
	const full = -18,
		zero = -6;

	if (angle <= full) {
		$stars.style.opacity = 1;

		return;
	}

	if (angle >= zero) {
		$stars.style.opacity = 0;

		return;
	}

	const range = zero - full,
		progress = (angle - full) / range;

	$stars.style.opacity = 1.0 - progress;
}
