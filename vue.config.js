const path = require('path');
module.exports = {
	pwa: {
		name: "Web-service-dashboard",
		appleMobileWebAppCapable: "yes",
	},
	lintOnSave: true,
	chainWebpack(config) {
		config.resolve.alias
			.set('@', path.join(__dirname, './src'))
	},
	css: {
		loaderOptions: {
			// pass options to sass-loader
			sass: {
				prependData: '@import "@/assets/style/variables.scss";'
			}
		}
	}
};
