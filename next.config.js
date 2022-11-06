module.exports = {
	reactStrictMode: true,
	experimental: {
		externalDir: false,
	},
	// Potential new config flag:
	disableExperimentalFeaturesWarning: true,
	images: {
		domains: ['images.ctfassets.net'],
	},
	env: {
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	},
};
