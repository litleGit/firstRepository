// 添加接口类型
export interface FormState {
    key:string,
    name: string;
    state:string,
    start:number,
    lianXi:string,
    tel:number | string,
    lastTime:string
  }

  // 添加跟进数据
 export interface IGenJin {
  company:string,
  fail:string,
  genJin:string,
  lianXi:string,
  date:string,
  name:string
  }
  // 销售线索