import "./index.css";

import Names from "./names.js";
import { watchPosition, calculateSolarAngle, calculateSolarTime } from "./position.js";
import { estimateSkyColor } from "./color.js";
import { render } from "./render.js";

const $body = document.body,
	$time = document.getElementById("time"),
	$info = document.getElementById("info");

let coords;

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

	const angle = calculateSolarAngle(coords.latitude, coords.longitude),
		time = calculateSolarTime(coords.latitude, coords.longitude);

	$time.innerText = Names[Math.round(angle)];
	$info.innerHTML = `<div>${angle.toFixed(4)}°</div><div>${time}</div>`;

	$body.style.backgroundColor = estimateSkyColor(angle);
});
