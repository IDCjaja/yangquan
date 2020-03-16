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
        $options: "options",
        $style: {
          width: '100%',
          height: '100%',
        }
      },
    }
  ]
}
