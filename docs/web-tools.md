

### babel

babel-cli


### gulp

```js

var gulp = require('gulp');
task, src, dest, run, watch

require("gulp-jshint");
require("gulp-uglify"); js压缩
require('gulp-imagemin'); 图片压缩
require('gulp-sass'); sass
require('gulp-less'); less
require('gulp-clean-css'); css压缩
require('gulp-rename');
require('gulp-concat');
require('gulp-connect');


gulp.task("lessc",function() {
    gulp.src("src/less/*.less") //
        .pipe(less()) //
        .pipe(cleanCSS()) //
        .pipe(gulp.dest("dist/css")) //
})

gulp.task("watch",function(){
    gulp.watch("src/*.html", ['copyHtml']);
    gulp.watch("src/images/*", ['imagemin']);
    gulp.watch("src/js/*.js", ['uglify']);
    gulp.watch("src/lessc/*.less", ['lessc']);
})

gulp.task('build', ['copy-index', 'copy-css', 'copy-js', 'copy-images', 'copy-data'], () => {
    console.log('success')
})

// 默认任务
gulp.task('default', function(){
    gulp.run('lint', 'sass', 'scripts');

    // 监听文件变化
    gulp.watch('./js/*.js', function(){
        gulp.run('lint', 'sass', 'scripts');
    });
});
// 默认任务
gulp.task('default', ['server', 'watch'])

gulp.task('server', () => {
    connect.server({
        // 说明服务器的根目录
        root: 'dist',
        livereload: true // 实时更新
    })
})
gulp.task('copy-data', () => {
   gulp.src('./data/**/*')
       .pipe(gulp.dest('dist/data'))
       .pipe(connect.reload()) // 
})
```


