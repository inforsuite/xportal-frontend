// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ModularWebpackPlugin = require('modular-webpack-plugin')

// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)

// 增加环境变量
process.env.VUE_APP_NAME = process.env.npm_package_name
process.env.VUE_APP_VERSION = process.env.npm_package_version
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss')

module.exports = {
  // publicPath 使用相对路径可以满足大多数情况需求
  // 如遇特殊情况满足不了请调整该值，请参考Vue Cli文档中关于“相对 publicPath 的限制”：https://cli.vuejs.org/zh/config/#publicpath
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [
    'modular-core',
    'modular-vue',
    '@xportal',
    'vuex-along'
  ],
  css: {
    loaderOptions: {
      // 设置 scss 公用变量文件
      sass: {
        prependData: '@import \'@xportal/frame/assets/style/public.scss\';'
      }
    }
  },
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve
      .symlinks(true)

    config
      // 开发环境
      .when(process.env.NODE_ENV === 'development',
        // sourcemap不包含列信息
        config => config.devtool('cheap-source-map')
      )
    // markdown
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end()

    // i18n
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()

    config.module
      .rule('modular')
      .test(/modular\.config$/)
      .use('modular-loader')
      .loader('modular-webpack-plugin/modular-loader')
      .end()

    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .include
      .add(resolve('../frame/assets/svg-icons/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'd2-[name]'
      })
      .end()

    // image exclude
    const imagesRule = config.module.rule('images')
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude
      .add(resolve('../frame/assets/svg-icons/icons'))
      .end()

    // 重新设置 alias
    // config.resolve.alias
    // 本地调试modular模块时可采用这种配置重定向到本地目录
    // .set('modular-webframe', resolve('src/frame'))
    // .set('modular-vue', resolve('src/vue'))
    // 或者将本地引用映射到npm模块
    // .set('@/frame', '@xportal/frame')

    // 判断环境加入模拟数据
    if (process.env.VUE_APP_BUILD_MODE !== 'nomock') {
      config
        .entry('app')
        .add('@/mock')
        .end()
    }
  },
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin()
      new ModularWebpackPlugin()
    ],
    externals: {
      logger: 'console',
      serverConfig: 'serverConfig'
    }
  }
}
