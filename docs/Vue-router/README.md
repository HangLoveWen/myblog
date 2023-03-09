---
title: Vue-RouterAPI学习
date: 2022-11-21
---

## vue-router

个人理解：Vue 中的路由相当于 pc 里面的[锚点](https://so.csdn.net/so/search?q=%E9%94%9A%E7%82%B9&spm=1001.2101.3001.7020)超链接，如果点击了页面转向哪，也有点像 ajax。

## 安装

`npm install vue-router`

## 开始

用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染他们。
组件 → 路由 → 渲染地方

```
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>12345678910111213
```

```
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！12345678910111213141516171819202122232425262728293031
```

## 动态路由匹配

我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用动态路径参数来达到这个效果。

```
const User = {
  template: '<div>User</div>'
}
const router = new VueRouter({
    routes: [
        {path: '/user/:id', component: User}
    ]
})12345678
```

路径参数用：表示。
一个路由中可以设置多段路径参数，对应的值都会设置到**r**o**u**t**e**.**p**a**r**a**m**s。除了 route.params。除了 route.params 外，**r**o**u**t**e**对象还提供了其它有用的信息，例如 route 对象还提供了其它有用的信息，例如 route.query，**r**o**u**t**e**.**h**a**s**h 等。当使用路由参数时，组件实例会被复用，这就意味着组件的生命周期钩子不会再被调用。如果想对路由参数的变化作出响应，可以简单地**w**a**t**c**h**route.hash 等。当使用路由参数时，组件实例会被复用，这就意味着组件的生命周期钩子不会再被调用。如果想对路由参数的变化作出响应，可以简单地 watchroute 对象。

```
const User = {
    template: '...',
    watch: {
        '$route' (to, from) {

        }
    }
}12345678
```

## 嵌套路由

组件模板中有可能有自己的出口，要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置：

```
const router = new VueRouter({
    router: [
        {path: '/user/:id', component: User,
            children: [
                {
                    path: 'profile',
                    component: UserProfile
                },
                {
                    path: 'posts',
                    component: UserPosts
                }
            ]
        }
    ]
})12345678910111213141516
```

**要注意，以/开头的嵌套路径会被当作根路径。这让你充分的使用嵌套组件而无须设置嵌套的路径。**

## 编程式的导航

除了使用创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。
**router.push()**
这种方法会向 history 栈中添加记录
router.push() ==

```
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})1234567891011
```

**router.replace(location)**
router.replace(location) ==
**router.go(n)**
这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)

## 命名路由

主要是为了通过一个名称来标识一个路由显得更方便一些。

```
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})123456789
```

## 命名视图

有时想同时展示多个视图。

```
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})123456789101112131415
```

## 重定向和别名

```
const router = new VueRouter({
    routes: [
        {path: '/a', redirect: '/b'}
    ]
})12345
```

重定向的目标也可以是一个命名的路由：

```
const router = new VueRouter({
    routes: [
        {path: '/a', redirect: {name: 'foo'}}
    ]
})12345
```

甚至是一个方法

```
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
    }}
  ]
})12345678
```

## 别名

**/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。**

```
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})12345
```

## HTML5 History 模式

使用 history 模式时，URL 就是正常的 url。

```
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})1234
```

## 导航钩子

正如其名，vue-router 提供的导航钩子主要用来拦截导航，让它完成跳转或取消。有多种方式可以在路由导航发生时执行钩子： 全局的，单个路由独享的，或者组件级的。
**全局钩子**

```
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
每个钩子方法接收三个参数：

    to: Route: 即将要进入的目标 路由对象

    from: Route: 当前导航正要离开的路由

    next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

        next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。

        next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。

        next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

确保要调用 next 方法，否则钩子就不会被 resolved。1234567891011121314151617181920
```

**某个路由独享的钩子**

```
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})1234567891011
```

**组件内的钩子**

```
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是改组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}123456789101112131415161718
```

**路由元信息**
定义路由的时候可以配置 meta 字段

```
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})12345678910111213141516
```

我们称呼 routes 配置中的每个路由对象为路由记录。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录。
例如，根据上面的路由配置，/foo/bar 这个 URL 将会匹配路由记录以及子路由记录。
一个路由匹配到的所有路由记录会暴露为**r**o**u**t**e**对象（还有在导航钩子中的**r**o**u**t**e**对象）的 route 对象（还有在导航钩子中的 route 对象）的 route.matched 数组。因此，我们需要遍历$route.matched 来检查路由记录中的 meta 字段。

## 过渡动效

是基本的动态组件，所以我们可以用组件给它添加一些过渡效果。

## 数据获取

有时候，进入某个路由后，需要从服务器获取数据。例如，在渲染用户信息时，你需要从服务器获取用户的数据，我们可以通过两种方式来实现： 1.导航完成之后获取：先完成导航，然后在接下来的组件生命周期钩子中获取数据，在数据获取期间显示加载中的指示。 2.导航完成之前获取：导航完成前，在路由的 enter 钩子中获取数据，在数据获取成功后执行导航。
**导航完成后获取数据**
当你使用这种方式时，我们会马上导航和渲染组件，然后在组件的 created 钩子中获取数据。这让我们有机会再数据获取期间展示一个 loading 状态，还可以在不同视图间展示不同的 loading 状态。

```
<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

export default {
    data() {
        return {
            loading: false,
            post: null,
            error: null
        }
    },
    created() {
        // 组件创建完后获取数据，
        // 此时data已经被observed了
        this.fetchData()
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    methods: {
        this.error = this.post =null
        this.loading =true
        // replace getPost with your data fetching util/API wrapper
        getPost(this.$route.params.id, (err ,post) => {
            this.loading = false
            if(err) {
                this.error = err.toString()
            } else {
                this.post = post
            }
        })
    }
}123456789101112131415161718192021222324252627282930313233343536373839404142434445464748
```

**在导航完成前获取数据**

```
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getPost(to.params.id, (err, post) =>
      if (err) {
        // display some global error message
        next(false)
      } else {
        next(vm => {
          vm.post = post
        })
      }
    })
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  watch: {
    $route () {
      this.post = null
      getPost(this.$route.params.id, (err, post) => {
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}12345678910111213141516171819202122232425262728293031323334
```

## 滚动行为

使用前端路由，当切换到新路由时，想要页面滚动到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。

```
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})123456
```

## 路由懒加载

当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
结合 Vue 的异步组件和 Webpack 的 code splitting feature，轻松实现路由组件的懒加载。
我们要做的就是把路由对应的组件定义成异步组件：

```
const Foo = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['./Foo.vue'], () => {
    resolve(require('./Foo.vue'))
  })
}1234567
```

或者

```
const Foo = resolve => require(['./Foo.vue'], resolve)1
```

## API 文档

组件支持用户在具有路由功能的应用中（点击）导航。通过 to 属性指定目标地址，默认渲染成带有正确连接的标签，可以通过配置 tag 属性生成别的标签，另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。
但是比起写死的标签要好些，理由如下： 1.无论是在 HTML5history 模式还是 hash 模式，它的表现行为一致，所以当需要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。 2.在 HTML5history 模式下，router-link 会拦截点击事件，让浏览器不再重新加载页面。 3.当你在 HTML5history 模式下使用 base 选项后，所有的 to 属性都不需要写（基路径）了。

### Props

```
### to
<!-- 字符串 -->
<router-link to="home">Home</router-link>
<!-- 渲染结果 -->
<a href="home">Home</a>

<!-- 使用 v-bind 的 JS 表达式 -->
<router-link v-bind:to="'home'">Home</router-link>

<!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
<router-link :to="'home'">Home</router-link>

<!-- 同上 -->
<router-link :to="{ path: 'home' }">Home</router-link>

<!-- 命名的路由 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- 带查询参数，下面的结果为 /register?plan=private -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>1234567891011121314151617181920
```

### replace

```
<router-link :to="{ path: '/abc'}" replace></router-link>1
```

### append

设置 append 属性后，则在当前路径前添加基路径。

```
<router-link :to="{ path: 'relative/path'}" append></router-link>1
```

### tag

默认为 a 标签，有时候想要渲染成某种标签，例如

- 。于是我们是用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。
- ```
  <router-link to="/foo" tag="li">foo</router-link>
  <!-- 渲染结果 -->
  <li>foo</li>123
  ```

  ### active-class

  默认值是 router-link-active，设置链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。

  ### exact

  默认值是 false，是否扩展到全局。

  ## router-view

  组件是一个 functional 组件，渲染路径匹配到的视图组件。渲染的组件还可以内嵌自己的，根据嵌套路径，渲染嵌套组件。

  ### Props

  #### name

  默认值是 default，如果设置了名称，则会渲染对应的路由配置中 components 下的响应组件。

  #### 行为表现

  其他属性（非 router-view 使用的属性）都直接传给渲染的组件，很多时候，每个路由的数据都是包含在路由参数中。
  因为它也是个组件，所以可以配合和使用。如果两个结合一起用，要确保在内层使用：

  ```
  <transition>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </transition>12345
  ```

  ## 路由信息对象

  route object 是不可变的，每次成功的导航后都会产生一个新的对象。
  $route.path

  ```
  类型: string

  字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。
  123
  ```

  $route.params

  ```
  类型: Object
  1
  ```

  一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。
  $route.query

  ```
  类型: Object

  一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。
  123
  ```

  $route.hash

  ```
  类型: string

  当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串。
  123
  ```

  $route.fullPath

  ```
  类型: string

  完成解析后的 URL，包含查询参数和 hash 的完整路径。
  123
  ```

  $route.matched

  ```
  类型: Array<RouteRecord>
  1
  ```

  一个数组，包含当前路由的所有嵌套路径片段的 路由记录 。路由记录就是 routes 配置数组中的对象副本（还有在 children 数组）。

  ```
  const router = new VueRouter({
    routes: [
      // 下面的对象就是 route record
      { path: '/foo', component: Foo,
        children: [
          // 这也是个 route record
          { path: 'bar', component: Bar }
        ]
      }
    ]
  })1234567891011
  ```

  当 URL 为 /foo/bar，$route.matched 将会是一个包含从上到下的所有对象（副本）。

  ```
  $route.name1
  ```

  ## Router 构造配置

  ## Router 实例

  当前路由的名称，如果有的话。
