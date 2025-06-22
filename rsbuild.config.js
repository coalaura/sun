import { defineConfig } from "@rsbuild/core";

console.log("Loaded rsbuild config!")

export default defineConfig({
	source: {
		entry: {
			index: "./src/index.js",
		},
	},
	html: {
		template: "./public/index.html",
	},
	output: {
		filenameHash: true,
	},
});
