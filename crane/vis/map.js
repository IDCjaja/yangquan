module.exports = {
  id: 'chartDataRef',
  component: '@byzanteam/vis-components/data-loader',
  position: [510, 272],
  props: {
    $data: "[['', 0, 0, 0, 0, 0, 0, 0, 0, 0]]",
    method: 'get',
    $style: {
      width: '587px',
      height: '384px'
    }
  },
  children: [
    {
      id: 'chartRef',
      component: 'v-chart',
      position: [0, 0],
      props: {
        $options: {
          backgroundColor: 'transparent',
          geo: {
            map: 'yangquan',
            label: {
              normal: {
                $show: false,
                color: '#fff',
                $borderRadius: 4,
                $padding: [8, 8],
                backgroundColor: 'rgba(50, 50, 50, 0.6)',
                align: 'left',
                rich: {
                  a: {
                    $width: 120,
                    align: 'left',
                    $lineHeight: 18,
                    fontFamily: 'Oswald-Regular'
                  },
                },
                $formatter: 'geoLabelHoverFormatter'
              },
              emphasis: {
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                areaColor: 'rgba(35, 173, 120, .1)',
                borderColor: 'rgba(35, 173, 120, .4)',
                $borderWidth: 1,
                borderType: 'dash',
              },
              emphasis: {
                areaColor: 'rgba(35, 173, 120, .9)',
              }
            },
            z: 1,
          },
          $series: "[{type: 'scatter', coordinateSystem: 'geo', data: [], symbolSize: 3, itemStyle: {normal: {color: '#c05746'}}}, {type: 'scatter', coordinateSystem: 'geo', data: yangquanGeoJson.features.map(feature => ({name: feature.properties.name, value: feature.properties.center})), itemStyle: {normal: {color: 'transparent'}}, label: {formatter: '{b}', show: true, color: '#333333', fontSize: 10}}]"
        },
        $style: {
          width: '100%',
          height: '100%',
        }
      },
    }
  ]
}
