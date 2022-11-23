const gulp = require('gulp');
const path = require('path');
const del = require('del');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssDeclarationSorter = require('css-declaration-sorter');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const less = require('gulp-less');
const webpack = require('webpack-stream');
const merge = require('merge-stream');

// const dist = "./";

const paths = {
  src: {
    root: path.join(__dirname),
    less: path.join(__dirname, 'resources', 'style'),
    js: path.join(__dirname, 'resources', 'js'),
  },
  dist: {
    root: path.join(__dirname),
    css: path.join(__dirname, 'css'),
    js: path.join(__dirname, 'js'),
  },
};

const postcssPlugins = [
  cssDeclarationSorter({ order: 'smacss' }),
  postcssPresetEnv(),
  cssnano({
    presets: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  }),
  autoprefixer({
    browsers: ['last 14 versions'],
  }),
];

const buildJs = () => {
  return gulp
    .src(paths.src.js + '/index.js')
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'script.js',
        },
        watch: false,
        devtool: 'source-map',
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        debug: true,
                        corejs: 3,
                        useBuiltIns: 'usage',
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
        plugins: [
          new webpack.webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
          }),
        ],
      })
    )
    .pipe(gulp.dest(paths.dist.js));
  // .pipe(browsersync.stream());
};

const buildLess = () => {
  const info = {
    name: 'style.css',
  };

  const lessStream = gulp
    .src(path.join(paths.src.less, 'style.less'))
    .pipe(sourcemaps.init())
    .pipe(less());

  const mergedStream = merge(lessStream)
    .pipe(concat(info.name))
    //.pipe(gulpautoprefixer({browsers: ['last 14 versions']}))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist.css));

  return mergedStream;
};

const clean = () => {
  const files = [
    path.join(paths.dist.css, 'style.css'),
    path.join(paths.dist.css, 'style.css.map'),
  ];

  return del(files);
};

const selectedClean = (files) => {
  return del(files);
};

const watchFiles = () => {
  watch(
    ['./resources/style/**/*.less'],
    gulp.series(
      selectedClean.bind(this, [
        path.join(paths.dist.css, 'style.css'),
        path.join(paths.dist.css, 'style.css.map'),
      ]),
      buildLess
    )
  );

  watch(
    ['./resources/js/**/*.js'],
    gulp.series(
      selectedClean.bind(this, [
        path.join(paths.dist.js, 'script.js'),
        path.join(paths.dist.js, 'script.css.map'),
      ]),
      buildJs
    )
  );

  // gulp.watch("./src/index.html", gulp.parallel("copy-html"));
  // gulp.watch("./src/icons/**/*.*", gulp.parallel("copy-assets"));
  // gulp.watch("./src/img/**/*.*", gulp.parallel("copy-assets"));
  // gulp.watch("./src/scss/**/*.scss", gulp.parallel("build-sass"));
  // gulp.watch("./src/js/**/*.js");
};

// const build = () => {
//     gulp.parallel(buildLess, buildJs);
// }

const baseTaskDev = gulp.series(clean, gulp.parallel(buildLess, buildJs));

const dev = gulp.series(baseTaskDev, watchFiles);

exports.dev = dev;
