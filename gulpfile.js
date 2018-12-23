const gulp = require('gulp')
const browserSync = require('browser-sync')
gulp.task('browser-sync',function(){
    browserSync.init({
        files:['./lib/**/*.js','./demos/*.html'],
        server:{
            baseDir:'./',
            index:'demos/slides02.html'
        },
        port:8010
    })
})
gulp.task('default',['browser-sync'])