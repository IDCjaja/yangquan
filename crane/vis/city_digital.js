const {normal_digital_style} = require('../share');

module.exports = {
  id: 'city',
  component: '@byzanteam/vis-components/data-loader',
  position: [1245, 431],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/c15377b9-682a-46d3-ae59-77d35ddbdb89/data`",
    method: 'get',
    $data: "[['', 0]]",
    $style: {
      width: '194px',
      height: '44px',
    },
  },
  children: [
    {
      id: 'city-digital',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        // 'v-if': 'results',
        titlePosition: 'bottom',
        $content: {
          title: '市级重点项目',
          $digital: 'results[0][1]',
        },
        $options: {
          separator: '',
        },
        ...normal_digital_style,
      }
    },
  ]
};
