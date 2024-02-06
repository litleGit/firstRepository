<template>
    <main>
        <div class="top">创建客户</div>
        <div class="content">
            <div class="left">
                <div class="leftTop">
                    <p class="headerWord">基础信息</p>
                    <a-form
                    ref="formRef"
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="客户名称"
      name="name"
      :rules="[{ required: true, message: '请输入客户名称' }]"
    >
      <a-input v-model:value="formState.name"  style="width: 280px;"/>
    </a-form-item>

    <a-form-item
      label="联系人姓名"
      name="lianXi"
      :rules="[{ required: true, message: '请输入联系人' }]"
    >
      <a-input v-model:value="formState.lianXi"  style="width: 280px;"/>
    </a-form-item>

    <a-form-item
      label="手机号码"
      name="tel"
      :rules="[{ required: true, message: '请输入电话' }]"
    >
      <a-input v-model:value="formState.tel" type="number" style="width: 280px;"/>
    </a-form-item>



    <a-form-item
    label="客户状态"
    name="state"
    :rules="[{ required: true, message: '请手动选择客户状态' }]"
    >
        <a-select v-model:value="formState.state" style="width: 280px" >
        <a-select-option  value="正在跟进" >正在跟进</a-select-option>
        <a-select-option  value="初步意向" >初步意向</a-select-option>
        <a-select-option  value="达成意向" >达成意向</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item
    label="客户类型"
    >
        <a-radio-group v-model:value="radioVal" name="groupRadio">
            <a-radio value="企业客户">企业客户</a-radio>
            <a-radio value="个人客户">个人客户</a-radio>
        </a-radio-group>

    </a-form-item>

    <a-form-item
    label="客户星级"
    name="start"
    >
        <a-rate v-model:value="formState.start" />
    </a-form-item>




    <a-form-item
      label="开始时间"
      name="lastTime"
      :rules="[{ required: true, message: '请选择一个日期' }]"
    >
    <a-date-picker v-model:value="formState.lastTime" style="width: 280px;"/>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 20, span: 16 }">
      <a-button type="primary" html-type="submit">添加</a-button>
    </a-form-item>
  </a-form>

                </div>
            </div>
            <!-- ———————————————————————————————————————————————————— -->
            <div class="right">
                <div class="rightTop">
                    <p class="headerWord">首要联系人</p>
                    <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
  >

  <a-form-item
      label="助记名称"
    >
      <a-input  style="width: 280px;"/>
    </a-form-item>

    <a-form-item
    label="尊称"
    >
        <a-radio-group v-model:value="radioName" name="groupRadio">
            <a-radio value="先生">先生</a-radio>
            <a-radio value="女士">女士</a-radio>
        </a-radio-group>
    </a-form-item>

    <a-form-item
      label="所属行业"
    >
      <a-input style="width: 280px;"/>
    </a-form-item>


    <a-form-item
      label="部门职务"
    >
      <a-input style="width: 280px;"/>
    </a-form-item>

    <a-form-item
      label="固定电话"
    >
      <a-input type="number" style="width: 280px;"/>
    </a-form-item>

    <a-form-item
      label="传真号码"
    >
      <a-input type="number" style="width: 280px;"/>
    </a-form-item>

    <a-form-item
      label="电子邮箱"
    >
      <a-input type="email" style="width: 280px;"/>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset:1, span: 16 }">
      <a-button type="primary" @click="reset">重置</a-button>
    </a-form-item>
  </a-form>
                </div>
            </div>
        </div>
    </main>

</template>

<script setup lang="ts">
    import { reactive, ref } from 'vue';
    import {useRouter}from 'vue-router'
import { quickClientAddApi } from '../../api';
    let radioVal = ref('')
    let radioName = ref('先生')
    const router = useRouter()
interface FormState {
  name: string;
  state:string,
  start:number,
  lianXi:string,
  tel:number | string,
  lastTime:string
}

const formState = reactive<FormState>({
  name: '',
  state:'',
  start:3,
  lianXi:'',
  tel:'',
  lastTime:''
});
const onFinish = (values: any) => {
    values.key = Math.random().toString(16).slice(2,6)    
    quickClientAddApi(values).then(res=>{
        if(res.data.code===200){
            router.replace('/layout/ShortcutMenu/MenuList') 
        }
        
    })
    
};
// 重置
const formRef = ref();
const reset = () => {
    formRef.value.resetFields();
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped lang="scss">
    main{
        background-color: white;
        height: 100%;
        width: 100%;
        padding:0 7px;
        box-sizing: border-box;
    }
    .top{
        height:50px;
        width: 100%;
        border-bottom: 0.5px solid #ccc;
        line-height: 50px;
    }   
    .content{
        width: 100%;
        height: 100%;
        display: flex;
        .headerWord{
                    padding: 6px;
                }
        .left{
            flex: 1;
            display: flex;
            flex-direction: column;
            .leftTop{
                flex: 1;

            }
            .leftEnd{
                flex: 1;
            }
        }
        .right{
            flex: 1;
            display: flex;
            flex-direction: column;
            .rightTop{
                flex: 1;
            }
            .rightEnd{
                flex: 1;
            }
        }
    }
</style>