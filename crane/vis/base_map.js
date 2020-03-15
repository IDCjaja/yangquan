module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [510, 272],
  exports: {
    results: 'results',
  },
  props: {
    $data: "[['', 0, 0, 0, 0, 0, 0, 0, 0, 0]]",
    url: '/v1/components/ca576fb4-f69b-41a8-b45f-f34d5ad24854/data',
    method: 'get',
    $style: {
      width: '587px',
      height: '384px'
    }
  },
  children: [
    {
      component: '@byzanteam/map-ui/base-map',
      position: [0, 0],
      props: {
        $mapOptions: '{center: [113.383285, 38.061188], zoom: 9}',
        features: 'none',
        mapStyle: 'amap://styles/cca20692c7b4da0b930eadd919d5a3fb',
        $useMapUi: 'true',
        $style: {
          width: '100%',
          height: '100%',
        }
      },
      children: [
        {
          component: '@byzanteam/map-ui/regions',
          props: {
            $areas: 'yangquanGeoJson.features',
            $areaStyle: {
              strokeColor: '#32c5ff',
              strokeWeight: 2,
              fillColor: '#ffffff',
            }
          },
          events: {
            'area-clicked': {
              actions: ["areaClickFunc"],
            },
          },
        },
      ]
    }
  ]
}
