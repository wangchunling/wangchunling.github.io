var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        //app : ['webpack-dev-server/client?http://localhost:8080','webpack/hot/dev-server', path.resolve(__dirname, './js/app.js')],
        app : [path.resolve(__dirname, './js/app.js')],
        third_paty:['react']
    },
    output: {
        path: './build',
        filename: "[name].js",

    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    resolve:{
        extensions:['','.js','.json','jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('third_paty', 'react.js')
    ]
};
