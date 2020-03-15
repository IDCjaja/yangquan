<template>
  <div class="vis">
    <data-loader v-slot="{ results: results }" :data="[['', 0, 0, 0, 0, 0, 0, 0, 0, 0]]" url="/v1/components/ca576fb4-f69b-41a8-b45f-f34d5ad24854/data" method="get" :style="{width: '387px', height: '384px', position: 'absolute', top: '272px', left: '690px'}">
      <base-map :mapOptions="{center: [113.383285, 38.061188], zoom: 8}" features="none" mapStyle="amap://styles/cca20692c7b4da0b930eadd919d5a3fb" :useMapUi="true" :style="{width: '100%', height: '100%', transform: `scale(${1/getMapScale()})`, position: 'absolute', top: '0px', left: '0px'}">
        <regions @area-clicked="(json, area, vm)=>[areaClickedFunc(json, area, vm)]" @area-mouseover="(json, area, vm)=>[areaMouseoverFunc(json, area, vm)]" @area-mouseout="(json, area, vm)=>[areaMouseoutFunc(json, area, vm)]" :areas="areas" :areaStyle="{strokeColor: '#0158ff', strokeWeight: '1', fillColor: 'rgba(1, 88, 255, .1)'}" :areaHoverStyle="{strokeColor: '#0158ff', strokeWeight: '1', fillColor: 'rgba(1, 88, 255, .4)'}" />
        <marker-point v-for="item in yangquanGeoJson.features.map(item => ({label: item.properties.name, id: item.properties.name, location: item.properties.center}))" :key="item.id" :marker="item" :markerStyle="{color: '#fff', size: 8, strokeColor: '#0158ff', strokeWidth: 2}" :innerLabelStyle="{color: '#6b7885', fontSize: '14', padding: [2, 4]}" />
        <info-window ref="infowindowRef" :options="{closeWhenClickMap: true, isCustom: true}" />
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
  InfoWindow,
} from '@byzanteam/map-ui'

export const vis = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisTable,
    BaseMap,
    Regions,
    MarkerPoint,
    InfoWindow,
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

  computed: {
    areas () {
      return yangquanGeoJson.features.map((area) => {
        const count = this.counts.find(item => item.name === area.properties.name)
        area = {
          ...area,
          properties: {
            ...area.properties,
            ...count
          },
        }
        return area
      })
    }
  },

  created() {
    this._requestAreaData()
  },

  methods: {
    areaClickedFunc (json, area, vm) {
      if(this.isPC()) {
        return
      }
      this.triggerSelect(json, area, vm)
    },

    areaMouseoverFunc (json, area, vm) {
      this.triggerSelect(json, area, vm)
    },

    areaMouseoutFunc () {
      this.$refs.infowindowRef.close()
    },

    triggerSelect (json, area, vm) {
      this.selectedArea = this.selectedArea === json.properties.name ? '' : json.properties.name
      if (this.selectedArea) {
        if(this.$refs.infowindowRef.infoWindow) {
          this.$refs.infowindowRef.close()
          this._creatInfoWindow(json)
        } else {
          this._creatInfoWindow(json)
        }
      }
    },

    getMapScale () {
      const scaleValue = document.body.style.transform.match(/scale\(([\.\d]+)\)/)[1]
      return scaleValue
    },

    isPC () {
      var userAgentInfo = navigator.userAgent;
      var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
      }
      return flag;
    },

    _creatInfoWindow (json) {
      const content = `<div class='personal-info-container'>
          <div class="info-name">固定资产投资</div>
          <div class="info-title">当年累计投资额: ${json.properties.first}</div>
          <div class="info-title">同比增速: ${json.properties.second}</div>
          <div class="info-name">省市重点工程</div>
          <div class="info-title">当年累计投资额: ${json.properties.third}</div>
          <div class="info-title">完成率: ${json.properties.fourth}</div>
          <div class="info-name">全年项目库投资</div>
          <div class="info-title">开工率: ${json.properties.fifth}</div>
          <div class="info-name">新建项目开工</div>
          <div class="info-title">开工率: ${json.properties.sixth}</div>
          <div class="info-name">国省资金争取</div>
          <div class="info-title">争取资金额: ${json.properties.seventh}</div>
          <div class="info-name">标准厂房建设</div>
          <div class="info-title">累计建设面积: ${json.properties.eighth}</div>
          <div class="info-title">完成率: ${json.properties.nineth}</div>
        </div>`
      this.$refs.infowindowRef.createInfoWindow({content: content, location: json.properties.center})
    },

    _requestAreaData() {
      axios.get('/v1/components/ca576fb4-f69b-41a8-b45f-f34d5ad24854/data').then(({data: {data, schema}}) => {
        this.counts = data.map(area => {
          return {
            name: area[0],
            first: area[1],
            second: area[2],
            third: area[3],
            fourth: area[4],
            fifth: area[5],
            sixth: area[6],
            seventh: area[7],
            eighth: area[8],
            nineth: area[9] || 0
          }
        })
      });
    }
  }
}
export default vis
</script>
