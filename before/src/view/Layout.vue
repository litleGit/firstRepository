<template>
  <div class="Layout">
    <!-- 顶部 -->
    <div class="header"></div>
    <div class="footer">
      <!-- 左侧导航 -->
      <div class="left">
        <div :class="item.meta.id == ids ? 'nav_left activeLeft' : 'nav_left'" v-for="item in list" :key="item.path"
          @click="changeIds(item)">
          <div :class="item.meta.icon"></div>
          <div class="name">{{ item.meta.name }}</div>
        </div>
      </div>
      <!-- 中间导航 -->
      <div class="center">
        <div class="nav_top">
          <div :class="title.icon"></div>
          <div class="name">{{ title.name }}</div>
        </div>
        <div :class="item.path == active ? 'nav_right activeCenter' : 'nav_right'" v-for="item in listChildren"
          :key="item.path" @click="jump(item)">{{ item.meta.name }}
        </div>
      </div>
      <div class="right">
        <!-- 面包屑 -->
        <div class="bread">
            <RouterLink v-for="item,index in matcheds" :to="item.path" class="routerlink">
              <span :class="item.meta.icon" id="breadIcon"></span>
                {{ item.meta.name }}
              </RouterLink>
              
        </div>
        <!-- 内容 -->
        <div class="main">
          <p class="refresh" @click="clickRefresh">🔃</p>
          <router-view :key="refreshVal"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted,watch } from 'vue';
import { useRouter,useRoute,RouterLink } from 'vue-router';
const router = useRouter();



// 左侧导航信息
const list = ref<any>([])
// 中间导航顶部
const title = ref<{name:string,icon:string}>({ name: "快捷菜单", icon: "iconfont icon-liebiao" })
// 中间导航信息+左侧高亮
const listChildren = ref<any>([])
const ids = ref<number>(0)
// 中间高亮
const active = ref<string>("/layout/ShortcutMenu/home")
onMounted(() => {
  list.value = router.options.routes.filter((item: any) => item.meta == true)[0].children
  getlistChildren()
})
const getlistChildren = () => {
  listChildren.value = list.value.filter((item: any) => item.meta.id == ids.value)[0].children
}
const changeIds = (obj: any) => {
  ids.value = obj.meta.id
  title.value = { name: obj.meta.name, icon: obj.meta.icon }
  getlistChildren()
}
const jump = (obj: any) => {
  active.value = obj.path
  router.push(obj.path)
}
// 面包屑
let route = useRoute()
const matcheds = ref<any>([])
watch(()=>route.matched,(newVal,oldVal)=>{
      matcheds.value=newVal
})
// 局部刷新的值
let refreshVal = ref<number>(0)
const clickRefresh = ()=>{
  refreshVal.value+=1
}
</script>

<style lang='scss' scoped>
.layout{
  width: 100vw;
  height: 100vh;
}
// 顶部
.header {
  widows: 100%;
  height: 50px;
  background-color: #373d41;
}

.footer {
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;

  // 左侧导航
  .left {
    width: 80px;
    height: 100%;
    background-color: #373d41;
    font-size: 12px;

    .nav_left {
      width: 100%;
      height: 70px;
      color: #cccccc;
      text-align: center;
      padding: 10px 0;

      .iconfont {
        font-size: 20px;
        margin-bottom: 10px;
      }

      &:hover {
        color: white;
        font-weight: 700;
        background-color: #1a1c22;
      }
    }

    .activeLeft {
      color: white;
      font-weight: 700;
      background-color: #1a1c22;
    }
  }

  // 中间导航
  .center {
    width: 160px;
    height: 100%;
    background-color: #f2f4f7;
    border-right: 1px solid #e4e4e4;
    font-size: 14px;

    .nav_top {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background-color: #f2f2f2;
      border-bottom: 1px solid #e4e4e4;
      display: flex;
      padding-left: 10px;
      font-weight: 700;
      color: #666666;

      .iconfont {
        width: 20px;
      }
    }

    .nav_right {
      padding-left: 30px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      font-weight: 300;

      &:hover {
        color: #0079FE;
        background-color: white;
      }
    }

    .activeCenter {
      color: #0079FE;
      background-color: white;
    }
  }

  .right {
    width: calc(100vw - 240px);
    height: 100%;

    // 面包屑
    .bread {
      width: 100%;
      height: 50px;
      background-color: #ffffff;
      line-height: 50px;
      .routerlink{
        display: inline-block;
        line-height: 30px;
        text-align: center;
        color: black;
        padding: 0 15px;
        font-size: 12px;
        text-decoration: none;
        border-right: 2px solid rgb(50, 123, 219);
        border-bottom-right-radius: 100%;
        border-top-right-radius: 100%;
      }
    }

    // 内容
    .main {
      min-width: 1100px;
      height: calc(100vh - 100px);
      overflow-y: auto;
      background-color: #f0f2f5;
      box-sizing: border-box;
      padding: 25px 40px;
      .refresh{
        position: fixed; 
        top: 57px;
        right: 50px;
        font-size: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>