---
title: Vue3学习
date: 2022-11-09
---

## Vue3 快速上手

<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px" />

## 1.Vue3 简介

- 2020 年 9 月 18 日，Vue.js 发布 3.0 版本，代号：One Piece（海贼王）
- 耗时 2 年多、[2600+次提交](https://github.com/vuejs/vue-next/graphs/commit-activity)、[30+个 RFC](https://github.com/vuejs/rfcs/tree/master/active-rfcs)、[600+次 PR](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+)、[99 位贡献者](https://github.com/vuejs/vue-next/graphs/contributors)
- github 上的 tags 地址：https://github.com/vuejs/vue-next/releases/tag/v3.0.0

## 2.Vue3 带来了什么

### 1.性能的提升

- 打包大小减少 41%
- 初次渲染快 55%, 更新渲染快 133%
- 内存减少 54%

  ......

### 2.源码的升级

- 使用 Proxy 代替 defineProperty 实现响应式
- 重写虚拟 DOM 的实现和 Tree-Shaking

  ......

### 3.拥抱 TypeScript

- Vue3 可以更好的支持 TypeScript

### 4.新的特性

1. Composition API（组合 API）

   - setup 配置
   - ref 与 reactive
   - watch 与 watchEffect
   - provide 与 inject
   - ......

2. 新的内置组件

   - Fragment
   - Teleport
   - Suspense

3. 其他改变

   - 新的生命周期钩子
   - data 选项应始终被声明为一个函数
   - 移除 keyCode 支持作为 v-on 的修饰符
   - ......

# 创建 Vue3.0 工程

## 1.使用 vue-cli 创建

官方文档：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

```bash
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
## 启动
cd vue_test
npm run serve
```

## 2.使用 vite 创建

官方文档：https://v3.cn.vuejs.org/guide/installation.html#vite

vite 官网：https://vitejs.cn

- 什么是 vite？—— 新一代前端构建工具。
- 优势如下：
  - 开发环境中，无需打包操作，可快速的冷启动。
  - 轻量快速的热重载（HMR）。
  - 真正的按需编译，不再等待整个应用编译完成。
- 传统构建 与 vite 构建对比图

img src="https://cn.vitejs.dev/assets/bundler.37740380.png" style="width:500px;height:280px;float:left" />`<img src="https://cn.vitejs.dev/assets/esm.3070012d.png" style="width:480px;height:280px" />`

```bash
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```
