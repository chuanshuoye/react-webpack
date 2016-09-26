var webpack = require('webpack');
var path=require('path');
module.exports = {
    entry: {
        entry:[
            'webpack-dev-server/client?http://127.0.0.1:3000/',
            'webpack/hot/only-dev-server',
            './src/app/entry1.js'
            ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: 'http://127.0.0.1:3000/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude:  /node_modules/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015', 'stage-0']
            }
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        },
        { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.(png|jpg)$/, loader: 'url-loader?mimetype=image/png' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};