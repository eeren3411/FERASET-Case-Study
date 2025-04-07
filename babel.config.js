module.exports = function (api) {
	api.cache(true);
	return {
	  presets: ['babel-preset-expo'],
	  plugins: [
		[
		  'module-resolver',
		  {
			extensions: ['.ts', '.tsx', '.js', '.json'],
			alias: {
			  '@screens': './screens',
			  '@components': './components',
			  '@styles': './styles',
			  '@assets': './assets',
			  '@myFirebase': './firebase',
			},
		  },
		],
	  ],
	};
  };
  