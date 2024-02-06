
<template>
    <div class="sort">
        <h4>⌛︎高级筛选</h4>
        <div class="sortCon">
            <div class="sortLeft" v-for="item in sortData" :key="item.id">
                <p class="sortLeftTitle">{{ item.title }}：</p>
                <p class="sortLeftChild">
                    <span v-for="v,dex in item.children" :key="dex" @click="addSelDate(v,item.title)">{{ v }}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="sel">
        <span v-for="item,index in selDate" :key="index">{{ item }}</span>
    </div>

    <Table :attribute="obj" :columns="columns" :btnSwitch="btnSwitch" :data="tableData" :tableShow="tableShow" @chan="chan"
      @add="add">
      <template v-slot:form-slot>
        <!-- 具名插槽，用于当前表单不合适的情况下，自己写表单 -->
      </template>
    </Table>
    <Teleport :disabled="isMobile" to="body">
      <a-modal 
      v-model:open="open" 
      title="新建跟进" 
      :confirm-loading="confirmLoading" 
      @ok="handleOk" 
      ok-text="确认" cancel-text="取消"
      style="min-width: 20%;"
      >
        <a-form
      :model="formModel"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item
        label="客户名称"
        name="username"
        
      >
        <a-input v-model:value="formModel.company" disabled/>
      </a-form-item>
  
      <a-form-item  label="拜访方式" name="genjin">
        <a-select v-model:value="formModel.genJin" style="width: 130px" >
          <a-select-option value="到访" >到访</a-select-option>
          <a-select-option value="到访" >电话</a-select-option>
        </a-select>
      </a-form-item>
  
      <a-form-item
        label="联系人"
        name="lianXi"
      >
        <a-input v-model:value="formModel.lianXi" disabled/>
      </a-form-item>
      <a-form-item
        label="跟进时间"
        name="date"
        :rules="[{ required: true, message: '选择跟进时间' }]"
      >
      <a-date-picker v-model:value="formModel.date"/>
      </a-form-item>
      <a-form-item
        label="跟进内容"
        name="fail"
      >
        <a-input v-model:value="formModel.fail" />
      </a-form-item>
      <a-form-item
        label="跟进人员"
        name="people"
        :rules="[{ required: true, message: '填写跟进人员' }]"
      >
        <a-input v-model:value="formModel.name" />
      </a-form-item>
    </a-form>
      </a-modal>
    </Teleport>
    <a-modal v-model:open="delOpen" title="是否删除该项" ok-text="确认" cancel-text="取消" @ok="hideModal">
  
      </a-modal>
  </template>
  <script setup lang="ts">
  import { reactive, onMounted, ref } from 'vue';
  import { quickClientApi,genJinAddApi, quickClientUpdateApi, quickClientDelApi } from '../../api/index'
  import Table from '../../components/Table.vue';
  import { useRouter } from 'vue-router'
  const router = useRouter()
  // 控制表单的属性
  const obj: any = {
    // searchSwitch: true, //控制顶部查询表单是显示，默认为true,必传
    formAttribute: [
      { type: 'text', placeHolder: '输入关键字' },
      { type: 'select', options: ['正在跟进','达成意向','没有意向'], defaultValue: '客户状态' },
      { type: 'select', options: ['公海客户','专属客户','垃圾客户'], defaultValue: '客户类型' },
      { type: 'select', options: ['3','4','5'], defaultValue: '客户星级' },
      // {type:'checkbox',check:false,word:'测试复选框'},
      // { type: 'radio', check: false, word: '测试单选框' },
      // { type: 'rate', chart: '※' },
      // { type: 'switch', check: false }
    ],
  }
  // 控制多个按钮的属性
  const btnSwitch = {
    btnShow: true
  }
  // 控制表格的属性
  const tableShow: any = {
    endA: ['💬跟进', '🖊编辑', '🗑︎删除'],
  }
  
  // 表格头
  interface ICol {
    readonly title: string,
    readonly dataIndex: string,
    readonly key: string,
    className?: string
  }
  const columns: Array<ICol> = [
    {
      title: '客户名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '客户状态',
      dataIndex: 'state',
      key: 'state'
    },
    {
      title: '客户星级',
      dataIndex: 'start',
      key: 'start'
    },
    {
      title: '首联系人',
      dataIndex: 'lianXi',
      key: 'lianXi'
    },
    {
      title: '手机号码',
      dataIndex: 'tel',
      key: 'tei'
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
  // 表格数据接口
  let tableData = ref<Array<any>>([])
  // 获取后台表格数据
  const dataMeth = async () => {
    let res: any = await quickClientApi()
    res.data.res.forEach((item: any) => {
      item.weiGen = new Date(new Date().getTime() - new Date(item.lastTime).getTime()).getDate() - 1
      item.start = "⭐".repeat(item.start)
    })
    return res.data.res
  
  }
  onMounted(async () => {
    let res = await dataMeth()
    tableData.value = res
  
  })
  // 传送门开关
  const isMobile = ref<boolean>(true)
  
  // 接收子组件传递的参数进行表格的更新
  let rowData = ref<any>()
  const chan = (val: any, item: string) => {
    console.log(val,item);
    rowData.value = val
    if(item.includes('跟进')){
      open.value = true;
      formModel.company=val.name
      formModel.lianXi=val.lianXi
    }
    if(item.includes('删除')){
      delOpen.value=true
    }
  }
  
  
  const add = () => {
    router.push('/layout/ShortcutMenu/MenuAdd')
  }
  // model
  const modalText = ref<string>('Content of the modal');
  const open = ref<boolean>(false);
  const confirmLoading = ref<boolean>(false);
  
  const handleOk =async () => {
    confirmLoading.value = true;
    setTimeout(async () => {
      open.value = false;
      confirmLoading.value = false;
     await genJinAddApi(formModel)
    }, 2000);
    await quickClientUpdateApi({name:formModel.company,lastTime:formModel.date})
    tableData.value=await dataMeth()
  };
  // 模态框中的表单
  const formModel = reactive({
    company: '',
    fail:'',
    genJin:'',
    lianXi:'',
    date:'',
    name:''
  });
  
  // 删除的模态框
  const delOpen = ref<boolean>(false);
    const hideModal =async () => {
      await quickClientDelApi({_id:rowData.value._id})
      tableData.value=await dataMeth()
      tableData.value=await dataMeth()
      delOpen.value = false;
  }

  const sortData = [
    {
        id:1,
        title:'客户分类',
        children:['全部','我的客户','下属客户','重点客户','我协作的','今日新增','公海客户','垃圾客户']
    },
    {
        id:2,
        title:'客户类型',
        children:['全部','企业客户','个人客户']
    },
    {
        id:3,
        title:'客户状态',
        children:['全部','正在跟进','正在试用','准备购买','准备付款','已经购买','暂时搁置']
    },
    {
        id:4,
        title:'客户星级',
        children:['全部','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
    },
    {
        id:5,
        title:'下次跟进时间',
        children:['全部','今天','明天','本周','本月','下月','自定义时间段']
    },
    {
        id:6,
        title:'首字符筛选',
        children:['全部','A','B','C','D','E','F','G']
    },
    {
        id:7,
        title:'所属行业',
        children:['全部','制造业','冶金业','','我协作的','今日新增','公海客户','垃圾客户']
    },
  ]
  let selDate = ref<Array<any>>([
    '全部'
  ])
  const addSelDate = (item:any,title:string)=>{
    if(item!=='全部'){
        selDate.value.push(item)
    }
  }
  </script>
  
  <style scoped lang="scss">
  .topInput {
    width: 100%;
    height: 70px;
    background-color: white;
    box-sizing: border-box;
    padding: 18px;
  }
  
  .manyBtn {
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
  
  table {
    text-align: center !important;
  }

  .sort{
    width: 100%;
    h4{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 0.5px solid gray;
    }
    .sortCon{
        margin-top: 20px;
        cursor:pointer;
        .sortLeft{
            margin: 7px 0;
            display: flex;
            .sortLeftTitle{
                margin: 0 5px;
                color: gray;
            }
            .sortLeftChild{
                span{
                    margin: 0 15px;
                    font-size: 15px;
                    color: gray;
                }
            }
        }
    }
  }
  .sel{
    width: 100%;
    height: 50px;
    line-height: 50px;
    span{
        padding: 10px;
        display:inline;
        border: 0.5px solid '#36d';
    }
  }
  </style>