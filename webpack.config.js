'use strict';
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
if(process.env.NODE_ENV === "production"){
  module.exports = {
    entry: {
    	  'index': './app/app.component.ts'
    },
  	plugins: [new ExtractTextPlugin("index.css"),new OptimizeCssAssetsPlugin(), new UglifyJSPlugin() ],
  	module:{
  	  loaders: [
  	    {
  	      test: /\.ts$/,
  	  		loader: 'awesome-typescript-loader'
  	  	},
  	  	{ test: /\.css$/,loader:ExtractTextPlugin.extract("css-loader!minimise") },
  	  ]
  	},
    resolve: {
      extensions: ['.ts']
    },
    output: {
      libraryTarget: 'umd',
      filename: 'index.js',
  		path: path.resolve(__dirname, 'dist')
    }
  }
}else{
  module.exports = {
    entry: {
    	  'index': './app/app.component.ts'
    },
  	module:{
  	  loaders: [
  	    {
  	      test: /\.ts$/,
  	  		loader: 'awesome-typescript-loader'
  	  	},
  	  	{ test: /\.css$/,loader:"css-loader"},
  	  ]
  	},
    resolve: {
      extensions: ['.ts']
    },
    output: {
      libraryTarget: 'umd',
      filename: 'index.js',
  		path: path.resolve(__dirname, 'dist')
    }
  }
}
