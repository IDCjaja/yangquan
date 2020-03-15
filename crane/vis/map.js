module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  exports: {
    results: 'results',
  },
  props: {
    $data: "[['', 0, [0, 0]]]",
    url: '/v1/components/d160c22f-c088-4173-8a6a-af385d64e09f/data',
    method: 'get',
  },
  children: [
    {
      component: '@byzanteam/map-ui/base-map',
      position: [0, 0],
      props: {
        $mapOptions: '{center: [113.583285,37.861188], zoom: 15, zooms: [15, 20]}',
        mapStyle: 'amap://styles/01cd33f7f858c589201c06481d43ff47',
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
            $areas: 'craneStates.geojson',
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
