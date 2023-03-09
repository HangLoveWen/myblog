---
title: 小程序的宿主环境
date: 2023-1-3
---
小程序 APi 的 3 大分类

小程序官方把 API 分为了如下 3 大类：

1.事件监听 API

  1.1 特点：以 on 开头，用来监听某些事件的触发

  1.2 举例：wx.onWindowResize(function callback)监听窗口尺寸变化的事件 

2.同步 API

  2.1 特点 1：以 Sync 结尾的 API 都是同步 API

  2.2 特点 2：同步 API 的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常

  2.3 举例：wx.setStorageSync('key','value')向本地存储中写入内容 3.异步 API

3.异步 API

  3.1 特点：类似于 JQuery 中的$.ajax(options)函数，需要通过 success、fail、complete 接收调用的结果

  3.2 举例：wx.request()发起网络请求，通过 success 回调函数接收数据
