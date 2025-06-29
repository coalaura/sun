import { getPosition, getTimes } from "suncalc";

export function calculateSolarAngle(now, lat, lon) {
	return getPosition(now, lat, lon).altitude * (180 / Math.PI);
}

export function calculateSolarTime(lat, lon) {
	const now = new Date(),
		times = getTimes(now, lat, lon),
		solarNoon = times.solarNoon;

	if (!solarNoon) {
		return "-:-";
	}

	const currentSolarTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);

	currentSolarTime.setTime(currentSolarTime.getTime() + now.getTime() - solarNoon.getTime());

	const formatter = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});

	return formatter.format(currentSolarTime);
}

export async function watchPosition(cb) {
	const coords = loadCoords(localStorage, "pos");

	if (coords) {
		cb(coords);
	}

	navigator.geolocation.watchPosition(
		({ coords }) => {
			storeCoords(localStorage, "pos", coords);

			cb(coords);
		},
		async err => {
			console.error(err);
			console.log("falling back to ip location");

			cb(await getIPCoords());
		}
	);
}

async function getIPCoords() {
	const session = loadCoords(sessionStorage, "ip_pos");

	if (session) {
		return session;
	}

	try {
		const data = await fetch("https://ipinfo.io/json").then(response => response.json()),
			loc = data?.loc,
			index = loc?.indexOf(",") || -1;

		if (!loc || index === -1) {
			throw new Error("invalid response");
		}

		const lat = parseFloat(loc.substring(0, index)),
			lon = parseFloat(loc.substring(index + 1));

		if (Number.isNaN(lat) || Number.isNaN(lon)) {
			throw new Error("invalid location");
		}

		const coords = {
			latitude: lat,
			longitude: lon,
		};

		storeCoords(sessionStorage, "ip_pos", coords);

		return coords;
	} catch {}

	return false;
}

function storeCoords(storage, key, coords) {
	const lat = coords.latitude,
		lon = coords.longitude;

	if (Number.isNaN(lat) || Number.isNaN(lon)) {
		return;
	}

	storage.setItem(key, `${lat.toFixed(6)}:${lon.toFixed(6)}`);
}

function loadCoords(storage, key) {
	const pos = storage.getItem(key),
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
