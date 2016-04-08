module.exports = {
	prod:{
		options: {
			mangle: false,
			beautify: false
		},
		files: {
			'public/app.min.js': [
				'public/app.js',
				// '<%= paths.js.src %>/services/*.js',
				// '<%= paths.js.src %>/controlles/*.js'
			]
		}

		// files: {
		// 	'<%= paths.js.dist %>/app.min.js': [
		// 		'<%= paths.js.src %>/app.js',
		// 		// '<%= paths.js.src %>/services/*.js',
		// 		// '<%= paths.js.src %>/controlles/*.js'
		// 	]
		// }
	}
};