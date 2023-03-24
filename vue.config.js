// vue.config.js
module.exports = {
  // 选项
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-cli-project/' : '/',
  // 构建时输出的目录
  outputDir: "dist",
  // 静态文件存放的目录(js、css、img、fonts)
  assetsDir: "assets",
  // 是否使用lintOnSave: true,
  lintOnSave: true,
  // html的输出路径
  indexPath: "index.html",
  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   * 打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   * map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   * 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: false,
  // 文件名哈希
  filenameHashing: true,
  //pages在multi-page(多页)模式下构建应用。每个"page"应该有一个对应的javascript入口文件
  // css相关配置
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    loaderOptions: {
      less: {
        javascriptEnabled: true //less 配置
      }
    }, // css预设器配置项
    modules: false // 启用 CSS modules for all css / pre-processor files.
  },

  devServer: {
    host: "0.0.0.0",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // 设置请求头
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // 配置多个代理
    proxy: {
      "/api": {
        target: "http://192.168.x.xxx:8090", // 要访问的接口域名
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "" //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        }
      },
    },
    configureWebpack: config => {
      // 生产环境
      if (process.env.NODE_ENV === "production") {
        // 生产环境去除打印日志以及debugger
        config.optimization.minimizer = [
          // new UglifyJsPlugin({
          //     uglifyOptions: {
          //   compress: {
          // drop_console: true, //console
          // drop_debugger: true,
          // pure_funcs: ['console.log'] //移除console
          //   }
          //     }
          // })
            ]
        //打包文件大小配置
        config["performance"] = {
          "maxEntrypointSize": 10000000,
          "maxAssetSize": 30000000
        }
      } else {
        // 开发环境配置
      }
    }
  },
};
