<template>
    <div class="top">
        <div class="one" >
            <p style="color: gray;">月销售金额（元）</p>
            <h1>120,000</h1>
            <p style="margin-top: 30px;">
              <span style="margin-right: 20px; font-size: 12px;">周同比🔺12%</span>
              <span style="font-size: 12px;">日环比<e style="color: green;">▼</e>12%</span>
            </p>
        </div>
        <div class="one">
          <p style="color: gray;">月回款金额（元）</p>
          <h1>100,000</h1>
          <p id="main" ref="chart" style="width: 100%; height: 45PX;"></p>
        </div>
        <div class="one">
          <p style="color: gray;" >本月成交订单</p>
          <h1>1200</h1>
          <p ref="ding" style="width: 100%; height: 45PX;"></p>
        </div>
        <div class="one">
          <p style="color: gray;" >本月成交订单</p>
          <h1>75%</h1>
          <p ref="biao" style="width: 100%; height: 45PX;"></p>
        </div>
        <div class="one">
          <p style="color: gray;" >回款达成率</p> 
          <h1>80%</h1>
          <meter value="80" max="100" color="red" class="meters"></meter>
        </div>
    </div>
    <div class="quick">
      <p class="quickWord">快速新建</p>
      <ul class="quickList">
        <li v-for="item,index in quickNew" :key="item.id" :class="{'quickActive':quickIndex===index}" @click="light(index)">
          <p :class="item.icon" class="'quickIcon'"></p>
          {{ item.word }}
        </li>
      </ul>
    </div>
    <div class="data">
      <div class="dataLeft">
        <p class="dataWord">数据简报</p>
        <div class="leftSon">
          <div>
            <p>新增客户</p>
            <p>200</p>
          </div>
          <div>
            <p>新增线索</p>
            <p>200</p>
          </div>
          <div>
            <p>新增商机</p>
            <p>200</p>
          </div>
          <div>
            <p>新增订单</p>
            <p>200</p>
          </div>
          <div>
            <p>新增联系人</p>
            <p>200</p>
          </div>
          <div>
            <p>跟进次数</p>
            <p>200</p>
          </div>
          <div>
            <p>处理任务</p>
            <p>200</p>
          </div>
          <div>
            <p>处理工单</p>
            <p>200</p>
          </div>
        </div>
      </div>
      <div class="dataRight">
        <p class="dataWord">系统公告</p>
        <ul class="dataList">
          <li class="dataLi" v-for="item,index in gongGao" :key="item.id">
            <b>【{{ item.title }}】</b>
            <span>{{ item.con }}</span>
            <span class="dataLiEnd">{{ item.time }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="data">
      <div class="dataLeft">
        <p class="dataWord">业绩目标</p>
          <p class="dataMoney">成交金额</p>
          <div ref="yeji" style="height: 250px; width: 90%;"></div>
          <div class="pos">
            <p>目标金额</p>
            <p><i>￥100,000,000</i></p>
            <p>完成金额</p>
            <p><i>￥60,000,000</i></p>
          </div>
      </div>
      <div class="dataRight">
        <p class="dataWord">业绩排行</p>
       <div ref="pai" style="height: 250px; width: 90%;"></div>
      </div>
    </div>
    <div class="work">
      <div class="workLeft">
        <p class="workWord">工作报告</p>
        <ul class="workUl">
          <li class="workLi" v-for="item,index in workList" :key="item.id">
            <p>{{ item.con }}</p>
            <p>👤{{ item.name }}</p>
            <p>{{ item.state }}</p>
            <p>» 详情</p>
          </li>
        </ul>
      </div>
      <div class="workRight">
        <p class="workWord">日程日历</p>
        <div :style="{ width: '100%', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
  </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import {homeEacherts,homeThree,homeTwo, ye,pais} from '../../echarts/index'
const chart = ref<any>(null);  
const ding = ref<any>(null);  
const biao = ref<any>(null);  
// 业绩目标
 const yeji = ref<any>(null)
//  业绩排行
const pai = ref<any>(null)

onMounted(()=>{
  homeEacherts(chart.value)
  homeTwo(ding.value)
  homeThree(biao.value)
  ye(yeji.value)
  pais(pai.value)
})
// 快速新建数据
const quickIndex = ref<number>(0)
const quickNew = ref<Array<any>>([
  {id:1,word:'新建客户',icon:'iconfonts icon-kehu'},
  {id:2,word:'新建线索',icon:'iconfonts icon-gongzuotai-xinjianxiansuo'},
  {id:3,word:'新建商机',icon:'iconfonts icon-shangji'},
  {id:4,word:'新建订单',icon:'iconfonts icon-dingdan01'},
  {id:5,word:'新建联系人',icon:'iconfonts icon-lianxiren'},
  {id:6,word:'写新跟进',icon:'iconfonts icon-genjin'},
  {id:7,word:'新建任务',icon:'iconfonts icon-renwujincheng'},
  {id:8,word:'新建工单',icon:'iconfonts icon-gongdan'},
  {id:9,word:'新建汇款单',icon:'iconfonts icon-huikuandan'},
  {id:10,word:'新建回款计划',icon:'iconfonts icon-huikuanjilu'},
])
const light = (index:number)=>{
  quickIndex.value=index
  
}
// 系统公告
let gongGao = ref<Array<any>>([
  {id:1,title:'内部分享',con:'如何建立良好客户关系',time:'2019-02-14 09:00'},
  {id:2,title:'内部分享',con:'如何建立良好客户关系',time:'2019-02-14 09:00'},
  {id:3,title:'内部分享',con:'如何建立良好客户关系',time:'2019-02-14 09:00'},
  {id:4,title:'内部分享',con:'如何建立良好客户关系',time:'2019-02-14 09:00'},
  {id:5,title:'内部分享',con:'如何建立良好客户关系',time:'2019-02-14 09:00'},
])

// 工作报告
let workList = ref<Array<any>>([
  {id:1,con:'2024-1-08  工作日报',name:'赵小刚',state:'未批阅'},
  {id:2,con:'2024-1-08  工作日报',name:'赵小刚',state:'已批阅'},
  {id:3,con:'2024-1-08  工作日报',name:'赵小刚',state:'未批阅'},
  {id:4,con:'2024-1-08  工作日报',name:'赵小刚',state:'未批阅'},
  {id:5,con:'2024-1-08  工作日报',name:'赵小刚',state:'未批阅'}
])
// 日历
import { Dayjs } from 'dayjs';

const value = ref<Dayjs>();
const onPanelChange = (value: Dayjs, mode: string) => {
};
</script>

<style lang='scss' scoped >
  body{
    overscroll-behavior: none;
  }
  ::-webkit-scrollbar {  
    display: none;  
}

  .top{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    .one{
      flex:1;
      margin: 0 5px;
      border-radius: 20px;
      padding: 14px;
      font-size: 14px;
      background-color: white;
      .meters{
        width: 100%;
        color: red;
      }
    }
  }
  .quick{
    margin-top: 10px;
    padding: 7px;
    box-sizing: border-box;
    color: gray;
    .quickWord{
      height: 50px;
      line-height: 30px;
      padding: 10px;
      margin: auto;
      background-color: #f9f9f9;
      border-bottom: 0.5px solid rgb(224, 221, 221);
    }
    .quickList{
        width: 100%;
        height: 80px;
        padding: 6px;
        background-color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        li{
          text-align: center;
          width: 80px;
          height: 60px;
          font-size: 12px;
        }
      }
      .quickActive{
        background-color: #f9f9f9 !important;
        border-radius: 10px;
      }
  }
  .data{
    margin-top: 10px;
    padding: 7px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    color: gray;
    .dataWord{
        height: 50px;
        line-height: 30px;
        padding: 10px;
        margin: auto;
        background-color: #f9f9f9;
        border-bottom: 0.5px solid rgb(224, 221, 221);
    }
    .dataLeft{
      flex: 1;
      margin-right: 13px;
      background-color: white;
      position: relative;
    .leftSon{
      margin-top:20px ;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      div{
        text-align: center;
        height: 100px;
        width: 120px;
      }
    }
    }
    .dataRight{
      flex: 1;
      background-color: white;
      .dataList{
        padding: 10px;
        .dataLi{
          width: 100%;
          height: 40px;
          border-bottom: 0.5px solid rgb(224, 221, 221);
          line-height: 40px;
          font-size: 14px;
          .dataLiEnd{
            margin-left:150px ;
          }
        }
      }
    }
    .dataMoney{
      margin: 20px;
      font-size: 13px;
      /* color: gray; */
     
    }
    .pos{
        position: absolute;
        top: 103px;
        right: 20px;
        /* color: gray; */
        font-size: 13px;
      }
  }

  .work{
    margin-top: 10px;
    padding: 7px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    color: gray;
    .workWord{
        height: 50px;
        line-height: 30px;
        padding: 10px;
        margin: auto;
        background-color: #f9f9f9;
        border-bottom: 0.5px solid rgb(224, 221, 221);
    }
    .workLeft{
      flex: 1;
      margin-right: 13px;
      background-color: white;
      position: relative;
      .workUl{
        li{
          width: 100%;
          height: 60px;
          border-bottom: 0.5px solid rgb(224, 221, 221);
          display: flex;
          justify-content: space-evenly;
          line-height: 60px;
          font-size: 14px;
          
        }
      }
    }
    .workRight{
      flex: 1;
      background-color: white;
    }
  }
</style>