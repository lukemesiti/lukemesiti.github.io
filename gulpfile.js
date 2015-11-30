'use strict';

var gulp = require('gulp'),
		sass = require('gulp-ruby-sass'),
		minifycss = require('gulp-minify-css'),
		rename = require('gulp-rename'),
		autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
	return sass('styles/*.scss', { style: 'expanded' })
		.pipe(autoprefixer({ browsers: ['last 2 versions'] }))
		.pipe(gulp.dest('styles/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('styles/css'));
});

gulp.task('watch', function() {;
	gulp.watch('styles/*.scss', ['styles']);
});

gulp.task('default', function() {

});
