<template>
  <div class="vis">
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
        statusMap: {red: '异常', green: '正常', yellow: '预警'},
      },
    }
  },
}
export default vis
</script>
