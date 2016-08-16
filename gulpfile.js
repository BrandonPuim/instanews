var gulp = require('gulp');			
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sass = require('gulp-sass');


gulp.task('cssFunc', function(){
	return gulp.src('./SCSS/*.scss') 			
    .pipe(sass())	
	.pipe(minify()) 		
	.pipe(concat('all.css'))				
	// .pipe(concat({ extname: '.min.css' })) 		
	.pipe(gulp.dest('./Build/CSS')); 			
});


gulp.task('jsFunc', function(){
	return gulp.src('./JS/*.js') 			
    //.pipe(sass())	
	.pipe(minify()) 		
	//.pipe(concat('all.js'))						
	.pipe(gulp.dest('./Build/JS')); 			
});


gulp.task('watch', function (){
   gulp.watch('./SCSS/*.scss', ['cssFunc']);
});

// gulp.task('default', ["cssFunc"]);


