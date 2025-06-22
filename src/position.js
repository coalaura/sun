import { getPosition, getTimes } from "suncalc";

export function calculateSolarAngle(lat, lon) {
	return getPosition(new Date(), lat, lon).altitude * (180 / Math.PI);
}

export function calculateSolarTime(lat, lon) {
	const now = new Date(),
		times = getTimes(now, lat, lon),
		solarNoon = times.solarNoon;

	if (!solarNoon) {
		return "-:-";
	}

	const diffMillis = now.getTime() - solarNoon.getTime(),
		solarBaseTime = new Date(Date.UTC(2000, 0, 1, 12, 0, 0)),
		currentSolarTime = new Date(solarBaseTime.getTime() + diffMillis);

	const formatter = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});

	return formatter.format(currentSolarTime);
}

export async function watchPosition(cb) {
	const coords = loadCoords() || (await getCurrentPosition());

	if (!coords) {
		cb(false);

		return;
	}

	storeCoords(coords);

	cb(coords);

	navigator.geolocation.watchPosition(({ coords }) => {
		storeCoords(coords);

		cb(coords);
	});
}

function getCurrentPosition() {
	return new Promise(resolve => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				storeCoords(coords);

				resolve(coords);
			},
			() => resolve(false)
		);
	});
}

function storeCoords(coords) {
	const lat = coords.latitude,
		lon = coords.longitude;

	if (Number.isNaN(lat) || Number.isNaN(lon)) {
		return;
	}

	localStorage.setItem("pos", `${lat.toFixed(6)}:${lon.toFixed(6)}`);
}

function loadCoords() {
	const pos = localStorage.getItem("pos"),
		index = pos?.indexOf(":") || -1;

	if (index === -1) {
		return false;
	}

	const lat = parseFloat(pos.substring(0, index)),
		lon = parseFloat(pos.substring(index + 1));

	if (Number.isNaN(lat) || Number.isNaN(lon)) {
		return false;
	}

	return {
		latitude: lat,
		longitude: lon,
	};
}
