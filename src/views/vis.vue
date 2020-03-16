<template>
  <div class="vis">
    <div ref="six-title-icon" :style="{height: '20px', width: '4px', borderRadius: '2px', backgroundColor: '#0158ff', position: 'absolute', top: '62px', left: '1450px'}" />
    <div ref="six-title-text" :style="{fontsize: '20px', color: '#6b7885', lineHeight: '1', fontWeight: '500', position: 'absolute', top: '64px', left: '1466px'}">
      六大指标
    </div>
    <div ref="six-title-line" :style="{width: '410px', height: '1px', backgroundColor: '#ECF1F3', position: 'absolute', top: '104px', left: '1450px'}" />
    <div ref="six-border-box" :style="{border: '1px solid #ecf1f3', borderRadius: '8px', width: '450px', height: '633px', position: 'absolute', top: '40px', left: '1430px'}" />
    <div ref="project-title-icon" :style="{height: '20px', width: '4px', borderRadius: '2px', backgroundColor: '#0158ff', position: 'absolute', top: '294px', left: '60px'}" />
    <div ref="project-title-text" :style="{fontsize: '20px', color: '#6b7885', lineHeight: '1', fontWeight: '500', position: 'absolute', top: '296px', left: '76px'}">
      项目分布情况
    </div>
    <div ref="project-title-line" :style="{width: '410px', height: '1px', backgroundColor: '#ECF1F3', position: 'absolute', top: '336px', left: '60px'}" />
    <div ref="project-border-box" :style="{border: '1px solid #ecf1f3', borderRadius: '8px', width: '450px', height: '384px', position: 'absolute', top: '272px', left: '40px'}" />
    <div ref="new-title-icon" :style="{height: '20px', width: '4px', borderRadius: '2px', backgroundColor: '#0158ff', position: 'absolute', top: '698px', left: '60px'}" />
    <div ref="new-title-text" :style="{fontsize: '20px', color: '#6b7885', lineHeight: '1', fontWeight: '500', position: 'absolute', top: '700px', left: '76px'}">
      新建项目进度分布
    </div>
    <div ref="new-title-line" :style="{width: '410px', height: '1px', backgroundColor: '#ECF1F3', position: 'absolute', top: '740px', left: '60px'}" />
    <div ref="new-border-box" :style="{border: '1px solid #ecf1f3', borderRadius: '8px', width: '450px', height: '384px', position: 'absolute', top: '676px', left: '40px'}" />
    <div ref="city-title-icon" :style="{height: '20px', width: '4px', borderRadius: '2px', backgroundColor: '#0158ff', position: 'absolute', top: '715px', left: '1450px'}" />
    <div ref="city-title-text" :style="{fontsize: '20px', color: '#6b7885', lineHeight: '1', fontWeight: '500', position: 'absolute', top: '717px', left: '1466px'}">
      市级项目概括
    </div>
    <div ref="city-title-line" :style="{width: '410px', height: '1px', backgroundColor: '#ECF1F3', position: 'absolute', top: '758px', left: '1450px'}" />
    <div ref="city-border-box" :style="{border: '1px solid #ecf1f3', borderRadius: '8px', width: '450px', height: '367px', position: 'absolute', top: '693px', left: '1430px'}" />
    <div ref="city-content" :style="{width: '410px', height: '287px', fontSize: '14px', color: '#313c56', lineHeight: '2', position: 'absolute', top: '778px', left: '1450px'}">
      年初，全市初步计划实施项目318个，总投资1557.5亿元，年度计划投资267.5亿元。为进一步夯实全市投资基础，确保顺利完成年度投资任务，我们于4月、5月多次组织各县区对今年建设项目库进行对接充实。截至5月底，全市建设项目360个，年度计划投资299.85亿元。其中，基础设施类项目58个，年度计划投资61.3亿元，占全年计划投资的20.4%；产业类项目179个，年度计划投资163.15元，占全年计划投资的54.4%；社会民生类项目123个，年度计划投资75.39亿元，占全年计划投资的25.2%。
    </div>
    <div ref="new-title-icon" :style="{height: '20px', width: '4px', borderRadius: '2px', backgroundColor: '#0158ff', position: 'absolute', top: '697px', left: '530px'}" />
    <div ref="new-title-text" :style="{fontsize: '20px', color: '#6b7885', lineHeight: '1', fontWeight: '500', position: 'absolute', top: '698px', left: '546px'}">
      投资预计分析
    </div>
    <div ref="new-title-line" :style="{width: '960px', height: '1px', backgroundColor: '#ECF1F3', position: 'absolute', top: '740px', left: '510px'}" />
    <div ref="new-border-box" :style="{border: '1px solid #ecf1f3', borderRadius: '8px', width: '900px', height: '384px', position: 'absolute', top: '676px', left: '510px'}" />
    <div ref="banner" :style="{width: '1370px', height: '212px', position: 'absolute', top: '40px', left: '40px'}">
      <img ref="bannerImg" :style="{height: '100%'}" src="/yqfw/image/image_banner_bg.png" />
    </div>
    <div ref="fixed-img-box" :style="{width: '60px', height: '60px', borderRadius: '6px', backgroundColor: '#0158ff', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '125px', left: '1450px'}">
      <img ref="fixed-img" :style="{height: '24px'}" src="/yqfw/image/icon 04.svg" />
    </div>
    <div ref="province-img-box" :style="{width: '60px', height: '60px', borderRadius: '6px', backgroundColor: '#efc11e', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '218px', left: '1450px'}">
      <img ref="province-img" :style="{height: '24px'}" src="/yqfw/image/icon 05.svg" />
    </div>
    <div ref="all-year-img-box" :style="{width: '60px', height: '60px', borderRadius: '6px', backgroundColor: '#fd5080', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '311px', left: '1450px'}">
      <img ref="all-year-img" :style="{height: '24px'}" src="/yqfw/image/icon 06.svg" />
    </div>
    <div ref="new-project-img-box" :style="{width: '60px', height: '60px', borderRadius: '6px', backgroundColor: '#7FC88E', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '404px', left: '1450px'}">
      <img ref="new-project-img" :style="{height: '24px'}" src="/yqfw/image/icon 07.svg" />
    </div>
    <div ref="funds-img-box" :style="{width: '60px', height: '60px', borderRadius: '6px', backgroundColor: '#0158ff', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '497px', left: '1450px'}">
      <img ref="funds-img" :style="{height: '24px'}" src="/yqfw/image/icon 04.svg" />
    </div>
    <div ref="work-box" :style="{width: '60px', height: '60px', borderRadius: '6px', backgroundColor: '#fd5080', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '590px', left: '1450px'}">
      <img ref="work-img" :style="{height: '24px'}" src="/yqfw/image/icon 08.svg" />
    </div>
    <div ref="province-box" :style="{width: '60px', height: '60px', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '300px', left: '1157px'}">
      <img ref="province-img" :style="{height: '24px'}" src="/yqfw/image/icon 01.svg" />
    </div>
    <div ref="city-box" :style="{width: '60px', height: '60px', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '434px', left: '1157px'}">
      <img ref="city-img" :style="{height: '24px'}" src="/yqfw/image/icon 02.svg" />
    </div>
    <div ref="other-box" :style="{width: '60px', height: '60px', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '569px', left: '1157px'}">
      <img ref="other-img" :style="{height: '24px'}" src="/yqfw/image/icon 03.svg" />
    </div>
    <div ref="fixed-title" :style="{color: '#9DACBE', fontsize: '18px', fontWeight: '500', lineHeight: '1', position: 'absolute', top: '132px', left: '1538px'}">
      固定资产投资
    </div>
    <div ref="province-title" :style="{color: '#9DACBE', fontsize: '18px', fontWeight: '500', lineHeight: '1', position: 'absolute', top: '225px', left: '1538px'}">
      省市重点工程
    </div>
    <div ref="all-year-title" :style="{color: '#9DACBE', fontsize: '18px', fontWeight: '500', lineHeight: '1', position: 'absolute', top: '318px', left: '1538px'}">
      全年项目库投资
    </div>
    <div ref="new-project--title" :style="{color: '#9DACBE', fontsize: '18px', fontWeight: '500', lineHeight: '1', position: 'absolute', top: '411px', left: '1538px'}">
      省市重点工程
    </div>
    <div ref="funds-title" :style="{color: '#9DACBE', fontsize: '18px', fontWeight: '500', lineHeight: '1', position: 'absolute', top: '504px', left: '1538px'}">
      国省资金争取
    </div>
    <div ref="work-title" :style="{color: '#9DACBE', fontsize: '18px', fontWeight: '500', lineHeight: '1', position: 'absolute', top: '597px', left: '1538px'}">
      标准厂房建设
    </div>
    <data-loader ref="all-year-investment" v-slot="{ results: results }" :url="`/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data`" method="get" :data="[[0,0,0,0,0,0,0,0,0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '344px', left: '1538px'}">
      <digital-roll ref="all-year-investment-digital" titlePosition="left" :content="{title: '开工率', digital: Number(results[0][4]), suffix: '%'}" :options="{separator: ''}" :titleStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :digitalStyle="{fontSize: '24px', color: '#313c56', fontWeight: '500', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="fixed-investment" v-slot="{ results: results }" :url="`/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data`" method="get" :data="[[0,0,0,0,0,0,0,0,0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '158px', left: '1538px'}">
      <digital-roll ref="fixed-investment-digital" titlePosition="left" :content="{title: '当年累计投资额', digital: Number(results[0][1]), suffix: '亿元'}" :options="{separator: ''}" :titleStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :digitalStyle="{fontSize: '24px', color: '#313c56', fontWeight: '500', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="fixed-speed" v-slot="{ results: results }" :url="`/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data`" method="get" :data="[[0,0,0,0,0,0,0,0,0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '158px', left: '1717px'}">
      <digital-roll ref="fixed-investment-speed-digital" titlePosition="left" :content="{title: '同比增速', digital: Number(results[0][2]), suffix: '%'}" :options="{separator: ''}" :titleStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :digitalStyle="{fontSize: '24px', color: '#313c56', fontWeight: '500', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="province-major-project" v-slot="{ results: results }" :url="`/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data`" method="get" :data="[[0,0,0,0,0,0,0,0,0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '251px', left: '1538px'}">
      <digital-roll ref="province-major-project-digital" titlePosition="left" :content="{title: '当年累计投资额', digital: Number(results[0][3]), suffix: '亿元'}" :options="{separator: ''}" :titleStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :digitalStyle="{fontSize: '24px', color: '#313c56', fontWeight: '500', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="province-major-project-speed" v-slot="{ results: results }" :url="`/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data`" method="get" :data="[[0,0,0,0,0,0,0,0,0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '251px', left: '1717px'}">
      <digital-roll ref="province-major-project-speed-digital" titlePosition="left" :content="{title: '完成率', digital: Number(results[0][4]), suffix: '%'}" :options="{separator: ''}" :titleStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :digitalStyle="{fontSize: '24px', color: '#313c56', fontWeight: '500', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="funds" v-slot="{ results: results }" :url="`/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data`" method="get" :data="[[0,0,0,0,0,0,0,0,0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '530px', left: '1538px'}">
      <digital-roll ref="funds-digital" titlePosition="left" :content="{title: '争取资金额', digital: Number(results[0][6]), suffix: '亿元'}" :options="{separator: ''}" :titleStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :digitalStyle="{fontSize: '24px', color: '#313c56', fontWeight: '500', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="new-project" v-slot="{ results: results }" :url="`/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data`" method="get" :data="[[0,0,0,0,0,0,0,0,0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '437px', left: '1538px'}">
      <digital-roll ref="new-project-digital" titlePosition="left" :content="{title: '开工率', digital: Number(results[0][5]), suffix: '%'}" :options="{separator: ''}" :titleStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :digitalStyle="{fontSize: '24px', color: '#313c56', fontWeight: '500', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="workshop" v-slot="{ results: results }" :url="`/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data`" method="get" :data="[[0,0,0,0,0,0,0,0,0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '623px', left: '1538px'}">
      <digital-roll ref="workshop-digital" titlePosition="left" :content="{title: '累计建设面积', digital: Number(results[0][7]), suffix: '万平方米'}" :options="{separator: ''}" :titleStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :digitalStyle="{fontSize: '24px', color: '#313c56', fontWeight: '500', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="workshop-speed" v-slot="{ results: results }" :url="`/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data`" method="get" :data="[[0,0,0,0,0,0,0,0,0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '623px', left: '1746px'}">
      <digital-roll ref="workshop-speed-digital" titlePosition="left" :content="{title: '完成率', digital: Number(results[0][8]), suffix: '%'}" :options="{separator: ''}" :titleStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{color: '#313c56', fontSize: '14px', lineHeight: '1.5'}" :digitalStyle="{fontSize: '24px', color: '#313c56', fontWeight: '500', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="project-class" v-slot="{ results: results, response: response }" :url="`/v1/components/1accfeec-bb91-41ca-9f4c-d53662aea01e/data`" method="get" :data="[[0]]" :style="{width: '450px', height: '324px', position: 'absolute', top: '336px', left: '40px'}">
      <donut ref="project-class-content" v-if="results" :data="results.map(item => { return {label: item[0], amount: item[1] } } )" labelKey="label" valueKey="amount" :percentage="true" :innerRadius="0.48" :theme="{background: 'transparent', colors: ['#EFC11E', '#0158FF'], whitespace: 'nowrap'}" :legendOptions="{size: '70px', align: ['center', 'Fd5080', 'start'], layout: 'horizontal', label: {fill: '#2E2E2E', size: 14}, position: 'bottom'}" :tooltip="{text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, notation: {fill: '#007AFE', name: 'circle-small', size: 14}}" :tooltipOptions="{background: 'rgba(60, 71, 89, 0.9)', text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, title: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}}" />
    </data-loader>
    <data-loader ref="city" v-slot="{ results: results }" :url="`/v1/components/c15377b9-682a-46d3-ae59-77d35ddbdb89/data`" method="get" :data="[['', 0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '431px', left: '1245px'}">
      <digital-roll ref="city-digital" titlePosition="bottom" :content="{title: '市级重点项目', digital: results[0][1]}" :options="{separator: ''}" :titleStyle="{color: '#9dacbe', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{fontSize: '14px', color: '#9dacbe'}" :digitalStyle="{fontSize: '40px', color: '#313c56', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="province" v-slot="{ results: results }" :url="`/v1/components/c15377b9-682a-46d3-ae59-77d35ddbdb89/data`" method="get" :data="[['', 0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '297px', left: '1245px'}">
      <digital-roll ref="province-digital" v-if="results" titlePosition="bottom" :content="{title: '省级重点项目', digital: results[1][1]}" :options="{separator: ''}" :titleStyle="{color: '#9dacbe', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{fontSize: '14px', color: '#9dacbe'}" :digitalStyle="{fontSize: '40px', color: '#313c56', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader ref="other" v-slot="{ results: results }" :url="`/v1/components/c15377b9-682a-46d3-ae59-77d35ddbdb89/data`" method="get" :data="[['', 0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '566px', left: '1245px'}">
      <digital-roll ref="other-digital" v-if="results" titlePosition="bottom" :content="{title: '其他', digital: results[2][1]}" :options="{separator: ''}" :titleStyle="{color: '#9dacbe', fontSize: '14px', lineHeight: '1.5'}" :suffixStyle="{fontSize: '14px', color: '#9dacbe'}" :digitalStyle="{fontSize: '40px', color: '#313c56', fontFamily: 'Oswald', lineHeight: '1'}" />
    </data-loader>
    <data-loader :data="[['', 0, 0, 0, 0, 0, 0, 0, 0, 0]]" url="/v1/components/ca576fb4-f69b-41a8-b45f-f34d5ad24854/data" method="get" :style="{width: '457px', height: '344px', position: 'absolute', top: '292px', left: '540px'}">
      <base-map :mapOptions="{center: [113.383285, 38.061188], zoom: 8}" features="none" mapStyle="amap://styles/cca20692c7b4da0b930eadd919d5a3fb" :useMapUi="true" :zoomEnable="false" :resizeEnable="true" :style="{width: '100%', height: '100%', transform: `scale(${1/getMapScale()})`, position: 'absolute', top: '0px', left: '0px'}">
        <regions @area-clicked="(json, area, vm)=>[areaClickedFunc(json, area, vm)]" @area-mouseover="(json, area, vm)=>[areaMouseoverFunc(json, area, vm)]" @area-mouseout="(json, area, vm)=>[areaMouseoutFunc(json, area, vm)]" :areas="areas" :areaStyle="{strokeColor: '#0158ff', strokeWeight: '1', fillColor: 'rgb(1, 88, 255)', fillOpacity: .1}" :areaHoverStyle="{strokeColor: '#0158ff', strokeWeight: '1', fillColor: 'rgba(1, 88, 255)', fillOpacity: .4,}" />
        <marker-point v-for="item in markers" :key="item.id" :marker="item" :markerStyle="{color: '#fff', size: 8, strokeColor: '#0158ff', strokeWidth: 2}" :innerLabelStyle="{color: '#6b7885', fontSize: '10', padding: [2, 4], offset: [6, -7]}" />
        <info-window ref="infowindowRef" :options="{closeWhenClickMap: true, isCustom: true}" />
      </base-map>
    </data-loader>
    <data-loader ref="investment" v-slot="{ results: results }" url="/v1/components/52ef7f5e-8046-4297-9671-cee40e05460c/data" method="get" :data="[[0]]" :style="{width: '860px', height: '280px', position: 'absolute', top: '760px', left: '530px'}">
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
  DigitalRoll,
} from '@byzanteam/vis-components'
import {
  BaseMap,
  Regions,
  MarkerPoint,
  InfoWindow,
} from '@byzanteam/map-ui'
import {
  Donut,
} from '@byzanteam/graphite'

export const vis = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisTable,
    DigitalRoll,
    BaseMap,
    Regions,
    MarkerPoint,
    InfoWindow,
    Donut,
  },

  data () {
    return {
      yangquanGeoJson: yangquanGeoJson,
      counts: [[]],
      craneStates: {
        statusMap: {red: '异常', green: '正常', yellow: '预警'},
        donutMap: {kaigong: '开工', tudi: '土地审批', lixiang: '立项审批'},
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
    },
    markers () {
      return yangquanGeoJson.features.map(item => ({label: item.properties.name, id: item.properties.name, location: item.properties.center}))
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
          <div class="info-title">当年累计投资额: ${json.properties.first} 亿元</div>
          <div class="info-title">同比增速: ${json.properties.second}%</div>
          <div class="info-name">省市重点工程</div>
          <div class="info-title">当年累计投资额: ${json.properties.third} 亿元</div>
          <div class="info-title">完成率: ${json.properties.fourth}%</div>
          <div class="info-name">全年项目库投资</div>
          <div class="info-title">开工率: ${json.properties.fifth}%</div>
          <div class="info-name">新建项目开工</div>
          <div class="info-title">开工率: ${json.properties.sixth}%</div>
          <div class="info-name">国省资金争取</div>
          <div class="info-title">争取资金额: ${json.properties.seventh} 亿元</div>
          <div class="info-name">标准厂房建设</div>
          <div class="info-title">累计建设面积: ${json.properties.eighth} 万平方米</div>
          <div class="info-title">完成率: ${json.properties.nineth}%</div>
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
