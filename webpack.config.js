const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const config = {
  entry: {
    'vendor': './src/vendor',
    'app': './src/main'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.es6', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.ts$/, exclude: ['node_modules'], loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html/, loader: 'html-loader?minimize=false' },
      { test: /\.styl$/, loader: 'css-loader!stylus-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(gif|png|jpe?g)$/i, loader: 'file-loader?name=dist/images/[name].[ext]' },
      { test: /\.woff2?$/, loader: 'url-loader?name=dist/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)$/, loader: 'file-loader?name=dist/fonts/[name].[ext]' }
    ]
  },
  // target:'node',
  // externals: [nodeExternals()],
  plugins: [
    // Fixes Angular 2 error
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    )
  ]
};

const isProd = (process.env.NODE_ENV === 'production');

if (!isProd) {
  config.devtool = 'inline-source-map';
} else {
  config.devtool = 'hidden-source-map';
  config.plugins = config.plugins.concat([
    
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': process.env.NODE_ENV
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NoErrorsPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
    new CopyWebpackPlugin([{ from: './src/index.html' }], {})
  ]);
}

module.exports = config;