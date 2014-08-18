var gulp = require('gulp');

gulp.task('copy', function() {
	return gulp.src(['src/html/**','src/css/**'])
		.pipe(gulp.dest('build'));
});
