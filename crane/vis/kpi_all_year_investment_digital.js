const {normal_digital_style} = require('../share');

module.exports = {
  id: 'all-year-investment',
  component: '@byzanteam/vis-components/data-loader',
  position: [63, 121],
  exports: {
    results: 'results',
  },

  props: {
    $url: "/v1/components/bb755175-12b0-4868-bf65-bef814543ebb/data",
    method: 'get',
    $data: "[[0]]",
    $style: {
      width: '194px',
      height: '44px',
    },
  },
  children: [
    {
      id: 'all-year-investment-digital',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '开工率',
          $digital: 'results[0][4]',
          suffix: '%',
        },
        $options: {
          separator: '',
        },
        ...normal_digital_style,
      }
    },
  ]
};
