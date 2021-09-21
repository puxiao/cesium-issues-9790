module.exports = {
    webpack: {
        configure: (config) => {
            //remove cesium warning
            config.module.unknownContextCritical = false
            config.module.unknownContextRegExp = /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/

            config.module.rules.push({
                test: /\.js$/,
                use: { loader: require.resolve('@open-wc/webpack-import-meta-loader') }
            });
            return config
        },
        output: {
            amd: {
                // Enable webpack-friendly use of require in Cesium
                toUrlUndefined: true
            }
        }
    }
};