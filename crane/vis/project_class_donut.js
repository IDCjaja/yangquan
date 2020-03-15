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
    $url: "`/v1/components/1accfeec-bb91-41ca-9f4c-d53662aea01e/data`",
    method: 'get',
    $data: "[[0]]",
    $style: {
      width: '450px',
      height: '324px',
    },
  },
  children: [
    {
      id: 'project-class-content',
      component: '@byzanteam/graphite/donut',
      props: {
        'v-if': 'results',
        $data: "results.map(item => { return {label: item[0], amount: item[1] } } )",
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
