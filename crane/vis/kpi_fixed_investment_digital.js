const {normal_digital_style} = require('../share');

module.exports = {
  id: 'fixed-investment',
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
      id: 'fixed-investment-digital',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '当年累计投资额',
          $digital: 'results[0][1]',
          suffix: '亿元',
        },
        $options: {
          separator: '',
        },
        ...normal_digital_style,
      }
    },
  ]
};
