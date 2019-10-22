const path = require('path');

module.exports = {
    mode: 'none',
    target: 'node',
    entry: {
        app: [
            'babel-polyfill',
            './server.js'
        ]
    },
    resolve: {
        alias: {
          ControlPath: path.resolve(__dirname, '/src/routes/controllers/'),
          
        }
      },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            
        }]
    }
};