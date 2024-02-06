// 控制表格中最后三个按钮的属性
export interface ITable {
    endA:Array<string>,
  }
  // 控制多个按钮的属性
export interface IBtn {
    btnShow:boolean,
  
  }
  // 控制表格头
export interface ICol {
    readonly title: string,
    readonly dataIndex: string,
    readonly key: string,
    className?: string
  }
//   // 控制表单显隐        //废弃
// export interface IForm<T> {
//     searchSwitch:boolean,
//     formAttribute:T
//   }
// export type FormChild =[
//     {type:string,placeHolder?:string,options?:Array<string>,check?:boolean,defaultValue?:string,chart?:string,word?:string}
//   ]

// 父组件中attribute的类型
export interface IAttr {
  searchSwitch:boolean,
  formAttribute:Array<{type:string,placeHolder?:string,options?:Array<string>,check?:boolean,defaultValue?:string,chart?:string,word?:string}>
}