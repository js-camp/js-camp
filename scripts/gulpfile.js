const gulp = require('gulp');
const concat = require('gulp-concat');
const closureCompiler = require('gulp-closure-compiler');
//const jsdoc = require('gulp-jsdoc3');

gulp.task('concat-js', function () {
   return gulp.src(['../static/js/base.js',
                    '../static/js/Barge.DomCore.js',
                    '../static/js/Barge.Events.js',
                    '../static/js/Carousel.js',
                    '../static/js/typed.js-master/lib/typed.js',
                    '../static/js/main.js'])/*, 'assets/src/module*.src'*/
              .pipe(concat('js.js'))
              .pipe(gulp.dest('../'));

});

gulp.task('concat-css-min', function ()
{
   return gulp.src(['../static/css/vendor/bumble-bee-css/css/root.min.css',
                    '../static/css/vendor/bumble-bee-css/css/fonts.min.css',
                    '../static/css/vendor/bumble-bee-css/css/menu.min.css',
                    '../static/css/vendor/bumble-bee-css/css/form.min.css',
                    '../static/css/vendor/bumble-bee-css/css/button.min.css',
                    '../static/fonts/fonts-awesome.min.css',
                    '../static/fonts/themify-icons/themify-icons.min.css',
                    '../static/css/bumble-bee.min.css',
                    '../static/css/custom.min.css',
                    '../static/css/animations.min.css',
                   ])
              .pipe(concat('css.css'))
              .pipe(gulp.dest('../public/'));

});

gulp.task('minify-js', function () {
   return gulp.src(['../js.js'])
              .pipe(closureCompiler({
                                       compilerPath: '/home/arch/Downloads/Apps/closure-compiler-v20170626.jar',
                                       fileName: 'js.min.js'
                                    }))
              .pipe(gulp.dest('../public'));

});



gulp.task('doc', function (cb)
{
   let config = require('../jsdoc.json');
   gulp.src(['README.md', './src/**/*.js'], {read: false})
       .pipe(jsdoc(config, cb));
});

gulp.task('default', ['concat-js'/*, 'pack-css'*/]);