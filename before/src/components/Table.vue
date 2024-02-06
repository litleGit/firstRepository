<template>
    <div class="topInput"  v-if="attribute.searchSwitch">
        <a-form
       style="display: flex;justify-content:space-between; align-items:center;flex-wrap: wrap; ;"
    layout="inline"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
  <a-form-item style="margin-right: 30px;" v-for="item,index in attribute.formAttribute" :key="index">
      <a-input v-model:value="formState[item.type+index]" :placeholder="item.placeHolder" v-if="item.type==='text'"></a-input>
      <a-select v-model:value="formState[item.type+index]" style="width: 130px" v-else-if="item.type==='select'" >
        <a-select-option v-for="v,dex in item.options" :key="dex" :value="v" >{{v}}</a-select-option>
      </a-select>
      <a-checkbox v-model:checked="formState[item.type+index]"
      v-else-if="item.type==='checkbox'"
      >{{ item.word }}</a-checkbox>
      <a-radio v-model:checked="formState[item.type+index]" v-else-if="item.type==='radio'">{{ item.word }}</a-radio>
      <a-rate v-model:value="formState[item.type+index]" :character="item.chart" v-else-if="item.type==='rate'"/>
      <a-switch v-model:checked="formState[item.type+index]" v-else-if="item.type==='switch'"/>

    </a-form-item>
    <a-form-item
    v-if="attribute.formAttribute.length!=0"
    style="margin-top: 20px;"
    >
      <a-button
        type="primary"
        html-type="submit"
        style="margin-right: 20px;"
       >
      🔍️查询
      </a-button>
      <a-button style="margin-left: 10px" @click="reset"
      >重置</a-button>
    </a-form-item>
    
  </a-form>
  <slot name="form-slot"></slot>
</div>

    <div class="manyBtn" v-if="btnSwitch.btnShow">

        <a-button type="primary" @click="add">＋添加</a-button>
        <a-button >📥导入</a-button>
        <a-button >📤导出</a-button>
        <a-button >🗒︎新建任务</a-button>
        <a-button >🔁转移客户</a-button>
        <a-button >👥移入公海</a-button>
        <a-button >📕合并客户</a-button>
        <a-button >🖉批量编辑</a-button>
    </div>

    <a-table :columns="columns" :data-source="data" bordered style="color: gray;">
    <template #bodyCell="{ column, text,record }">
        <template v-if="column.key === 'action'">
        <span>
          <a v-for="item,index in tableShow.endA" :key="index" class="enda" @click="chan(record,item)" >{{ item }}</a>
        </span>
      </template>
    </template>
    
  </a-table>
</template>

<script setup lang="ts">


import type { FormProps } from 'ant-design-vue';
import { reactive,onMounted,ref } from 'vue';
import {ICol,IBtn,ITable, IAttr}from '../type/conponentType'

const props = defineProps<{
  attribute:IAttr, //表单属性
  columns:Array<ICol>, //表格表头
  btnSwitch:IBtn, //控制多个按钮
  data:Array<any> | null, //表格数据
  tableShow:ITable,  //控制表格action的按钮
}>()

const emit = defineEmits<{
  chan:[value:Object,item:string],
  add:[],

}>()

onMounted(()=>{
  // 设置头部表单的默认字段
    props.attribute.formAttribute.forEach((item: any,index: any)=>{
      formState[item.type+index]=item.defaultValue
    })        
})
const formState:any = reactive({}) //表单的所有值
// 清空表单
const reset = () => {
  Object.keys(formState).forEach(item=>{
    formState[item]=''
  })
};
const handleFinish: FormProps['onFinish'] = values => {
  console.log(values, formState);
};
const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
  console.log(errors);
};

// 表格事件
const val = ref({})
const chan =(val:any,item:string)=>{
  emit('chan',val,item)
}

// 添加按钮
const add = ()=>{
  emit('add')
}

</script>

<style scoped>
    .topInput{
        width: 100%;
        /* height:70px; */
        background-color: white;
        box-sizing: border-box;
        padding: 18px;
    }
    .manyBtn{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 50px;
        margin-top: 14px;
        background-color: white;
    }
.column-money {
  text-align: center !important;
}
table{
  text-align: center !important;
}
.enda{
  margin: 0 4px;
}
</style>