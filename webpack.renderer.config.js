const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});


const { IgnorePlugin } = require('webpack');

const optionalPlugins = [];
if (process.platform !== "darwin") { // don't ignore on OSX
  optionalPlugins.push(new IgnorePlugin({ resourceRegExp: /^fsevents$/ }));
}


module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  target: 'electron-renderer',
  plugins: [
    ...optionalPlugins,
  ],
};
