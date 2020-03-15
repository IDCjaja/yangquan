const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'new-project',
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 740],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/1accfeec-bb91-41ca-9f4c-d53662aea01e/data`",
    method: 'get',
    $data: "[{label: '新建项目进度', amount: 12}]",
    $style: {
      width: '300px',
      height: '310px',
    },
  },
  children: [
    {
      id: 'new-project-donut',
      component: '@byzanteam/graphite/donut',
      props: {
        'v-if': 'results',
        $data: "results.map(item => { return {label: item[0], amount: item[1] } } )",
        labelKey: 'label',
        valueKey: 'amount',
        $percentage: true,
        $innerRadius: 0.68,
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
