---
title: lodash
date: 2022-11-09
---

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

> Lodash 遵循 MIT 开源协议发布，并且支持最新的运行环境。 查看各个构件版本的区别并选择一个适合你的版本。

## 安装

浏览器环境：

```js
<script src="lodash.js"></script>
```

通过 npm：

```bash
$ npm i -g npm
$ npm i --save lodash
```

Node.js：

```js
// Load the full build.
var _ = require("lodash");
// Load the core build.
var _ = require("lodash/core");
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require("lodash/fp");

// Load method categories.
var array = require("lodash/array");
var object = require("lodash/fp/object");

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require("lodash/at");
var curryN = require("lodash/fp/curryN");
```

注意：

如需在 Node.js < 6 的 REPL 环境中使用 Lodash，请安装 [n\_](https://www.npmjs.com/package/n_)。

## 为什么选择 Lodash ？

Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 Lodash 的模块化方法 非常适用于：

- 遍历 array、object 和 string
- 对值进行操作和检测
- 创建符合功能的函数

## 模块格式

Lodash 提供 多种构建方式 和模块格式。

- [lodash](https://www.npmjs.com/package/lodash) & [per method packages](https://lodash.com/per-method-packages)
- [lodash-es](https://www.npmjs.com/package/lodash-es), [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash), & [lodash-webpack-plugin](https://www.npmjs.com/package/lodash-webpack-plugin)
- [lodash/fp](https://github.com/lodash/lodash/tree/4.17.15-npm/fp)
- [lodash-amd](https://www.npmjs.com/package/lodash-amd)

## 补充工具

- [futil-js](https://github.com/smartprocure/futil-js) 是一套用来补足 lodash 的实用工具集。

## 扩展阅读

- [贡献](https://github.com/lodash/lodash/blob/master/.github/CONTRIBUTING.md)
- [版本说明](https://github.com/lodash/lodash/releases/tag/4.0.0)
- [Wiki（更新记录、路线图等）](https://github.com/lodash/lodash/wiki)

## 兼容性

在 Chrome 74-75、Firefox 66-67、IE 11、Edge 18、Safari 11-12 和 Node.js 8-12 环境中测试通过。
