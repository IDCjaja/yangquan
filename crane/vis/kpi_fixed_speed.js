const {kpi_digital_style} = require('../share');

module.exports = {
  id: 'fixed-speed',
  component: '@byzanteam/vis-components/data-loader',
  position: [1717, 158],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data`",
    method: 'get',
    $data: "[[0,0,0,0,0,0,0,0,0]]",
    $style: {
      width: '194px',
      height: '44px',
    },
  },
  children: [
    {
      id: 'fixed-investment-speed-digital',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        // 'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '同比增速',
          $digital: 'Number(results[0][2])',
          suffix: '%',
        },
        $options: {
          separator: '',
        },
        ...kpi_digital_style,
      }
    },
  ]
};
