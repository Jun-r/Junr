var gulp = require( 'gulp' );
var rename = require('gulp-rename');
var header = require('gulp-header');
var changed = require('gulp-changed');

var aliasCombo = require('gulp-alias-combo');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var util= require( 'gulp-util' );
//var GulpSSH = require('gulp-ssh');
//var spriter=require( 'gulp-css-spriter' );

var Version='1.0.0';
var buildDate = util.date(Date.now(), 'isoDate')+" "+util.date(Date.now(), 'isoTime');
var banner = '/*\n * Version:'+Version+'\n * Author:Junr \n * Updated:'+buildDate+'\n*/\n';

var jsdist='./public/dist/js';
//
////测试环境发布参数
//var config = {
//    host: '192.168.10.48',
//    port: 2222,
//    username: 'junr',
//    password: 'tuxx2696408'
//}
//
//var gulpSSH = new GulpSSH({
//    ignoreErrors: false,
//    sshConfig: config
//})
//gulp.task('ftp', function () {
//    return gulp
//        .src(['./*/*','./*.html','!**/node_modules/**'])
//        .pipe(gulpSSH.dest('/home/junr/www'));
//})
gulp.task('editor', function() {
    gulp.src('./bower_components/editor.md/css/*.css')
        .pipe(gulp.dest('./public/editor/css'))
    gulp.src('./bower_components/editor.md/fonts/*')
        .pipe(gulp.dest('./public/editor/fonts'))
    gulp.src('./bower_components/editor.md/images/*')
        .pipe(gulp.dest('./public/editor/images'))
    gulp.src('./bower_components/editor.md/languages')
        .pipe(gulp.dest('./public/editor/languages'))
    gulp.src(['./bower_components/editor.md/lib/*.js','./bower_components/editor.md/lib/**/*'])
        .pipe(gulp.dest('./public/editor/lib'))
    gulp.src('./bower_components/editor.md/plugins/**/*')
        .pipe(gulp.dest('./public/editor/plugins/'))
    gulp.src('./bower_components/editor.md/editormd.min.js')
        .pipe(gulp.dest('./public/editor'))
})
gulp.task('js', function() {
    gulp.src(['./public/js/logo.js','./public/js/detail.js'])
        //.pipe(changed(jsdist))
        .pipe(concat('common.js'))
        .pipe(uglify())
        .pipe(header(banner))
        .pipe(gulp.dest(jsdist))
    gulp.src(['./public/js/logo.js','./public/js/index.js'])
        //.pipe(changed(jsdist))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(header(banner))
        .pipe(gulp.dest(jsdist))
    gulp.src(['./public/editor/lib/marked.min.js','./public//editor/lib/prettify.min.js','./public/editor/lib/prettify.min.js','./public/js/editormd.min.js'])
        //.pipe(changed(jsdist))
        .pipe(concat('editormd.js'))
        .pipe(gulp.dest(jsdist))
})

gulp.task('css', function() {
        gulp.src(['./public/css/base.css'],['./public/css/editormd.css'])
        //.pipe(spriter({
        //    // 生成的spriter的位置
        //    'spriteSheet': './images/sprite_bg.png',
        //    // 生成样式文件图片引用地址的路径 如下将生产：backgound:url(../images/sprite20324232.png)
        //    'pathToSpriteSheetFromCSS': './images/sprite_bg.png'
        //}))
        .pipe(minifyCss({
            advanced: true
        }))
        .pipe(header(banner))
        .pipe(gulp.dest("./public/dist/css"));
});
gulp.task('default');
//gulp.task('default', ['watch']);
