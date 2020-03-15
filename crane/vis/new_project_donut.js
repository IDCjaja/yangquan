const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'new-project',
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 740],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/1314138c-beef-43b1-ae74-989d98c73f5e/data`",
    method: 'get',
    $data: "[{label: '新建项目进度', amount: 12}]",
    $style: {
      width: '450px',
      height: '324px',
    },
  },
  children: [
    {
      id: 'new-project-donut',
      component: '@byzanteam/graphite/donut',
      props: {
        'v-if': 'results',
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
          $align: "['center', 'start']",
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
};
