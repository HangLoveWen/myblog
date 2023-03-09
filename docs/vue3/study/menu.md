---
title: 菜单静态页面
date: 2022-11-17
---

### 菜单静态页面

### **个人项目代码**

SourceApp.vue

```
<template>
  <div class="leftbar">
    <div class="left">
      <h1>数据应用</h1>
      <div class="leftcontainer">
        <div class="box">
          <img src="../assets/用户数量.png" />
          <p>{{ usenum }}</p>
        </div>
        <div class="leftbottom">用户数量</div>
      </div>
    </div>
    <div class="right">
      <div class="rightcontainer">
        <img src="../assets/车主数量.png" />
        <p>{{ carnum }}</p>
        <div class="rightbottom">车主数量</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SourceApp",
  setup() {
    let usenum = ref("58,123,326");
    let carnum = ref("600,000");
    return {
      carnum,
      usenum,
    };
  },
};
</script>

<style scoped>
.leftbar {
  width: 105%;
  height: 300px;
  background-color: #fdffff;
  float: left;
  margin-left: 180%;
  margin-top: -300px;
}
.left {
  float: left;
}
.box {
  border-right: 1px solid #eceef0;
  width: 190px;
}
.left h1 {
  margin: 13px 0 0 30px;
  font-size: 18px;
}
.leftcontainer {
  margin: 45px 0 0 80px;
}
.leftcontainer p {
  font-size: 40px;
  margin: 10px 0 0 -50px;
}

.right {
  float: right;
  margin-top: 77px;
  margin-left: 20px;
}
.rightcontainer {
  margin: 12px 20px 0 0px;
}
.rightcontainer img {
  margin-top: -8px;
}
.rightcontainer p {
  font-size: 40px;
  margin: 16px 0 0 -20px;
}
.leftbottom {
  font-size: 20px;
  margin: 20px 0 0 20px;
  color: #b2b4b6;
}
.rightbottom {
  font-size: 20px;
  margin: 20px 0 0 30px;
  color: #b2b4b6;
}
</style>

```

SourceData.vue

```
<template>
  <div class="sourcedata">
    <h1>数据资产</h1>
    <div class="content">
      <img src="../assets/数据资产.png" />
      <p>{{ datanum }}</p>
      <div class="bottom">数据资产(表)</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SourceData",
  setup() {
    let datanum = ref("1,326");
    return {
      datanum,
    };
  },
};
</script>

<style scoped>
.sourcedata {
  height: 300px;
  float: left;
  margin-top: -300px;
  margin-left: 95%;
  background-color: #fdffff;
}
h1 {
  margin: 30px 0 0 50px;
  font-size: 18px;
}
.content {
  margin: 50px 130px;
}
img {
  margin-top: -22px;
}
.content p {
  font-size: 40px;
  margin: 6px 0 0 0px;
}
.bottom {
  font-size: 20px;
  margin: 22px 0 0 0px;
  color: #b2b4b6;
}
</style>

```

Ydata.vue

```
<template>
  <div class="leftbar">
    <div class="left">
      <h1>接入源数据</h1>
      <div class="leftcontainer">
        <div class="box">
          <img src="../assets/接入系统数.png" />
          <p>{{ systemnum }}</p>
        </div>
        <div class="leftbottom">接入系统数</div>
      </div>
    </div>
    <div class="right">
      <div class="rightcontainer">
        <img src="../assets/接入表数量.png" />
        <p>{{ tablenum }}</p>
        <div class="rightbottom">接入表数量</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Ydata",
  setup() {
    let systemnum = ref(40);
    let tablenum = ref(516);
    return {
      systemnum,
      tablenum,
    };
  },
};
</script>

<style scoped>
.leftbar {
  width: 450px;
  height: 300px;
  background-color: #507fdc;
  float: left;
  color: #fdffff;
  margin-left: -30px;
  margin-top: 15px;
}
.left {
  float: left;
}
.box {
  width: 120px;
  border-right: 1px solid #6a9cf2;
}
.left h1 {
  margin: 24px 0 0 30px;
  color: #effeff;
  font-size: 18px;
}
.leftcontainer {
  margin: 44px 0 0 70px;
}
.leftcontainer p {
  font-size: 40px;
  margin: 10px 0 0 0px;
  color: #effeff;
}
.bottom {
  font-size: 20px;
  margin: 20px 0 0 -20px;
}
.right {
  float: right;
  margin-top: -239px;
  margin-left: 100px;
}
.rightcontainer {
  margin: 62px 50px 0 0px;
}
.rightcontainer p {
  font-size: 40px;
  margin: 6px 0 0 30px;
}
.leftbottom {
  font-size: 20px;
  margin: 25px 0 0 -20px;
}
.rightbottom {
  font-size: 20px;
  margin: 25px 0 0 20px;
}
</style>

```

App.vue

```
<template>
  <div class="nav">
    <ul>
      <li><YdataVue /></li>
      <li><SourcedataVue /></li>
      <li><SourceAppVue /></li>
    </ul>
  </div>
</template>

<script>
import SourceAppVue from "./components/SourceApp.vue";
import SourcedataVue from "./components/Sourcedata.vue";
import YdataVue from "./components/Ydata.vue";
export default {
  name: "App",
  components: {
    SourceAppVue,
    SourcedataVue,
    YdataVue,
  },
};
</script>
<style>
.nav {
  margin: -7px;
  width: 105%;
  background-color: #f1f3f9;
  padding: 1px;
  height: 350px;
}
.nav ul {
  list-style: none;
  text-decoration: none;
  float: left;
}
</style>

```

#### 效果展示

[![project1.png](https://i.postimg.cc/QNgnjzRc/project1.png)](https://postimg.cc/9zMBpLXf)
