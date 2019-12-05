// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-px2rem-exclude": {  // 添加的代码
      remUnit: 75,
      exclude: /node_modules/ // 忽略node_modules目录下的文件
    }
    // to edit target browsers: use "browserslist" field in package.json
  }
}
