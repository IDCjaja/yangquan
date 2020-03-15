const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'new-project',
  component: '@byzanteam/vis-components/data-loader',
  position: [1565, 690],
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
        $data: "results.map(item => { return {label: item[1], amount: item[0] } } )",
        labelKey: 'label',
        valueKey: 'amount',
        $percentage: true,
        // $hideLabel: true,
        $theme: {
          background: 'transparent',
          $colors: "['#1B74EF', '#15C689', '#FFBA08', '#BB4430']",
          whitespace: 'nowrap'
        },
        $legendOptions: {
          size: '70px',
          $align: "['start', 'center']",
          layout: 'vertical',
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
