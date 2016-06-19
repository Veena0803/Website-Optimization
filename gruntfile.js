module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify:{
			js:{
				src: 'js/perfmatters.js',
				dest: 'dist/js/perfmatters.min.js'
			}
		},
		cssmin:{
			css:{
				src: 'css/style.css',
				dest: 'dist/css/style.min.css'
			},
			build:{
				src: 'css/print.css',
				dest: 'dist/css/print.min.css'
			}
		},
		htmlmin:{
			html:{
				src: 'index.html',
				dest: 'dist/index.min.html'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default',['uglify','cssmin','htmlmin']);
}