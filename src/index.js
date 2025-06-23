import "./index.css";

import Names from "./names.js";
import { watchPosition, calculateSolarAngle, calculateSolarTime } from "./position.js";
import { createStars, updateStarsOpacity } from "./stars.js";
import { estimateSkyColor } from "./color.js";
import { render } from "./render.js";

const $body = document.body,
	$stars = document.getElementById("stars"),
	$time = document.getElementById("time"),
	$info = document.getElementById("info");

let coords;

createStars($stars);

watchPosition(pos => {
	if (!pos) {
		$time.innerText = "No location data";
		$info.innerText = "";

		return;
	}

	coords = pos;
});

render(() => {
	if (!coords) return;

	const now = new Date(),
		minus30 = new Date(now.getTime() - (30 * 60 * 1000)),
		plus30 = new Date(now.getTime() + (30 * 60 * 1000));

	const angle = calculateSolarAngle(now, coords.latitude, coords.longitude),
		m30 = calculateSolarAngle(minus30, coords.latitude, coords.longitude),
		p30 = calculateSolarAngle(plus30, coords.latitude, coords.longitude),
		time = calculateSolarTime(coords.latitude, coords.longitude);

	updateStarsOpacity($stars, angle);

	$time.innerText = Names[Math.round(angle)];
	$info.innerHTML = `<div>${angle.toFixed(4)}°</div><div>${time}</div>`;

	const before = estimateSkyColor(m30),
		after = estimateSkyColor(p30);

	$body.style.background = `linear-gradient(to bottom, ${before} 0%, ${after} 100%)`;
});
