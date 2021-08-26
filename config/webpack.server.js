const config = require('./webpack.common').createConfig({
    target: 'server'
});

module.exports = {
    ...config,
    output: {
        ...config.output,
        publicPath: './'
    },
    
    module: {
        ...config.module,

        rules: [
            ...config.module.rules,

            {
                test: /\.css$/,
                use: 'null-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
              },
        ]
    },

    externals: {
        'express': 'commonjs express',
        'react': 'commonjs react',
        'react-dom/server': 'commonjs react-dom/server',
        // 'react-router': 'commonjs react-router',
        'react-router-dom': 'commonjs react-router-dom'
    },
};