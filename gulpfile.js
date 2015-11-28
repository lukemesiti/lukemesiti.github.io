'use strict';

var gulp = require('gulp'),
		sass = require('gulp-ruby-sass'),
		autoprefixer = require('gulp-autoprefixer')
		livereload = require('gulp-livereload');

gulp.task('styles', function() {
	return sass('styles/*.scss', { style: 'expanded' })
		.pipe(autoprefixer({ browsers: ['last 2 versions'] }))
		.pipe(gulp.dest('styles/css'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('styles/*.scss', ['styles']);
});

gulp.task('default', function() {

});