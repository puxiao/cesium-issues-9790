module.exports = {
    webpack: {
        configure: (config) => {
            //remove cesium warning
            config.module.unknownContextCritical = false
            config.module.unknownContextRegExp = /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/
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