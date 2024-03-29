module.exports = {
	reactStrictMode: true,
	experimental: {
		externalDir: false
	},
	images: {
		domains: [
			'images.ctfassets.net',
			'scontent-sin6-1.cdninstagram.com',
			'scontent-sin6-2.cdninstagram.com',
			'scontent-sin6-3.cdninstagram.com',
			'scontent.cdninstagram.com',
			'scontent-sin6-4.cdninstagram.com'
		]
	},
	env: {
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
		instagramToken: process.env.INSTAGRAM_TOKEN,
		googleAnalytics: process.env.GOOGLE_ANALYTICS
	}
}
