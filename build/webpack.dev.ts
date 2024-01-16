import path from 'path';
import { merge } from 'webpack-merge';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import baseConfig from './webpack.base';
import WebpackDevServer from 'webpack-dev-server';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
// 运行命令的时候重启一次打开一个tab 页很烦，所以呢优化一下
// 参考：create-react-app 的启动方式
// https://github.com/facebook/create-react-app/blob/main/packages/react-dev-utils/openChrome.applescript
// 记得关闭webpack-dev-server的配置中的自动打开 open: false 或者注释
const openBrowser = require('./util/openBrowser');

const host = '127.0.0.1';
const port = '8000';

// 合并公共配置,并添加开发环境配置
const devConfig: Configuration = merge(baseConfig, {
  mode: 'development', // 开发模式,打包更加快速,省了代码优化步骤
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new ReactRefreshWebpackPlugin() // 添加热更新插件
  ]
});

const devServer = new WebpackDevServer(
  {
    host, // 地址
    port, // 端口
    open: false, // 是否自动打开，关闭
    setupExitSignals: true, // 允许在 SIGINT 和 SIGTERM 信号时关闭开发服务器和退出进程。
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true, // 开启热更新，后面会讲react模块热替换具体配置
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, '../public') // 托管静态资源public文件夹
    },
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  webpack(devConfig)
);

devServer.start().then(() => {
  // 启动界面
  openBrowser(`http://${host}:${port}`);
});

export default devConfig;
