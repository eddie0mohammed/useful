/*
1. npm install -g gulp
2. mkdir project
3. npm init
4. npm install --save-dev gulp

sample project structure:
1. src: folder ==> all files before compilation
2. dist: folder ==> everything from src POST compilation : do not modify anything inside


-- TOP LEVEL FUNCTIONS --
============================
1. gulp.task() - Define tasks
2. gulp.src() - Point to files to use
3. gulp.dest() - Point to folder to output
4. gulp.watch() - Watch files and folders for changes
============================

src:
1. touch gulpfile.js

gulpfile.js:

sample gulp.js file example:

*/

//first npm install gulp --save-dev
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat =  require("gulp-concat");

// Logs Message
gulp.task('message', function(){
	return console.log("Gulp is running...");
});

//copy all HTML files from SRC to DIST
gulp.task('copyHtml', function(){
	gulp.src("src/*.html")
		.pipe(gulp.dest("dist"));
});

//optimize images
gulp.task("imageMin", () => {
	gulp.src("src/images/*")
		.pipe(imagemin())
		.pipe(gulp.dest("dist/images"));
});

//minify JS
gulp.task("uglify", () => {
	gulp.src("src/js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

//scripts (for js files)
gulp.task("scripts", function(){
	gulp.src("src/js/*.js")
		.pipe(concat("main.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});


// compile sass
gulp.task("sass", function(){
	gulp.src("src/sass/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("dist/css"));
});

//default
//command line : use 'gulp' to run all task
gulp.task("default", ['message', 'copyHtml', "imageMin", "sass", "scripts"]);

// watch for changes in file
gulp.task("watch", function(){
	gulp.watch("src/js/*.js", ["scripts"]);
	gulp.watch("src/images/*", ["imageMin"]);
	gulp.watch("src/sass/*.scss", ["sass"]);
	gulp.watch("src/*.html", ["copyHtml"]);
});

===============
IMPORTANT REGARDING ASYNC ERROR ON GULP 4

gulp.task('message', function(done){
    console.log("Gulp is running...");
    done();
});

================

// USEFUL PLUGINS
/*
1. imagemin -> optimize images -> make smaller
npm install --save-dev gulp-imagemin

2. uglify -> minify javascript
npm install --save-dev gulp-uglify

3. sass -> for css
npm install --save-dev gulp-sass

4. gulp-concat -> concat all js files together
npm install --save-dev gulp-concat


*/