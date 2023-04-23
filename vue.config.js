const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    outputDir: "dist",
    lintOnSave: false,
})