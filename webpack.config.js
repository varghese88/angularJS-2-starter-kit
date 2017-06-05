const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
process.env.NODE_ENV = 'production';
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
console.log(isProd);
if (!isProd) {
  config.devtool = 'inline-source-map';
} else {
  config.devtool = 'hidden-source-map';
  config.plugins = config.plugins.concat([
    
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
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
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{ from: './src/index.html' }], {})
  ]);
}

module.exports = config;