const skyColorStops = [
	"rgb(5, 6, 8)", // -90°
	"rgb(5, 6, 8)", // -89°
	"rgb(5, 6, 8)", // -88°
	"rgb(5, 6, 8)", // -87°
	"rgb(5, 6, 8)", // -86°
	"rgb(5, 6, 8)", // -85°
	"rgb(5, 6, 8)", // -84°
	"rgb(5, 6, 8)", // -83°
	"rgb(5, 6, 8)", // -82°
	"rgb(5, 6, 8)", // -81°
	"rgb(5, 6, 8)", // -80°
	"rgb(5, 6, 8)", // -79°
	"rgb(5, 6, 8)", // -78°
	"rgb(5, 6, 8)", // -77°
	"rgb(5, 6, 8)", // -76°
	"rgb(5, 6, 8)", // -75°
	"rgb(5, 6, 8)", // -74°
	"rgb(5, 6, 8)", // -73°
	"rgb(5, 6, 8)", // -72°
	"rgb(5, 6, 8)", // -71°
	"rgb(5, 6, 8)", // -70°
	"rgb(5, 6, 8)", // -69°
	"rgb(5, 6, 8)", // -68°
	"rgb(5, 6, 8)", // -67°
	"rgb(5, 6, 8)", // -66°
	"rgb(5, 6, 8)", // -65°
	"rgb(5, 6, 8)", // -64°
	"rgb(5, 6, 8)", // -63°
	"rgb(5, 6, 8)", // -62°
	"rgb(5, 6, 8)", // -61°
	"rgb(5, 6, 8)", // -60°
	"rgb(5, 6, 8)", // -59°
	"rgb(5, 6, 8)", // -58°
	"rgb(5, 6, 8)", // -57°
	"rgb(5, 6, 8)", // -56°
	"rgb(5, 6, 8)", // -55°
	"rgb(5, 6, 8)", // -54°
	"rgb(5, 6, 8)", // -53°
	"rgb(5, 6, 8)", // -52°
	"rgb(5, 6, 8)", // -51°
	"rgb(5, 6, 8)", // -50°
	"rgb(5, 6, 8)", // -49°
	"rgb(5, 6, 8)", // -48°
	"rgb(5, 6, 8)", // -47°
	"rgb(5, 6, 8)", // -46°
	"rgb(5, 6, 8)", // -45°
	"rgb(5, 6, 8)", // -44°
	"rgb(5, 6, 8)", // -43°
	"rgb(5, 6, 8)", // -42°
	"rgb(5, 6, 8)", // -41°
	"rgb(5, 6, 8)", // -40°
	"rgb(5, 6, 8)", // -39°
	"rgb(5, 6, 8)", // -38°
	"rgb(5, 6, 8)", // -37°
	"rgb(5, 6, 8)", // -36°
	"rgb(5, 6, 8)", // -35°
	"rgb(5, 6, 8)", // -34°
	"rgb(5, 6, 8)", // -33°
	"rgb(5, 6, 8)", // -32°
	"rgb(5, 6, 8)", // -31°
	"rgb(5, 6, 8)", // -30°
	"rgb(5, 6, 8)", // -29°
	"rgb(5, 6, 8)", // -28°
	"rgb(5, 6, 8)", // -27°
	"rgb(5, 6, 8)", // -26°
	"rgb(5, 6, 8)", // -25°
	"rgb(5, 6, 8)", // -24°
	"rgb(5, 6, 8)", // -23°
	"rgb(5, 6, 8)", // -22°
	"rgb(5, 6, 8)", // -21°
	"rgb(5, 6, 8)", // -20°
	"rgb(5, 6, 8)", // -19°
	"rgb(5, 6, 8)", // -18°
	"rgb(7, 9, 16)", // -17°
	"rgb(9, 12, 21)", // -16°
	"rgb(10, 14, 25)", // -15°
	"rgb(12, 15, 28)", // -14°
	"rgb(13, 17, 31)", // -13°
	"rgb(14, 18, 34)", // -12°
	"rgb(15, 19, 36)", // -11°
	"rgb(15, 21, 38)", // -10°
	"rgb(16, 22, 40)", // -9°
	"rgb(17, 23, 42)", // -8°
	"rgb(30, 37, 61)", // -7°
	"rgb(39, 47, 74)", // -6°
	"rgb(46, 55, 85)", // -5°
	"rgb(51, 61, 94)", // -4°
	"rgb(56, 67, 101)", // -3°
	"rgb(61, 72, 108)", // -2°
	"rgb(65, 77, 115)", // -1°
	"rgb(138, 120, 136)", // 0°
	"rgb(177, 150, 155)", // 1°
	"rgb(199, 170, 169)", // 2°
	"rgb(213, 184, 180)", // 3°
	"rgb(221, 194, 188)", // 4°
	"rgb(226, 200, 195)", // 5°
	"rgb(230, 205, 201)", // 6°
	"rgb(231, 208, 205)", // 7°
	"rgb(231, 209, 208)", // 8°
	"rgb(229, 209, 211)", // 9°
	"rgb(226, 207, 213)", // 10°
	"rgb(221, 205, 214)", // 11°
	"rgb(213, 201, 215)", // 12°
	"rgb(201, 195, 216)", // 13°
	"rgb(182, 188, 217)", // 14°
	"rgb(152, 180, 217)", // 15°
	"rgb(153, 181, 218)", // 16°
	"rgb(154, 181, 219)", // 17°
	"rgb(155, 182, 219)", // 18°
	"rgb(157, 183, 220)", // 19°
	"rgb(158, 184, 221)", // 20°
	"rgb(159, 184, 221)", // 21°
	"rgb(160, 185, 222)", // 22°
	"rgb(161, 186, 222)", // 23°
	"rgb(162, 187, 223)", // 24°
	"rgb(163, 187, 223)", // 25°
	"rgb(164, 188, 224)", // 26°
	"rgb(165, 189, 225)", // 27°
	"rgb(166, 189, 225)", // 28°
	"rgb(167, 190, 226)", // 29°
	"rgb(168, 191, 226)", // 30°
	"rgb(169, 191, 227)", // 31°
	"rgb(170, 192, 227)", // 32°
	"rgb(171, 193, 228)", // 33°
	"rgb(172, 193, 228)", // 34°
	"rgb(173, 194, 228)", // 35°
	"rgb(174, 194, 229)", // 36°
	"rgb(175, 195, 229)", // 37°
	"rgb(175, 196, 230)", // 38°
	"rgb(176, 196, 230)", // 39°
	"rgb(177, 197, 231)", // 40°
	"rgb(178, 197, 231)", // 41°
	"rgb(179, 198, 231)", // 42°
	"rgb(179, 198, 232)", // 43°
	"rgb(180, 199, 232)", // 44°
	"rgb(181, 199, 233)", // 45°
	"rgb(182, 200, 233)", // 46°
	"rgb(183, 201, 233)", // 47°
	"rgb(183, 201, 234)", // 48°
	"rgb(184, 202, 234)", // 49°
	"rgb(185, 202, 234)", // 50°
	"rgb(186, 203, 235)", // 51°
	"rgb(186, 203, 235)", // 52°
	"rgb(187, 204, 235)", // 53°
	"rgb(188, 204, 236)", // 54°
	"rgb(188, 205, 236)", // 55°
	"rgb(189, 205, 236)", // 56°
	"rgb(190, 206, 237)", // 57°
	"rgb(190, 206, 237)", // 58°
	"rgb(191, 206, 237)", // 59°
	"rgb(192, 207, 238)", // 60°
	"rgb(192, 207, 238)", // 61°
	"rgb(192, 207, 238)", // 62°
	"rgb(192, 207, 238)", // 63°
	"rgb(192, 207, 238)", // 64°
	"rgb(192, 207, 238)", // 65°
	"rgb(192, 207, 238)", // 66°
	"rgb(192, 207, 238)", // 67°
	"rgb(192, 207, 238)", // 68°
	"rgb(192, 207, 238)", // 69°
	"rgb(192, 207, 238)", // 70°
	"rgb(192, 207, 238)", // 71°
	"rgb(192, 207, 238)", // 72°
	"rgb(192, 207, 238)", // 73°
	"rgb(192, 207, 238)", // 74°
	"rgb(192, 207, 238)", // 75°
	"rgb(192, 207, 238)", // 76°
	"rgb(192, 207, 238)", // 77°
	"rgb(192, 207, 238)", // 78°
	"rgb(192, 207, 238)", // 79°
	"rgb(192, 207, 238)", // 80°
	"rgb(192, 207, 238)", // 81°
	"rgb(192, 207, 238)", // 82°
	"rgb(192, 207, 238)", // 83°
	"rgb(192, 207, 238)", // 84°
	"rgb(192, 207, 238)", // 85°
	"rgb(192, 207, 238)", // 86°
	"rgb(192, 207, 238)", // 87°
	"rgb(192, 207, 238)", // 88°
	"rgb(192, 207, 238)", // 89°
	"rgb(192, 207, 238)", // 90°
];

function parseRgb(rgb) {
	return rgb.match(/\d+/g).map(Number);
}

function interpolateColors(color1, color2, factor) {
	const r = Math.round(color1[0] + (color2[0] - color1[0]) * factor),
		g = Math.round(color1[1] + (color2[1] - color1[1]) * factor),
		b = Math.round(color1[2] + (color2[2] - color1[2]) * factor);

	return `rgb(${r}, ${g}, ${b})`;
}

function wrapAngle(angle) {
	if (angle >= 180) return angle - 360;
	if (angle <= -180) return angle + 360;

	return angle;
}

export function estimateSkyColor(angle) {
	const altitude = 90 * Math.sin(wrapAngle(angle) * (Math.PI / 180)),
		index = altitude + 90;

	const floor = Math.floor(index),
		ceil = Math.ceil(index);

	if (floor === ceil) {
		return skyColorStops[index1];
	}

	const color1 = parseRgb(skyColorStops[floor]),
		color2 = parseRgb(skyColorStops[ceil]);

	return interpolateColors(color1, color2, index - floor);
}
