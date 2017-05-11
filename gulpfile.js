/// <binding AfterBuild="default" />

"use strict";

const superStaticPort = 8000;

// gulp plugins (including gulp itself) we'll use for our build process
// our build process will perform the following:
//        1) build a bundle for our vendor JavaScript dependencies
//        2) build a bundle for our own JavaScript
//        3) watch for changes to our own JavaScript files and rebuild for us automatically
//        4) run superstatic web server for us automatically
const
    babel = require("gulp-babel"),
    concat = require("gulp-concat"),
    gulp = require("gulp"),
    ngAnnotate = require("gulp-ng-annotate"),
    sourceMaps = require("gulp-sourcemaps"),
    superStatic = require("superstatic").server,
    uglify = require("gulp-uglify");

// task piece declarations

gulp.task("js-deps", function() {
    // build the JavaScript vendor pieces we include as dependencies
    gulp.src([
        "./node_modules/angular/angular.min.js",
        "./node_modules/angular-route/angular-route.min.js",
        "./node_modules/jquery/dist/jquery.min.js",
        "./www/build/semantic.min.js"
    ])
        .pipe(concat("vendor.min.js"))
        .pipe(gulp.dest("./www/build"));
});

gulp.task("js-app", function() {
    // build the JavaScript we write for our project
    let baseDir = __dirname + "/www/app",
        outputDir = __dirname + "/www/build",
        outputFilename = "app.min.js";

    gulp.src([
        baseDir + "/index.js",
        // baseDir + "/**/*service.js",
        baseDir + "/**/*.js"
    ])
        // source maps allow us to debug in our browsers with bundles
        .pipe(sourceMaps.init())
        // babel transpiles newer JavaScript to older, more supported JavaScript for
        // browser compatibility sake
        .pipe(babel({ presets: ["es2015"] }))
        .pipe(concat(outputFilename))
        // remember how we were wrapping our controller and service declarations in arrays so
        // minification didn't "get us"?
        .pipe(ngAnnotate())
        // then we minify / uglify / whatever you call it
        .pipe(uglify())
        // source maps allow us to debug in our browsers with bundles
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(outputDir));
});

gulp.task("css-app", function() {
    let baseDir = __dirname + "/www/app",
        outputDir = __dirname + "/www/build",
        outputFilename = "app.css";

        gulp.src([
            baseDir + "/styles.css",
            baseDir + "/**/*.css"
        ])
            .pipe(concat(outputFilename))
            .pipe(gulp.dest(outputDir));
});

gulp.task("watch", function() {
    let baseDir = __dirname + "/www/app";

    // monitor file system for JavaScript changes, building js-app again if so
    gulp.watch(baseDir + "/**/*.js", ["js-app"]);
    gulp.watch(baseDir + "/**/*.css", ["css-app"]);
});

gulp.task("superstatic", ["js-deps", "js-app"], function() {
    // run superstatic, still configured via superstatic.json living at root of project
    superStatic({
        port: superStaticPort
    }).listen(function() {
        console.log("Superstatic running your content on localhost (" + superStaticPort + ")");
    });
});

// composite tasks

gulp.task("default", ["js-deps", "js-app", "css-app", "watch", "superstatic"]);
