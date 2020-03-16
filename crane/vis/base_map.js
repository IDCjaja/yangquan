module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [540, 292],
  props: {
    $data: "[['', 0, 0, 0, 0, 0, 0, 0, 0, 0]]",
    url: '/v1/components/ca576fb4-f69b-41a8-b45f-f34d5ad24854/data',
    method: 'get',
    $style: {
      width: '457px',
      height: '344px',
    }
  },
  children: [
    {
      component: '@byzanteam/map-ui/base-map',
      position: [0, 0],
      props: {
        $mapOptions: '{center: [113.383285, 38.061188], zoom: 8}',
        features: 'none',
        mapStyle: 'amap://styles/cca20692c7b4da0b930eadd919d5a3fb',
        $useMapUi: 'true',
        $zoomEnable: false,
        $resizeEnable: true,
        $style: {
          width: '100%',
          height: '100%',
          $transform: "`scale(${1/getMapScale()})`",
        }
      },
      children: [
        {
          component: '@byzanteam/map-ui/regions',
          props: {
            $areas: 'areas',
            $areaStyle: {
              strokeColor: '#0158ff',
              strokeWeight: 1,
              fillColor: 'rgb(1, 88, 255)',
              $fillOpacity: '.1'
            },
            $areaHoverStyle: {
              strokeColor: '#0158ff',
              strokeWeight: 1,
              fillColor: 'rgb(1, 88, 255)',
              $fillOpacity: '.4'
            }
          },
          events: {
            'area-clicked': {
              params: ['json', 'area', 'vm'],
              actions: ["areaClickedFunc(json, area, vm)"],
            },
            'area-mouseover': {
              params: ['json', 'area', 'vm'],
              actions: ["areaMouseoverFunc(json, area, vm)"],
            },
            'area-mouseout': {
              params: ['json', 'area', 'vm'],
              actions: ["areaMouseoutFunc(json, area, vm)"],
            },
          },
        },
        {
          id: 'infowindowRef',
          component: '@byzanteam/map-ui/info-window',
          props: {
            $options: {
              $closeWhenClickMap: true,
              $isCustom: true
            }
          }
        }
      ]
    }
  ]
}
