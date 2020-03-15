<template>
  <div class="vis">
    <data-loader v-slot="{ results: results }" :data="[['', 0, 0, 0, 0, 0, 0, 0, 0, 0]]" url="/v1/components/ca576fb4-f69b-41a8-b45f-f34d5ad24854/data" method="get" :style="{width: '387px', height: '384px', position: 'absolute', top: '272px', left: '690px'}">
      <base-map :mapOptions="{center: [113.383285, 38.061188], zoom: 8}" features="none" mapStyle="amap://styles/cca20692c7b4da0b930eadd919d5a3fb" :useMapUi="true" :style="{width: '100%', height: '100%', transform: `scale(${1/getMapScale()})`, position: 'absolute', top: '0px', left: '0px'}">
        <regions @area-clicked="()=>[areaClickFunc]" :areas="yangquanGeoJson.features" :areaStyle="{strokeColor: '#32c5ff', strokeWeight: '1', fillColor: 'rgba(1, 88, 255, .1)'}" :areaHoverStyle="{strokeColor: '#0158ff', strokeWeight: '1', fillColor: 'rgba(1, 88, 255, .4)'}" />
        <marker-point v-for="item in yangquanGeoJson.features.map(item => ({label: item.properties.name, id: item.properties.name, location: item.properties.center}))" :key="item.id" :marker="item" :markerStyle="{color: '#fff', strokeColor: '#32c5ff', strokeWidth: 2}" />
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
import { yangquanGeoJson } from '../../crane/yangquanGeoJson';

import {
  DataLoader,
  VisTable,
} from '@byzanteam/vis-components'
import {
  BaseMap,
  Regions,
  MarkerPoint,
} from '@byzanteam/map-ui'

export const vis = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisTable,
    BaseMap,
    Regions,
    MarkerPoint,
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

  methods: {
    getMapScale () {
      const scaleValue = document.body.style.transform.match(/scale\(([\.\d]+)\)/)[1]
      return scaleValue
    },
  }
}
export default vis
</script>
