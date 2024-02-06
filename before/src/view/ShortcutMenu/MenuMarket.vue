<template>
    <div>
      <Table :attribute="attribute" :columns="columns" :btnSwitch="btnSwitch" :data="tableData" :tableShow="tableShow" @chan="chan"
      @add="add">
      <template v-slot:form-slot>
        <!-- 具名插槽，用于当前表单不合适的情况下，自己写表单 -->
      </template>
    </Table>
    </div>
</template>

<script setup lang="ts">
import Table from '../../components/Table.vue'
import { onMounted, ref } from 'vue';
import { marketApi } from '../../api';
import { IAttr } from '../../type/conponentType';
let tableData = ref<Array<any>>([])
    onMounted(async ()=>{
        let res =await getDate()
        tableData.value=res
        console.log(res);
        
    })
    const attribute:IAttr = {
        searchSwitch: true,
        formAttribute: [
            { type: 'text', placeHolder: '输入关键字' },
            { type: 'select', options: ['正在跟进','达成意向','没有意向'], defaultValue: '客户状态' },
            { type: 'select', options: ['公海客户','专属客户','垃圾客户'], defaultValue: '客户类型' },
            { type: 'select', options: ['3','4','5'], defaultValue: '客户星级' },
        ],
    }
    const btnSwitch = {
    btnShow: true
  }
  const tableShow: any = {
    endA: ['跟进', '编辑', '置顶','删除'],
  }
  const columns: Array<any> = [
    {
      title: '客户名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '联系人姓名',
      dataIndex: 'lianXi',
      key: 'lianXi'
    },
    {
      title: '手机号码',
      dataIndex: 'tel',
      key: 'tel'
    },
    {
      title: '归属人员',
      dataIndex: 'guiShu',
      key: 'guiShu'
    },
    {
      title: '线索状态',
      dataIndex: 'state',
      key: 'state'
    },
    {
      title: '最后跟进',
      dataIndex: 'lastTime',
      key: 'lastTime'
    },
    {
      title: '未跟进天数',
      dataIndex: 'weiGen',
      key: 'weiGen'
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
    }
  ]
  const getDate =async ()=>{
    let res=await marketApi()
    res.data.forEach((item: any) => {
      item.weiGen = new Date(new Date().getTime() - new Date(item.lastTime).getTime()).getDate() - 1
    })
    return res.data
  }

  const chan = (val: any, item: string) => {
    console.log(val,item);
  }
  const add = () => {
    console.log("点击了添加");
    
  }
</script>

<style scoped>

</style>