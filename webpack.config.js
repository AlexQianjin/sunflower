var path = require('path');
var webpack = require('webpack');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractLess = new ExtractTextPlugin('[name].[contenthash].css');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'stage-2', 'react']
				}
			}
		},
		{
			test: /\.less$/,
			exclude: /node_modules/,
			use: [{
				loader: 'style-loader' // creates style nodes from JS strings
			}, {
				loader: 'css-loader' // translates CSS into CommonJS
			}, {
				loader: 'less-loader' // compiles Less to CSS
			}]
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.less']
	},
	devServer: {
		contentBase: path.join(__dirname, "/"),
		compress: true,
		port: 9000
	}
};
