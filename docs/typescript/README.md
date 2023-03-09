---
title: typescript学习
date: 2023-1-22
---
## TypeScript 概述

JavaScript是作为客户端的语言引入的。 Node.js的发展标志着JavaScript作为一种新兴的服务器端技术。然而，随着JavaScript代码的增长，它往往会变得更加混乱，从而难以保持和重用代码。此外，它没有采用Object Orientation（面向对象），强类型检查和编译时错误检查的功能，这使得JavaScript无法在企业级成功实现为一种成熟的服务器端技术。 **TypeScript**的出现弥补了这一差距。

## 什么是TypeScript？

根据定义，“TypeScript是用于应用程序规模开发的JavaScript。”

TypeScript是强类型，面向对象的编译语言。它是由微软的 **Anders Hejlsberg** （C＃的设计者）设计的。TypeScript既是一种语言又是一组工具。TypeScript是编译为JavaScript的JavaScript的类型超集。换句话说，TypeScript是JavaScript加上一些额外的功能。

![TypeScript图](https://atts.w3cschool.cn/attachments/tuploads/typescript/typescript_figure.jpg)

## TypeScript的特点

 **TypeScript仅仅是JavaScript** 。TypeScript以JavaScript开始，并以JavaScript结束。Typescript从JavaScript中采用程序的基本构建块。因此，你只需要知道JavaScript即可使用TypeScript。所有TypeScript代码都转换为它的JavaScript等效代码。

 **TypeScript支持其他JS库** 。可以从任何JavaScript代码中使用编译的TypeScript。TypeScript生成的JavaScript可以复用所有现有的JavaScript框架，工具和库。

 **JavaScript是TypeScript** 。这意味着，任何有效的.js**文件可以被重新命名为**.ts并使用其他TypeScript编译器进行编译。

 **TypeScript是可移植的** 。TypeScript可跨浏览器，设备和操作系统的移植。它可以在运行JavaScript的任何环境中运行。与它的对应程序不同，TypeScript不需要专用的VM（虚拟机）或特定运行时环境来执行。

### TypeScript和ECMAScript

ECMAScript规范是脚本语言的标准化规范。已发布六个版本的ECMA-262。该标准的第6版代号为“Harmony”。TypeScript与ECMAScript6规范一致。

![TypeScript和ECMAScript](https://atts.w3cschool.cn/attachments/tuploads/typescript/typescript_and_ecmascript.jpg)

TypeScript采用ECMAScript5规范的基本语言功能，即JavaScript的官方规范。TypeScript的语言功能，如Modules（模块）和基于类的取向符合ECMAScript 6规范。此外，TypeScript还包含泛型和类型注释等功能，这些功能不属于EcmaScript6规范的一部分。

## 为什么要使用TypeScript？

TypeScript以扩展JavaScript的方式优于其他类似CoffeeScript和Dart的编程语言。相比之下，像Dart和CoffeeScript这样的语言本身就是新语言，需要特定于语言的执行环境。

TypeScript的好处包括：

* **编译** - JavaScript是一种解释语言。因此，需要运行它来测试它是否有效。这意味着您编写所有代码时修需要一遍遍运行来测试输出，以防出现错误。因此，你必须花时间来尝试找到代码中的错误。TypeScript转换器提供错误检查功能。 如果发现某种语法错误，TypeScript将编译代码并生成编译错误。这有助于在脚本运行之前突出显示错误。
* **强静态类型** - JavaScript不是强类型。TypeScript通过TLS（TypeScript Language Service，TypeScript语言服务）提供可选的静态类型和类型推论系统。TLS基于其值可以推论出没有类型声明的变量的类型。
* TypeScript**支持**现有JavaScript库的 **类型定义** 。TypeScript定义文件（扩展名为 **.d.ts）** 提供外部JavaScript库的定义。因此，TypeScript代码可以包含这些库。
* TypeScript **支持Object Oriented Programming  （**面向对象编程** ）的概念，如类，接口，继承等。

## TypeScript的组成部分

从本质上讲，TypeScript有以下三个组成部分：

* **语言** - 它包括语法，关键字和类型注释。
* **TypeScript编译器** - TypeScript编译器（TSC）将使用TypeScript编写的指令转换为其等效的JavaScript。
* **TypeScript语言服务** - “语言服务”在核心编译管道周围公开了一个额外的层，它是类似编辑器的应用程序。语言服务支持常见的编辑器操作集，如语句完成，签名帮助，代码格式化和大纲，着色等。

![TypeScript组件](https://atts.w3cschool.cn/attachments/tuploads/typescript/typescript_components.jpg)

声明文件

当编译一个TypeScript脚本时，可以选择生成一个**声明文件** （扩展名为 **.d.ts）,** 该文件可用作编译JavaScript中组件的接口。声明文件的概念类似于C / C ++中头文件的概念。声明文件（扩展名为.d.ts的文件）为支持JavaScript库（如jQuery，MooTools等）的类型，函数调用和变量提供了智能感知。
