<template>
  <div class="vis">
    <data-loader ref="chartDataRef" @requestDone="()=>[setState('counts', getComponent('chartDataRef').results)]" :data="[['', 0, [0, 0]]]" url="/v1/components/d160c22f-c088-4173-8a6a-af385d64e09f/data" method="get" :style="{width: '587px', height: '384px', position: 'absolute', top: '272px', left: '510px'}">
      <v-chart ref="chartRef" :options="{backgroundColor: 'transparent', geo: {map: 'yangquan', label: {normal: {show: 'false', color: '#fff', borderRadius: '4', padding: {0: '8', 1: '8'}, backgroundColor: 'rgba(50, 50, 50, 0.6)', align: 'left', rich: {a: {width: '120', align: 'left', lineHeight: '18', fontFamily: 'Oswald-Regular'}}, formatter: geoLabelHoverFormatter}, emphasis: {color: '#fff'}}, itemStyle: {normal: {areaColor: 'rgba(35, 173, 120, .1)', borderColor: 'rgba(35, 173, 120, .4)', borderWidth: '1', borderType: 'dash'}, emphasis: {areaColor: 'rgba(35, 173, 120, .9)'}}, z: '1'}, series: [{type: 'scatter', coordinateSystem: 'geo', data: [], symbolSize: 3, itemStyle: {normal: {color: '#c05746'}}}, {type: 'scatter', coordinateSystem: 'geo', data: 'yangquanGeoJson.features.map(feature => ({name: feature.properties.name, value: feature.properties.center}))', itemStyle: {normal: {color: 'transparent'}}, label: {formatter: '{b}', show: true, color: '#333333', fontSize: 10}}]}" :style="{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px'}" />
    </data-loader>
    <data-loader ref="investment" v-slot="{ results: results }" url="/v1/components/52ef7f5e-8046-4297-9671-cee40e05460c/data" method="get" :data="[[0]]" :style="{width: '900px', height: '384px', position: 'absolute', top: '676px', left: '510px'}">
      <vis-table ref="investment-table" v-if="results" stripe="row" :headers="[{key: 'name', title: '项目名称'}, {key: 'finished', title: '已完成投资额'}, {key: 'total', title: '项目总投资'}, {key: 'percetage', title: '已投资比率'}, {key: 'status', title: '预警标识'}]" :data="results.map(item => ({name: item[0], finished: `${item[1]} 亿元`, total: `${item[2]} 亿元`, percetage: `${item[3]}%`, status: item[4]}))">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span class="badge" :class="cell" v-if="columnKey=== 'status'">
            {{craneStates.statusMap[cell]}}
          </span>
          <span v-else>
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/tooltip'
import { yangquanGeoJson } from '../../crane/yangquanGeoJson';

import {
  DataLoader,
  VisTable,
} from '@byzanteam/vis-components'

Echarts.registerMap('yangquan', yangquanGeoJson);

export const vis = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisTable,
    'v-chart': Echarts,
  },

  data () {
    return {
      craneStates: {
        counts: [],
        statusMap: {red: '异常', green: '正常', yellow: '预警'},
      },
    }
  },

  methods: {
    geoLabelHoverFormatter (param) {
      var counts = this.craneStates.counts.find(item => {
        return param.name === item[0]
      }) || []
      return `\{a|${param.name}\n填报人数（人）：${counts[1]} \n有咳嗽症状（人）：${counts[2]} \n有胸闷症状（人）：${counts[3]} \n有发烧症状（人）：${counts[4]}\}`
    },
  }
}
export default vis
</script>
