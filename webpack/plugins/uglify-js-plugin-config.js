const uglifyJsPluginConfig = new UglifyJsPlugin({
  sourceMap: true,
  uglifyOptions: {
    ecma: 8,
    compress: false,
    mangle: false,
    keep_fnames: true,
    output: {
      comments: true,
      beautify: true,
      indent_level: 2,
      indent_start: 0
    }
  }
});
