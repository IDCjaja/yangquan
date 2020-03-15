const {normal_digital_style} = require('../share');

module.exports = {
  id: 'other',
  component: '@byzanteam/vis-components/data-loader',
  position: [63, 191],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/c15377b9-682a-46d3-ae59-77d35ddbdb89/data`",
    method: 'get',
    $data: "[[0]]",
    $style: {
      width: '194px',
      height: '44px',
    },
  },
  children: [
    {
      id: 'other-digital',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '其他',
          $digital: 'results[0][2][2]',
        },
        $options: {
          separator: '',
        },
        ...normal_digital_style,
      }
    },
  ]
};
