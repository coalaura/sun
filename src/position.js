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
		const data = await fetch("http://ip-api.com/json/?fields=lat,lon").then(response => response.json());

		if (!data || typeof data.lat !== "number" || typeof data.lon !== "number") {
			throw new Error("invalid response");
		}

		const coords = {
			latitude: data.lat,
			longitude: data.lon,
		};

		storeCoords(sessionStorage, "ip_pos", coords)

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
