(function(){
    'use strict';

    // load plugins
    var gulp = require('gulp');
    var $ = require('gulp-load-plugins')();
    var uglify = require('gulp-uglifyjs');
    var config = require('./config');
    var imagemin = require('gulp-imagemin');
    var sass = require('gulp-sass');
    var pngquant = require('imagemin-pngquant');
    var fileinclude = require('gulp-file-include');
    var rename = require("gulp-rename");
    var cssmin = require('gulp-cssmin');
    var plumber = require('gulp-plumber');
    var argv = require('yargs').argv;

    /*Gulp plugin for minifay scss to css*/
    gulp.task('styles', function () {
        return gulp.src([config.src.scss + '/app.scss'])
            .pipe(plumber())
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(plumber.stop())
            .pipe($.autoprefixer('last 1 version'))
            .pipe(rename('app.css'))
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(config.tmp.css))
            .pipe(gulp.dest(config.dist.css))
            .pipe($.size());
    });

    gulp.task('exclude-files', function() {
        return gulp.src([
            //config.src.js + '/vendor/modernizr.custom.js'

        ])
        .pipe(gulp.dest(config.dist.js + '/vendor'));
    });

    /* Jshint js files */
    gulp.task('jshint', function() {
        return gulp.src([
            config.src.js + '/**/*.js',
            '!' + config.src.js + '/vendor/**/*.{js,css}'
        ])
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')));
    });

    /*Convert to minify js and concat file js*/
    gulp.task('scripts', ['jshint'], function() {
        return [
            // default scripts
            gulp.src([
                config.src.js + '/vendor/jquery.js',
                //config.src.js + '/../../node_modules/bootstrap/js/tests/vendor/tether.min.js',
                //config.src.js + '/../../node_modules/bootstrap/dist/js/bootstrap.js',
                //config.src.js + '/../../node_modules/swiper/dist/js/swiper.js',
                config.src.js + '/app.js'
            ])
            .pipe($.concat('app.js'))
            .pipe($.size())
            .pipe(gulp.dest(config.dist.js))
            .pipe(plumber())
            .pipe(uglify('app.min.js', {
                mangle: true
            }))
            .pipe(plumber.stop())
            .pipe($.size())
            .pipe(gulp.dest(config.dist.js))
        ];
    });

    /*Gulp html plugin*/

    gulp.task('html', function() {
      gulp.src([config.src.root + '/*.html'])
        .pipe(fileinclude())
        .pipe(gulp.dest(config.dist.html));
    });

    /*Gulp image min*/
    gulp.task('images',['files'], function () {
      return [
        gulp.src([
            config.src.img + '/**/*.{gif,jpg,png,svg,ico}',
            //config.src.img + '/../app/bower_components/fancybox-scss/source/**/*.{gif,jpg,png,svg,ico}'
            ])
        .pipe(gulp.dest(config.dist.img))
        ];
    });

    gulp.task('files', function () {
      return gulp.src(config.src.files + '/**/*.{gif,jpg,png,svg,ico}')
        .pipe($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.dist.files));
    });

    /*Gulp fonts*/
    gulp.task('fonts', function () {
        // return $.bowerFiles()
        return    gulp.src(config.src.fonts + '/**/*')
            .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
            .pipe($.flatten())
            .pipe(gulp.dest(config.dist.fonts))
            .pipe($.size());
    });

    /*Gulp fonts*/
    gulp.task('video', function () {
        // return $.bowerFiles()
        return    gulp.src(config.src.video + '/**/*')
            .pipe($.filter('**/*.{mp4,webm,ogv,mp3}'))
            .pipe($.flatten())
            .pipe(gulp.dest(config.dist.video))
            .pipe($.size());
    });

    /*Gulp clean*/
    gulp.task('clean', function () {
        return gulp.src([config.tmp.tmp, config.dist.root,'.sass-cache'], { read: false })
                .pipe($.clean());
    });

    /*Gulp default*/
    gulp.task('default', ['clean'], function () { gulp.start('build');});

    /*Gulp server conect*/
    gulp.task('connect', function() {
        var connect = require('connect');
        var app = connect()
            .use(require('connect-livereload')({ port: 35729 }))
            .use(connect.static(config.server.root))
            .use(connect.static(config.tmp.tmp))
            .use(connect.directory(config.server.root));

        require('http').createServer(app)
            .listen(config.server.port)
            .on('listening', function () {
                console.log('Started connect web server on http://localhost:' + config.server.port);
            })
            .on('error', function(e) {
                console.log('problem with request: ' + e.message);
            })
            .on('connect', function() {
                console.log('Connected on http://localhost:' + config.server.port);
            });
    });

    /*Gulp server*/
    gulp.task('serve', ['styles','exclude-files','scripts','connect'], function () {
        require('opn')('http://localhost:' + config.server.port);
    });

    /*Gulp watch plugin*/

    gulp.task('watch', ['serve'], function () {
        var server = $.livereload();

        gulp.watch([
            config.dist.root + '/**/*.html',
            config.dist.css + '/**/*.css',
            config.dist.js + '/**/*.js',
            config.dist.img + '/**/*.{jpg,png,gif,svg,ico}'
        ]).on('change', function (file) {
            server.changed(file.path);
        });

        gulp.watch(config.src.scss + '/**/*.scss', ['styles']);
        gulp.watch(config.src.js + '/**/*.js', ['scripts']);
        gulp.watch(config.src.root + '/**/*.html',['html']);
        gulp.watch(config.src.img + '/**/*', ['images']);
    });

    gulp.task('dev',['html','fonts','images','video','watch']);
    gulp.task('build', ['html', 'scripts', 'exclude-files', 'styles', 'images', 'fonts', 'video']);
    gulp.task('b:html', ['html']);
    gulp.task('b:js', ['scripts']);
    gulp.task('b:css', ['styles']);
})();
