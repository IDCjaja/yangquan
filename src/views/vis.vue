<template>
  <div class="vis">
    <data-loader v-slot="{ results: results }" :data="[['', 0, 0, 0, 0, 0, 0, 0, 0, 0]]" url="/v1/components/ca576fb4-f69b-41a8-b45f-f34d5ad24854/data" method="get" :style="{width: '587px', height: '384px', position: 'absolute', top: '272px', left: '510px'}">
      <base-map :mapOptions="{center: [113.383285, 38.061188], zoom: 9}" features="none" mapStyle="amap://styles/cca20692c7b4da0b930eadd919d5a3fb" :useMapUi="true" :style="{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px'}">
        <regions @area-clicked="()=>[areaClickFunc]" :areas="yangquanGeoJson.features" :areaStyle="{strokeColor: '#32c5ff', strokeWeight: '2', fillColor: '#ffffff'}" />
      </base-map>
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
import _  from 'lodash'
import axios from 'axios'
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
import {
  BaseMap,
  Regions,
} from '@byzanteam/map-ui'

export const vis = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisTable,
    BaseMap,
    Regions,
  },

  data () {
    return {
      yangquanGeoJson: yangquanGeoJson,
      counts: [[]],
      options: {backgroundColor: 'transparent', geo: {map: 'yangquan', label: {normal: {show: false, color: '#fff', align: 'left', borderRadius: 4, padding: [0, 8], backgroundColor: '#313c56', align: 'left', rich: {a: {width: 160, padding: [0, 0], align: 'left', lineHeight: 14, fontSize: 14, color: 'rgba(255, 255, 255)', fontFamily: 'Oswald-Regular'}, b:{width: 20, align: 'left', padding: [0, 0], lineHeight: 14, fontSize: 14, color: 'rgba(255, 255, 255, .4)'}}, formatter: this.geoLabelHoverFormatter}, emphasis: {color: '#fff'}}, itemStyle: {normal: {areaColor: 'rgba(35, 173, 120, .1)', borderColor: 'rgba(35, 173, 120, .4)', borderWidth: 1, borderType: 'dash'}, emphasis: {areaColor: 'rgba(35, 173, 120, .9)'}}, z: '1'}, series: [{type: 'scatter', coordinateSystem: 'geo', data: [], symbolSize: 3, itemStyle: {normal: {color: '#c05746'}}}, {type: 'scatter', coordinateSystem: 'geo', data: yangquanGeoJson.features.map(feature => ({name: feature.properties.name, value: feature.properties.center})), itemStyle: {normal: {color: 'transparent'}}, label: {formatter: '{b}', show: true, color: '#333333', fontSize: 10}}]},
      craneStates: {
        statusMap: {red: '异常', green: '正常', yellow: '预警'},
      },
    }
  },

  created() {
    axios.get('/v1/components/ca576fb4-f69b-41a8-b45f-f34d5ad24854/data').then(({data: {data, schema}}) => {
      this.counts = data
    })
  },

  watch: {
    counts (value) {
      if(!_.isEmpty(value)) {
        this.$refs.chartRef.chart.setOption(this.options)
      }
    }
  },

  methods: {
    geoLabelHoverFormatter (param) {
      var counts = this.counts.find(item => {
        return param.name === item[0]
      }) || [0, 0, 0, 0, 0]
      return `
      \{b|固定资产投资\}\n\{a|当年累计投资额：${counts[1]}\n同比增速：${counts[2] || 0}\}
      \{b|省市重点工程\}\n\{a|当年累计投资额：${counts[3] || 0}\n完成率：${counts[4] || 0}\}
      \{b|全年项目库投资\}\n\{a|开工率：${counts[5] || 0}\}
      \{b|新建项目开工\}\n\{a|开工率：${counts[6] || 0}\}
      \{b|国省资金争取\}\n\{a|争取资金额：${counts[7] || 0}\}
      \{b|标准厂房建设\}\n\{a|累计建设面积：${counts[8] || 0}\n完成率：${counts[9] || 0}\}
      `
    },
  },
}
export default vis
</script>
