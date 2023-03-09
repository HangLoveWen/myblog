---
title: react学习
date: 2023-2-7
---
# React框架的介绍

## 一、React的起源和发展

React起源于Facebook的内部项目，因为该公司对当时市场上的所有javascript MVC 框架都不满意，所以就决定自己搞一套框架，当时的初心是用来架构自己公司的Instagram(图片分享)。搞出来之后，感觉这套东西还不错，在2013年5月很快就开源了。

## 二、React的出发点

基于HTML的前端界面开发正变得越来越复杂，其本质问题基本都可以归结于如何将来自于服务器端或者用户输入的动态数据高效的反映到复杂的用户界面上。而来自Fackbook的React框架正是完全面向此问题的一个解决方案，按官网描述，其出发点为：用于开发数据不断变化的大型应用程序(Building large applications with data that changes over time)。相比传统型的前端开发,React开辟了一个相当于相当另类的途径，实现了前端界面的高性能高效率开发。

## 三、Recat与传统MVC的关系

轻量级的 ***视图层库*** ！ A JavaScript library for building user interfaces

React不是一个完整的MVC框架，最多可以认为是MVC中的（view）层，甚至React并不非常认可MVC开发模式；React构建页面UI的库。可以简单地理解为，React将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套、就成了我们的页面

## 四、React高性能的体现：虚拟DOM

原理：在我们的开发过程中，我们需要将变化莫测的数据实时的反映到UI上，这时就需要对DOM进行操作。但频繁或复杂的操控DOM会产生许多性能上的问题。————如何进行高性能的复杂DOM操作通常是衡量一个前端开发人员技术的重要指标。

React为此引入了虚拟DOM(virtual DOM)的机制：在浏览器端用javascript实现了一套DOM API。基于React进行开发时所有的DOM构造都是通过虚拟DOM进行，每当数据变化时，React都会重新渲染整个DOM树，然后React将当前整个DOM树和上一次的DOM树进行对比，得到DOM结构的的区别，然后仅仅需要变化的部分进行实际的浏览器DOM更新。而且React能够批量处理虚拟DOM的刷新，在一个事件循环（Event loop）内的两次数据变化被合并，例如你连续的先将节点内容从A-B,B-A，React会认为A变成B，然后又从B变成A UI不发生任何变化，而如果通过手动控制，这种逻辑通常是极其复杂的

**React Fiber：**

在React16之后发布的一种react核心算法，React Fiber是对核心算法的一次重新实现(官网说法)。之前用的是diff算法

在之前的React中，更新过程是同步的，这可能会导致性能问题。

当React决定要加载或者更新组件树时，会做很多事，比如调用各个组件的生命周期函数，计算和比对Virtual DOM，最后更新DOM树，这整个过程是同步进行的，也就是说只要一个加载或者更新过程开始，中途不会中断。因为javascript单线程的特点，如果组件树很大的时候，每个同步任务耗时太长，就会出现卡顿。

React Fiber的方法其实很简单——分片。把一个耗时长的任务分成很多小片，每一个小片的运作时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会。

## React的特点和优势

**1、虚拟DOM**

我们之前操作DOM的方式是通过document.getElementById()的方式，这样的过程实际上是先去读取html的dom结构，将结构转换成变量，而进行操作

而reactjs定义了一套变量形式的dom模型，一切操作和换算直接在变量中，这样减少了操作真实dom，性能真实相当的高，和主流MVC框架有什么本质区别，并不和dom打交道

**2、组件系统**

react最核心的思想是将页面中任何一个区域或者元素都可以看做一个组件component

那什么是组件呢？

组件指的就是同时包含了html、css、js、image元素的聚合体

**3、单向数据流**

其实reactjs的核心内容就是数据绑定，所谓数据绑定指的是只要将一些服务端的数据和前端页面绑定好，开发者只关注实现业务就行了

**4、JSX语法**

在vue中，我们使用render函数来构建组件的dom构造性能较高，因为省去了查找和编译模板的过程，但是在render中利用createElement创建结构的时候代码可读性较低，较为负载，此时可以利用JSX语法来在render中创建dom，解决了这个问题，但是前提是需要使用工具编译jsx