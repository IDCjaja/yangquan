const {kpi_digital_style} = require('../share');

module.exports = {
  id: 'funds',
  component: '@byzanteam/vis-components/data-loader',
  position: [1538, 530],
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
      id: 'funds-digital',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        // 'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '争取资金额',
          $digital: 'Number(results[0][6])',
          suffix: '亿元',
        },
        $options: {
          separator: '',
        },
        ...kpi_digital_style,
      }
    },
  ]
};
