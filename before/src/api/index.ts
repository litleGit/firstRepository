import axios from 'axios'
import type {FormState,IGenJin} from './api.d.ts'
// 快捷菜单/客户列表
export const quickClientApi =async ()=>{
    return await axios.get("http://localhost:3000/quickClient")
}
// 添加客户信息
export const quickClientAddApi =async (val:FormState)=>{
    return await axios.post("http://localhost:3000/quickClientAdd",val)
}
// 添加客户信息跟进时间
export const quickClientUpdateApi =async (val:any)=>{
    return await axios.post("http://localhost:3000/quickClientUpdate",val)
}
// 删除客户信息
export const quickClientDelApi =async (val:any)=>{
    return await axios.post("http://localhost:3000/quickClientDel",val)
}

// 添加跟进记录
export const genJinAddApi =async (val:IGenJin)=>{
    return await axios.post("http://localhost:3000/genJinAdd",val)
}

// 销售线索
export const marketApi =async ()=>{
    return await axios.get("http://localhost:3000/market")
}