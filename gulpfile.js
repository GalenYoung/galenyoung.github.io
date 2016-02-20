//倒入工具包 require('node_modules里对应模块') --加载插件
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');

//预编译less文件和压缩css文件
gulp.task('LessToCss',function(){
    gulp.src('style/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(autoprefixer('last 2 version','ie8')) //添加前缀
        .pipe(gulp.dest('style')) //保存未压缩文件到我们指定的目录
        .pipe(rename({suffix:'.min'})) //给文件添加.min后缀
        .pipe(minifycss())  //压缩样式文件
        .pipe(gulp.dest('style')) //输出压缩文件到指定目录
        .pipe(notify({message:'Styles task complete'})); //提醒任务完成
 });
gulp.task('CssToMin',function(){
    gulp.src('style/reset.v1.0.css') //该任务针对的文件
        .pipe(rename({suffix:'.min'})) //给文件添加.min后缀
        .pipe(minifycss())  //压缩样式文件
        .pipe(gulp.dest('style')) //输出压缩文件到指定目录
        .pipe(notify({message:'Styles task complete'})); //提醒任务完成
 });
gulp.task('softLessToCss',function(){
    gulp.src('software/soft-style/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(autoprefixer('last 2 version','ie8')) //添加前缀
        .pipe(gulp.dest('software/soft-style')) //保存未压缩文件到我们指定的目录
        .pipe(rename({suffix:'.min'})) //给文件添加.min后缀
        .pipe(minifycss())  //压缩样式文件
        .pipe(gulp.dest('software/soft-style')) //输出压缩文件到指定目录
        .pipe(notify({message:'soft的less任务输出完成'})); //提醒任务完成
 });

gulp.task('pgmLessToCss',function(){
    gulp.src('programme/pgm-style/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(autoprefixer('last 2 version','ie8')) //添加前缀
        .pipe(gulp.dest('programme/pgm-style')) //保存未压缩文件到我们指定的目录
        .pipe(rename({suffix:'.min'})) //给文件添加.min后缀
        .pipe(minifycss())  //压缩样式文件
        .pipe(gulp.dest('programme/pgm-style')) //输出压缩文件到指定目录
        .pipe(notify({message:'gpm的less任务输出完成'})); //提醒任务完成
 });
gulp.task('thkLessToCss',function(){
    gulp.src('think/thk-style/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(autoprefixer('last 2 version','ie8')) //添加前缀
        .pipe(gulp.dest('think/thk-style')) //保存未压缩文件到我们指定的目录
        .pipe(rename({suffix:'.min'})) //给文件添加.min后缀
        .pipe(minifycss())  //压缩样式文件
        .pipe(gulp.dest('think/thk-style')) //输出压缩文件到指定目录
        .pipe(notify({message:'thk的less任务输出完成'})); //提醒任务完成
 });
//js代码校验、合并和压缩
gulp.task('scripts',function(){  //scripts任务
    return gulp.src('js/*.js')
    .pipe(jshint()) //js代码校验
    .pipe(jshint.reporter('default'))
    .pipe(concat('common..js')) //js代码合并
    .pipe(rename({suffix:'min'})) //给文件添加.min后缀
    .pipe(uglify()) //压缩脚本文件
    .pipe(gulp.dest('result')) //输出压缩文件到指定目录
    .pipe(notify({message:'Scripts task complete'}));
})

//images --压缩图片
gulp.task('images',function(){
    return gulp.src('images/*')
    .pipe(cache(imagemin({optimizationLevel:3,progressive:true,interlaced:true})))
    .pipe(gulp.dest('images'))
    .pipe(notify({message:'Images task complete'}));
});

//定义默认任务
gulp.task('default',function(){
        gulp.start('LessToCss','softLessToCss','pgmLessToCss','thkLessToCss','scripts','images','CssToMin');
})

//watch
gulp.task('watch',function(){
    gulp.watch('style/reset.v1.0.css',['CssToMin']); 
    gulp.watch('style/*.less',['LessToCss']);  //watch .less files
    gulp.watch('software/soft-style/*.less',['softLessToCss']); 
    gulp.watch('programme/pgm-style/*.less',['pgmLessToCss']); 
    gulp.watch('think/thk-style/*.less',['thkLessToCss']);
    gulp.watch('js/*.js',['scripts']);  //watch .js files
    gulp.watch('images/*',['images']);
    livereload.listen(); //Create LiveReload server
    gulp.watch(['result/*']).on('change',livereload.changed);
});