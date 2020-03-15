const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'project-class',
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 336],
  exports: {
    results: 'results',
    response: 'response',
  },
  props: {
    $url: "`/v1/components/1314138c-beef-43b1-ae74-989d98c73f5e/data`",
    method: 'get',
    $data: "[[0]]",
    $style: {
      width: '300px',
      height: '310px',
    },
  },
  children: [
    {
      id: 'project-class-content',
      component: '@byzanteam/graphite/donut',
      props: {
        // 'v-if': 'results',
        $data: "results.map((item, index) => ({label: craneStates.donutMap[response.schema[index].field], amount: item }) )",
        labelKey: 'label',
        valueKey: 'amount',
        $percentage: true,
        $innerRadius: 0.48,
        // $hideLabel: true,
        $theme: {
          background: 'transparent',
          $colors: "['#EFC11E', '#0158FF']",
          whitespace: 'nowrap'
        },
        $legendOptions: {
          size: '70px',
          $align: "['center', 'Fd5080', 'start']",
          layout: 'horizontal',
          $label: {
            fill: '#2E2E2E',
            $size: 14,
          },
          position: 'bottom',
          // $offset: "[80, 0]",
        },
        ...chartTooltipOptions
      },
    },
  ],
}
