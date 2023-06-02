const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (pathName) => path.resolve(__dirname, pathName)

module.exports = {
  /* less */
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  webpack: {
    /* 配置别名 */
    alias: {
      '@': resolve('src'),
      assets: resolve('src/assets'),
      'base-ui': resolve('src/base-ui'),
      components: resolve('src/components'),
      hooks: resolve('src/hooks'),
      router: resolve('src/router'),
      services: resolve('src/services'),
      store: resolve('src/store'),
      utils: resolve('src/utils'),
      views: resolve('src/views'),
    },
  },
}
