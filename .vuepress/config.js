module.exports = {
  title: "blog",
  description: "",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [{
      text: "首页",
      link: "/",
      icon: "reco-home",
    },
    {
      text: "Docs",
      icon: "reco-message",
      items: [{
        text: "lodash",
        link: "/docs/lodash/",
      },
      {
        text: "G2",
        link: "/docs/G2/",
      },
      {
        text: "vue2",
        link: "/docs/vue2/",
      },
      {
        text: "vue3",
        link: "/docs/vue3/",
      },
      {
        text: "小满vue3",
        link: "/docs/xmvue3/",
      },
      {
        text: "react",
        link: "/docs/react/",
      },
      {
        text: "typescript",
        link: "/docs/typescript/",
      },
      {
        text: "Regex",
        link: "/docs/Regex/",
      },
      {
        text: "Vue-router",
        link: "/docs/Vue-router/",
      },
      {
        text: "Internet",
        link: "/docs/Internet/",
      },
      {
        text: "Weixin",
        link: "/docs/weixin/",
      },
      {
        text: "Data Structure",
        link: "/docs/data structure/",
      },
      {
        text: "NodeJS",
        link: "/docs/nodejs/",
      },
      ],
    },
    {
      text: "TimeLine",
      link: "/timeline/",
      icon: "reco-date",
    },
    {
      text: "分享",
      icon: "reco-message",
      items: [{
        text: "GitHub",
        link: "https://github.com/HangLoveWen",
        icon: "reco-github",
      },
      {
        text: "BiliBili",
        link: "https://space.bilibili.com/478356471",
        icon: "reco-bilibili",
      },
      ],
    },
    ],
    sidebar: {
      "/docs/lodash/": [
        "",
        {
          title: "数组", //组名
          children: [
            "array/_.chunk",
            "array/_.compact",
            "array/_.concat",
            "array/_.difference",
            "array/_.differenceBy",
            "array/_.differenceWith",
            "array/_.drop",
            "array/_.dropRight",
            "array/_.dropWhile",
            "array/_.dropRightWhile",
            "array/_.fill",
            "array/_.findIndex",
            "array/_.findLastIndex",
            "array/_.first",
            "array/_.indexOf",
            "array/_.initial",
            "array/_.intersection",
            "array/_.intersectionBy",
            "array/_.intersectionWith",
            "array/_.join",
            "array/_.last",
            "array/_.lastIndexOf",
            "array/_.nth",
            "array/_.pull",
            "array/_.pullAll",
            "array/_.pullAllBy",
            "array/_.pullAllWith",
            "array/_.pullAt",
            "array/_.remove",
            "array/_.reverse",
            "array/_.slice",
            "array/_.sortedIndex",
            "array/_.sortedIndexBy",
            "array/_.sortedIndexOf",
            "array/_.sortedLastIndex",
            "array/_.sortedLastIndexBy",
            "array/_.sortedLastIndexOf",
            "array/_.sortedUniq",
            "array/_.sortedUniqBy",

          ], //该分组下要显示的文件的目录
        },
      ],
      "/docs/vue2/": [
        "",
        {
          title: "学习vue2", //组名
          children: ["studyvue2/vue2学习"], //该分组下要显示的文件的目录
        },
      ],
      "/docs/vue3/": [
        "",
        {
          title: "学习vue3", //组名
          children: [
            "study/CompositionAPI",
            "study/othercompositionApi",
            "study/composition",
            "study/newzujian",
          ], //该分组下要显示的文件的目录
        },
        {
          title: "其他", //组名
          children: ["study/other"],
        },
        {
          title: "其他项目", //组名
          children: ["study/menu", "study/vue-elemet-plus-carousel"],
        },
      ],
      "/docs/xmvue3/": [
        "",
        {
          title: "学习张满月大佬的vue3", //组名
          children: [

          ], //该分组下要显示的文件的目录
        },
      ],
      "/docs/react/": [
        "",
        {
          title: "react学习", //组名
          children: [

          ], //该分组下要显示的文件的目录
        },
      ],
      "/docs/typescript/": [
        "",
        {
          title: "TS学习",
          children: [
            "study/1.1ts基础类型",
            "study/1.2ts任意类型",
            "study/1.3ts接口和对象类型",
            "study/1.4ts数组类型",
            "study/1.5函数扩展",
            "study/1.6类型断言、联合类型、交叉类型",
            "study/1.7内置对象",
            "study/1.8Class类",
            "study/1.9元组类型",
            "study/1.10枚举类型",
            "study/1.11类型推论、类型别名",
            "study/1.12never类型",
            "study/1.13泛型",
            "study/1.14symbol类型",
            "study/1.15tsconfig.json配置文件",
            "study/1.16namespace命名空间",
            "study/1.17三斜线指令",
            "study/1.18声明文件d.ts",
            "study/1.19Mixins混入",
            "study/1.20装饰器Decorator",
            "study/1.21Rollup构建TS项目 & webpack构建TS项目",
            "study/1.22Rollup构建TS项目 & webpack构建TS项目",
            "study/1.23TS进阶用法proxy&Reflect",
            "study/1.24TS进阶用法Partial & Pick",
            "study/1.25TS进阶用法Record&Readonly",
            "study/1.26TS进阶用法infer",
            "study/1.27infer类型提取",
            "study/1.28infer递归",
            "study/1.29typescript封装LocalStorage并支持过期时间",
            "study/1.30object、Object 以及{}",
          ],
        }
      ],
      "/docs/G2/": [
        "",
        {
          title: "G2学习", //组名
          children: ["图表/折线图", "图表/环形图"], //该分组下要显示的文件的目录
        },
      ],
      "/docs/Regex/": [
        "",
        {
          title: "Regex学习", //组名
          children: ["studyRegex/Useful"], //该分组下要显示的文件的目录
        },
      ],
      "/docs/Vue-router/": [""],
      "/docs/Internet/": [
        "",
        {
          title: "计算机网络学习",
          children: [
            "study/1.1.1概念、功能、组成和分类",
            "study/1.1.2标准化工作及相关组织",
            "study/1.1.3速率相关的性能指标",
            "study/1.1.4时延、时延带宽积、RTT和利用率",
            "study/1.2.1分层结构、协议、接口、服务",
            "study/1.2.2参考模型1",
            "study/1.2.3参考模型2",
            "study/IP参考模型",
          ], //组名
        },
      ],
      "/docs/weixin/": [
        "",
        {
          title: "小程序学习",
          children: [
            "study/小程序开发",
            "study/小程序的宿主环境-API"
          ]
        },
        {
          title: '协同工作和发布',
          children: [
            "协同工作与发布/1.1协同工作和发布-协同工作",
            "协同工作与发布/1.2协同工作和发布-小程序成员管理",
            "协同工作与发布/1.3协同工作和发布-小程序的版本",
            "协同工作与发布/1.4协同工作和发布-发布上线",
            "协同工作与发布/1.5协同工作和发布-运营数据"
          ]
        },
        {
          title: 'WXML模板语法',
          children: [
            "WXML模板语法/2.1WXML模板语法-数据绑定",
            "WXML模板语法/2.2WXML模板语法-事件绑定",
            "WXML模板语法/2.3WXML模板语法-条件渲染",
            "WXML模板语法/2.4WXML模板语法-列表渲染"
          ]
        },
        {
          title: 'WXML模板样式',
          children: [
            "WXML模板样式/3.1WXSS模板样式",
            "WXML模板样式/3.2WXSS模板样式-rpx",
            "WXML模板样式/3.3WXSS模板样式-样式导入",
            "WXML模板样式/3.4WXSS模板样式-全局样式和局部样式"
          ]
        },
        {
          title: '全局配置',
          children: [
            "全局配置/4.1全局配置-常用的全局配置项及小程序窗口组成部分",
            "全局配置/4.2全局配置-window",
            "全局配置/4.3全局配置-tabBar",
            "全局配置/4.4局部配置-小程序的页面配置"
          ]
        },
        {
          title: '发起网络请求',
          children: [
            "发起网络请求/5.1发起网络数据请求"
          ]
        }
      ],
      "docs/data structures": [
        "",
        {
          title: "数据结构学习",
          children: [
          ]
        }
      ],
      "/docs/nodejs/": [
        "",
        {
          title: "Nodejs学习", //组名
          children: [
            '初识Node.js/1.1初识Node.js-浏览器中的JavaScript运行环境',
            '初识Node.js/1.2初识Node.js-什么是Node.js',
            '初识Node.js/1.3初识Node.js-在Node.js环境中执行JavaScript代码'
          ], //该分组下要显示的文件的目录
        },
        {
          title: "fs文件系统模块", //组名
          children: [
            'fs文件系统模块/2.1fs文件系统模块-读取文件内容',
            'fs文件系统模块/2.2fs文件系统模块-写入文件内容',
            'fs文件系统模块/2.3fs文件系统模块-整理成绩案例',
            'fs文件系统模块/2.4fs文件系统模块-处理文件路径问题'
          ], //该分组下要显示的文件的目录
        },
        {
          title: "path路径模块", //组名
          children: [
            '3.1path路径模块',
          ], //该分组下要显示的文件的目录
        },
        {
          title: "http模块", //组名
          children: [
            'http模块/4.1http模块',
            'http模块/4.2http模块-根据不同的url响应不同的html内容',
            'http模块/4.3http模块-在自己的服务器上放置内容',
          ], //该分组下要显示的文件的目录
        },
        {
          title: "Nodejs中模块化", //组名
          children: [
            'Nodejs中模块化/5.1Node.js中模块的分类',
            'Nodejs中模块化/5.2Node.js中模块化-模块化作用域',
            'Nodejs中模块化/5.3Node.js中模块化-向外共享模块化作用域中的成员',
          ], //该分组下要显示的文件的目录
        },
        {
          title: "包", //组名
          children: [
            '包/6.1什么是包',
            '包/6.2格式化时间的传统做法',
            '包/6.3包管理配置文件',
            '包/6.4解决下包速度慢的问题',
            '包/6.5包的分类',
            '包/6.6开发属于自己的包',
            '包/6.7发布包',
            '包/6.8模块的加载机制-优先从缓存中加载',
          ], //该分组下要显示的文件的目录
        },
        {
          title: "express", //组名
          children: [
            'express/7.1什么是express',
            'express/7.2express-安装',
            'express/7.3express-托管静态资源',
            'express/7.4nodemon',
          ], //该分组下要显示的文件的目录
        },
        {
          title: "Express路由", //组名
          children: [
            'Express路由/8.1Express路由-什么是路由',
            'Express路由/8.2Express路由-路由的使用',
            'Express路由/8.3Express路由-什么是中间件',
            'Express路由/8.4Express路由-使用中间件',
            'Express路由/8.5Express路由-中间件的分类'
          ], //该分组下要显示的文件的目录
        },
        {
          title: "使用express写接口", //组名
          children: [
            '使用express写接口/9.1使用EXPress写接口-JSONP接口',
          ], //该分组下要显示的文件的目录
        },
        {
          title: "数据库", //组名
          children: [
            '数据库/10.1数据库的基本概念-什么是数据库',
            '数据库/10.2数据库的基本概念-传统型数据库的数据组织结构',
          ], //该分组下要显示的文件的目录
        },
        {
          title: "MySql的使用", //组名
          children: [
            'MySql的使用/11.1安装并配置MySQL',
            'MySql的使用/11.2使用MySQLWorkbenc管理数据库',
            'MySql的使用/11.3使用SQL管理数据库',
            'MySql的使用/11.4SQL的SELECT语句',
            'MySql的使用/11.5SQL的INSERTINTO语句',
            'MySql的使用/11.6SQL的UPDATE语句',
            'MySql的使用/11.7SQL的DELETE语句',
            'MySql的使用/11.8SQL的WHERE语句',
            'MySql的使用/11.9SQL的AND和OR运算符',
            'MySql的使用/11.10SQL的ORDERBY字句',
            'MySql的使用/11.11SQL的COUNT函数',
          ], //该分组下要显示的文件的目录
        },
        {
          title: "操作数据库", //组名
          children: [
            '操作数据库/12.1使用mysql模块中操作数据库',
            '操作数据库/12.2在项目中操作数据库',
          ], //该分组下要显示的文件的目录
        },
        {
          title: "前后端身份认证", //组名
          children: [
            '前后端身份认证/13.1前后端的身份认证',
            '前后端身份认证/13.2身份认证',
            '前后端身份认证/13.3Session认证',
            '前后端身份认证/13.4在express中使用Session认证',
            '前后端身份认证/13.5JWT认证机制',
            '前后端身份认证/13.6在Express中使用JWT'
          ], //该分组下要显示的文件的目录
        },
      ]
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [{
      title: "午后南杂",
      desc: "Enjoy when you can, and endure when you must.",
      email: "3099686582@qq.com",
      link: "https://www.recoluan.com",
    },
    {
      title: "掘金分享",
      desc: "A simple article to share.",
      avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: "https://juejin.cn/",
    },
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "马行",
    authorAvatar: "/avatar.png",
    record: "blog",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
};