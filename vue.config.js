const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false /* 关闭语法检查 */,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.join(__dirname, './src/assets/styles/mixins.less'), path.join(__dirname, './src/assets/styles/variables.less')]
    }
  }
})
