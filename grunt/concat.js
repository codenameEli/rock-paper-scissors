module.exports = {
	prod:{
		src: [
			'<%= paths.js.src %>/app.js',
			'<%= paths.js.src %>/services/*.js',
			'<%= paths.js.src %>/controllers/*.js'
		],
		dest: '<%= paths.js.dest %>/app.min.js'

		// files: {
		// 	'<%= paths.js.dist %>/app.min.js': [
		// 		'<%= paths.js.src %>/app.js',
		// 		// '<%= paths.js.src %>/services/*.js',
		// 		// '<%= paths.js.src %>/controlles/*.js'
		// 	]
		// }
	}
};