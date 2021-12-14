module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  //构建项目生成的目录 生产环境 和开发环境
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  //关闭语法编译警告
  lintOnSave: false,
  css: {
    loaderOptions: {
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      }
    }
  },
  devServer: {
    host: '0.0.0.0', //服务器外部是否可访问
    // proxy: {
    //   '/user': {
    //     target: 'http://121.89.244.34:9998', //跨域代理目标地址
    //     ws: true, //websocket
    //     changeOrigin: true //是否跨域
    //     // pathRewrite: {
    //     //   '^/user': '' //访问目标地址中没有则加上
    //     // }
    //   },
    //   '/login': {
    //     target: 'http://121.89.244.34:9998', //跨域代理目标地址
    //     ws: true, //websocket
    //     changeOrigin: true //是否跨域
    //     // pathRewrite: {
    //     //   '^/user': '' //访问目标地址中没有则加上
    //     // }
    //   }
    // },
    proxy: {
      [process.env.VUE_APP_DATA_USER]: {
        target: process.env.VUE_APP_DATA_URL,
        ws: true,
        changeOrigin: true //是否跨域
        // pathRewrite: {
        //   [`^${process.env.VUE_APP_DATA_USER}`]: '' //访问目标地址中没有则加上
        // }
      },
      [process.env.VUE_APP_DATA_LOGIN]: {
        target: process.env.VUE_APP_DATA_URL,
        ws: true,
        changeOrigin: true //是否跨域
        // pathRewrite: {
        //   [`^${process.env.VUE_APP_DATA_LOGIN}`]: '' //访问目标地址中没有则加上
        // }
      },
      [process.env.VUE_APP_DATA_SCHOOL]: {
        target: process.env.VUE_APP_DATA_URL,
        ws: true,
        changeOrigin: true //是否跨域
        // pathRewrite: {
        //   [`^${process.env.VUE_APP_DATA_LOGIN}`]: '' //访问目标地址中没有则加上
        // }
      },
      [process.env.VUE_APP_DATA_ADDSCHOOL]: {
        target: process.env.VUE_APP_DATA_URL,
        ws: true,
        changeOrigin: true //是否跨域
        // pathRewrite: {
        //   [`^${process.env.VUE_APP_DATA_LOGIN}`]: '' //访问目标地址中没有则加上
        // }
      },
      [process.env.VUE_APP_DATA_DELECTSCHOOL]: {
        target: process.env.VUE_APP_DATA_URL,
        ws: true,
        changeOrigin: true //是否跨域
        // pathRewrite: {
        //   [`^${process.env.VUE_APP_DATA_LOGIN}`]: '' //访问目标地址中没有则加上
        // }
      },
      [process.env.VUE_APP_DATA_UPDATESCHOOL]: {
        target: process.env.VUE_APP_DATA_URL,
        ws: true,
        changeOrigin: true //是否跨域
        // pathRewrite: {
        //   [`^${process.env.VUE_APP_DATA_LOGIN}`]: '' //访问目标地址中没有则加上
        // }
      }
    }
  }
}
