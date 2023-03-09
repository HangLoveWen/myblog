---
title: Carousel 走马灯
date: 2022-11-17
---

### 官网简介

### Carousel 走马灯[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#carousel-%E8%B5%B0%E9%A9%AC%E7%81%AF)

在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)

## 指示器[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#%E6%8C%87%E7%A4%BA%E5%99%A8)

可以将指示器的显示位置设置在容器外部

## 切换箭头[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#%E5%88%87%E6%8D%A2%E7%AE%AD%E5%A4%B4)

可以设置切换箭头的显示时机

## 卡片化[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#%E5%8D%A1%E7%89%87%E5%8C%96)

当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格

## 垂直布局[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#%E5%9E%82%E7%9B%B4%E5%B8%83%E5%B1%80)

默认情况下，`direction` 为 `horizontal`。 通过设置 `direction` 为 `vertical` 来让走马灯在垂直方向上显示。

## Carousel 属性[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#carousel-%E5%B1%9E%E6%80%A7)

| 属性名             | 说明                                  | 类型    | 可选值              | 默认值     |
| ------------------ | ------------------------------------- | ------- | ------------------- | ---------- |
| height             | carousel 的高度                       | string  | —                   | —          |
| initial-index      | 初始状态激活的幻灯片的索引，从 0 开始 | number  | —                   | 0          |
| trigger            | 指示器的触发方式                      | string  | hover/click         | hover      |
| autoplay           | 是否自动切换                          | boolean | —                   | true       |
| interval           | 自动切换的时间间隔，单位为毫秒        | number  | —                   | 3000       |
| indicator-position | 指示器的位置                          | string  | outside/none        | —          |
| arrow              | 切换箭头的显示时机                    | string  | always/hover/never  | hover      |
| type               | carousel 的类型                       | string  | card                | —          |
| loop               | 是否循环显示                          | boolean | -                   | true       |
| direction          | 展示的方向                            | string  | horizontal/vertical | horizontal |
| pause-on-hover     | 鼠标悬浮时暂停自动切换                | boolean | -                   | true       |

## Carousel 事件[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#carousel-%E4%BA%8B%E4%BB%B6)

| 事件名 | 说明             | 回调参数                               |
| ------ | ---------------- | -------------------------------------- |
| change | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |

## Carousel 方法[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#carousel-%E6%96%B9%E6%B3%95)

| 方法名        | 说明               | 参数                                                                        |
| ------------- | ------------------ | --------------------------------------------------------------------------- |
| setActiveItem | 手动切换幻灯片     | 需要切换的幻灯片的索引，从 0 开始；或相应 `el-carousel-item`的 `name`属性值 |
| prev          | 切换至上一张幻灯片 | —                                                                           |
| next          | 切换至下一张幻灯片 | —                                                                           |

## Carousel 插槽[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#carousel-%E6%8F%92%E6%A7%BD)

| 插槽名 | 说明           | 子标签        |
| ------ | -------------- | ------------- |
| -      | 自定义默认内容 | Carousel-Item |

## Carousel-Item 属性[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#carousel-item-%E5%B1%9E%E6%80%A7)

| 属性名 | 说明                                       | 类型   | 可选值 | 默认值 |
| ------ | ------------------------------------------ | ------ | ------ | ------ |
| name   | 幻灯片的名字，可用作 `setActiveItem`的参数 | string | —      | —      |
| label  | 该幻灯片所对应指示器的文本                 | string | —      | —      |

## Carousel-Item 插槽[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#carousel-item-%E6%8F%92%E6%A7%BD)

| 插槽名 | 说明           |
| ------ | -------------- |
| —      | 自定义默认内容 |

## 安装

## 使用包管理器[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#%E4%BD%BF%E7%94%A8%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8)

**我们建议您使用包管理器（如 NPM、[Yarn](https://classic.yarnpkg.com/lang/en/) 或 [pnpm](https://pnpm.io/)）安装 Element Plus** ，然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev/) 或 [webpack](https://webpack.js.org/)。

```
# 选择一个你喜欢的包管理器

# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
```

如果您的网络环境不好，建议使用相关镜像服务 [cnpm](https://github.com/cnpm/cnpm) 或 [中国 NPM 镜像](https://registry.npmmirror.com/)。

## 浏览器直接引入[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B4%E6%8E%A5%E5%BC%95%E5%85%A5)

直接通过浏览器的 HTML 标签导入 Element Plus，然后就可以使用全局变量 `ElementPlus` 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com/) 和 [jsDelivr](https://jsdelivr.com/) 举例。 你也可以使用其它的 CDN 供应商。

### unpkg[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#unpkg)

```
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

### jsDelivr[#](https://element-plus.gitee.io/zh-CN/guide/installation.html#jsdelivr)

```
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

TIP

我们建议使用 CDN 引入 Element Plus 的用户在链接地址上锁定版本，以免将来 ElementPlus 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。

### 组件引入

### 完整引入[#](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5)

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

#### Volar 支持[#](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#volar-%E6%94%AF%E6%8C%81)

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```

### 按需导入[#](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)

您需要使用额外的插件来导入要使用的组件。

#### 自动导入**推荐**[#](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E8%87%AA%E5%8A%A8%E5%AF%BC%E5%85%A5-%E6%8E%A8%E8%8D%90)

首先你需要安装 `unplugin-vue-components` 和 `unplugin-auto-import`这两款插件

```
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的 `Vite` 或 `Webpack` 的配置文件中

##### Vite[#](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#vite)

```
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

##### Webpack[#](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#webpack)

```
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

想了解更多打包 ([Rollup](https://rollupjs.org/), [Vue CLI](https://cli.vuejs.org/)) 和配置工具，请参考 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install)。

### 手动导入[#](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%89%8B%E5%8A%A8%E5%AF%BC%E5%85%A5)

Element Plus 提供了基于 ES Module 开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。

但是你需要安装 [unplugin-element-plus](https://github.com/element-plus/unplugin-element-plus) 来导入样式。 请参考 [文档](https://github.com/element-plus/unplugin-element-plus#readme) 了解如何配置它。

> App.vue

```
<template>
  <el-button>I am ElButton</el-button>
</template>
<script>
  import { ElButton } from 'element-plus'
  export default {
    components: { ElButton },
  }
</script>
```

```
// vite.config.ts
import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  // ...
  plugins: [ElementPlus()],
})
```

WARNING

如果您使用 `unplugin-element-plus` 并且只使用组件 API，您需要手动导入样式。

示例︰

```
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
```

## 快捷搭建项目模板[#](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E5%BF%AB%E6%8D%B7%E6%90%AD%E5%BB%BA%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF)

我们提供了 [Vite 模板](https://github.com/element-plus/element-plus-vite-starter)。 对于 Laravel 用户，我们也准备了相应的[模板](https://github.com/element-plus/element-plus-in-laravel-starter)，同样可以直接下载使用。

## 全局配置[#](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

在引入 Element Plus 时，可以传入一个包含 `size` 和 `zIndex` 属性的全局配置对象。 `size` 用于设置表单组件的默认尺寸，`zIndex` 用于设置弹出组件的层级，`zIndex` 的默认值为 2000。

完整引入：

```
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
```

按需引入：

```
<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <app />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>
```

### 个人项目代码

#### Everysystem.vue

```
Everysystem.vue
<template>
  <div class="home">
    <p>各系统接入表数量</p>
    <div class="menu">
      <el-carousel
        background-color="#f5f7fd"
        indicator-position="none"
        :interval="5000"
        arrow="always"
        height="540px"
      >
        <el-carousel-item v-for="item in 4" :key="item.id">
          <ul>
            <li v-for="item in 5"><SystemVue></SystemVue></li>
            <li v-for="item in 5"><SystemVue></SystemVue></li>
            <li v-for="item in 5"><SystemVue></SystemVue></li>
          </ul>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import SystemVue from "./System.vue";
import { reactive } from "vue";

export default {
  name: "Everysystem",
  components: { SystemVue },
  setup() {
    let list = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    return {
      list,
    };
  },
};
</script>
<style scoped lang="less">
.home {
  position: relative;
  padding: 0;
  margin: 0;
  background-color: #fdffff;
  border: 1px, solid red;
  padding-left: 40px;
}
p {
  font-size: 20px;
  margin: 15px 0px;
  font-weight: bold;
}
.menu {
  width: 100%;
  height: auto;
  background-color: #f5f7fd;
}
ul li {
  list-style-type: none;
  text-decoration: none;
  text-align: center;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #f5f7fd;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #f5f7fd;
}
/deep/ .el-carousel__arrow {
  font-size: 20px;
  width: 40px;
  height: 40px;
  background-color: #dfe1e3;
  margin-left: -10px;
  border-radius: 0;
}
/deep/ .el-carousel__arrow :hover {
  background-color: #3467c9;
}
</style>

```

#### System.vue

```
System.vue
<template>
  <div class="system">
    <div class="box">LP</div>
    <div class="content">
      <p class="big">40</p>
      <p class="small">Leads Pipeline</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "System",
};
</script>

<style scoped>
.system {
  width: 210px;
  height: 150px;
  background-color: #fdffff;
  float: left;
  margin: 10px 14px 10px 20px;
}
.box {
  width: 60px;
  height: 60px;
  margin-left: 20px;
  background-color: #3668cd;
  text-align: center;
  line-height: 60px;
  border-radius: 50%;
  color: #c7d9fc;
  font-size: 14px;
  float: left;
  margin-top: 40px;
}
.content {
  position: relative;
  float: left;
}
.big {
  position: absolute;
  font-size: 20px;
  margin: 40px 0 27px 13px;
}
.small {
  position: absolute;
  font-size: 10px;
  color: #78787a;
  margin-top: 80px;
  margin-left: 13px;
  white-space: nowrap;
}
</style>

```

#### app.vue

```
app.vue
<template>
  <EverysystemVue />
</template>
<script>
import EverysystemVue from "./components/Everysystem.vue";
export default {
  name: "App",
  components: { EverysystemVue },
};
</script>
<style></style>
```

#### 效果展示

[![project2.png](https://i.postimg.cc/htXrQZ3y/project2.png)](https://postimg.cc/sMRStmz7)
