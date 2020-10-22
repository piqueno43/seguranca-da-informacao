"use strict";

import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import ejs from 'gulp-ejs';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
import rename from 'gulp-rename';
import conteudo from './src/contents/je.json';
const dest = 'dist';

const paths = {
  env: {
    src: dest
  },
  styles: {
    src: 'src/styles/**/*.scss',
    dest: `${dest}/assets/css/`,
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: `${dest}/assets/js/`,
  },
  images: {
    src: 'src/images/**/*.{jpg,jpeg,png,gif,svg,ico}',
    dest: `${dest}/assets/images/`,
  },
  fonts: {
    src: 'src/fonts/**/*.{eot,svg,ttf,woff,woff2}',
    dest: `${dest}/assets/fonts/`,
  },
};

export const clean = () => del([dest]);

export function serve() {
  return browserSync.init({
    server: {
      baseDir: paths.env.src,
    },
    open: false,
  });
}

export function styles() {
  return gulp
    .src(paths.styles.src)
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS())
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

export function scripts() {
  return gulp
    .src(paths.scripts.src)
    // .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

export function images() {
  return gulp
    .src(paths.images.src, { since: gulp.lastRun(images) })
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream());
}

export function fonts() {
  return gulp
    .src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe(browserSync.stream());
}

export function pages() {
  return gulp
    .src(['src/pages/**/*.ejs'])
    .pipe(ejs({conteudo}))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
}

export function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
  gulp.watch('src/**/*.ejs', pages);
  gulp.watch(`${dest}/**/*.html`).on('change', browserSync.reload);
}

const build = gulp.series(clean, gulp.parallel(styles, scripts, images, fonts, pages));

const defaultTask = gulp.parallel(build, serve, watch);


gulp.task('build', build);

gulp.task('default', defaultTask);



export default defaultTask;
