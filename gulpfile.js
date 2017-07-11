/**
 * Created by chinthana on 11/07/2017.
 */
var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var connect =  require('gulp-connect');

// Server
gulp.task('connect', function() {
    connect.server();
});

// Pre-process Sass
gulp.task('styles', function (){
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({
            includePaths: [
                'node_modules/govuk_frontend_toolkit/stylesheets',
                'node_modules/govuk-elements-sass/public/sass'
            ]
        }).on('error', sass.logError))
        .pipe(gulp.dest('./assets/stylesheets'))
});


gulp.task('default', ['connect', 'styles']);