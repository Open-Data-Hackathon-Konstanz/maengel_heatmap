const ArcGISPlugin = require("@arcgis/webpack-plugin");
const path = require("path");

module.exports = function override(config, env) {
    //do stuff with the webpack config...

    return {
        ...config,
        resolve: {
            ...config.resolve,
            alias: {
                "esri": path.resolve(__dirname, 'node_modules/@arcgis/core/')
            },
        
        },
        plugins: [...config.plugins, new ArcGISPlugin()]
    };
  }