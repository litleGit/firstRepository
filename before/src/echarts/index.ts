
import * as echarts from 'echarts';
// import  use  from 'vue-echarts';
type EChartsOption = echarts.EChartsOption;
export const homeEacherts = (app: HTMLElement) => {
  //   var chartDom = document.getElementById(app)!;
  var myChart = echarts.init(app);
  var option: EChartsOption;
  var series = [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      stack: 'a',
      name: 'a'
    },
    {
      data: [10, 46, 64, '-', 0, '-', 0],
      type: 'bar',
      stack: 'a',
      name: 'b'
    },
    {
      data: [30, '-', 0, 20, 10, '-', 0],
      type: 'bar',
      stack: 'a',
      name: 'c'
    },
    {
      data: [30, '-', 0, 20, 10, '-', 0],
      type: 'bar',
      stack: 'b',
      name: 'd'
    },
    {
      data: [10, 20, 150, 0, '-', 50, 10],
      type: 'bar',
      stack: 'b',
      name: 'e'
    }
  ]
  const stackInfo: {
    [key: string]: { stackStart: number[]; stackEnd: number[] };
  } = {};
  for (let i = 0; i < series[0].data.length; ++i) {
    for (let j = 0; j < series.length; ++j) {
      const stackName = series[j].stack;
      if (!stackName) {
        continue;
      }
      if (!stackInfo[stackName]) {
        stackInfo[stackName] = {
          stackStart: [],
          stackEnd: []
        };
      }
      const info = stackInfo[stackName];
      const data = series[j].data[i];
      if (data && data !== '-') {
        if (info.stackStart[i] == null) {
          info.stackStart[i] = j;
        }
        info.stackEnd[i] = j;
      }
    }
  }
  for (let i = 0; i < series.length; ++i) {
    const data = series[i].data as
      | number[]
      | { value: number; itemStyle: object }[];
    const info = stackInfo[series[i].stack];
    for (let j = 0; j < series[i].data.length; ++j) {
      const isStart = info.stackStart[j] === i;
      const isEnd = info.stackEnd[j] === i;
      const topBorder = isEnd ? 20 : 0;
      const bottomBorder = 0;
      data[j] = {
        value: data[j] as number,
        itemStyle: {
          borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
        }
      };
    }
  }

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: series as any
  };
  myChart.setOption(option);

}
export const homeTwo = (app: HTMLElement) => {
  let myChart = echarts.init(app);
  let option: EChartsOption;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }
  myChart.setOption(option);
}
export const homeThree = (app: HTMLElement) => {

  var myChart = echarts.init(app);
  var option: EChartsOption;

  option = {
    //   tooltip: {
    //     trigger: 'item'
    //   },
    //   legend: {
    //     top: '5%',
    //     left: 'center'
    //   },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['90%', '100%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        data: [
          { value: 1048, name: '' },
          { value: 735, name: '' },
          { value: 580, name: '' },
          { value: 484, name: '' },
          { value: 300, name: '' }
        ]
      }
    ]
  }
  myChart.setOption(option);
}
// 业绩目标
export const ye = (app: HTMLElement) => {
  let myChart = echarts.init(app);
  let option: EChartsOption;
  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 20, name: '' },
          { value: 30, name: '' },
          { value: 0, name: '' },
          { value: 0, name: '' },
          { value: 0, name: '' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
}
// 业绩排行
export const pais = (app:HTMLElement)=>{
let myChart = echarts.init(app);
let option: EChartsOption;

option = {
  xAxis: {
    type: 'category',
    data: ['李晓刚','王洪','周明','张刚','郭涛','张伟','力宏']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name:'销售量',
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};

myChart.setOption(option);
}

