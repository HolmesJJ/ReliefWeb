module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.241.162.204/Relief',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#5581E3',
                },
                javascriptEnabled: true
            }
        }
    },
};
