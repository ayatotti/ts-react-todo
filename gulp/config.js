// @file config.js
var dest = './dist'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ

module.exports = {
  // 出力先の指定
  dest: dest,

  // webpackの設定
  webpack: {
    dest: dest + '/js',
    uglify: false,
    entry: src + '/ts/app',
    output: {
      filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
      extensions: ['', '.js','.tsx','.ts']
    },
    module: {
      loaders: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
      ]
    }
  },

  // copyの設定
  copy: {
    src: [
      src + '/www/**/*.html',
      src + '/www/img/**/*'
    ],
    dest: dest
  },

  // cleanの設定
  clean: {
    target: [dest]
  },

  stylus: {
    src: [
      src + '/styl/**/!(_)*'  // ファイル名の先頭がアンスコはビルド対象外にする
    ],
    dest: dest + '/css/',
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    options: {
      'include css': true,
      'include': './node_modules/'
    },
    minify: false
  },

  watch: {
    jssrc: src + '/ts/**/*',
    csssrc: src + '/styl/**/*',
    htmlsrc: src + '/www/**/*'
  },

  server: {
    src: dest.replace('\./',''),
    server: {
      host: 'localhost',
      port: '8080',
      livereload: true,
      directoryListing: true,
    },
  },
};
