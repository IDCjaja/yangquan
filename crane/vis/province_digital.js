const {normal_digital_style} = require('../share');

module.exports = {
  id: 'province',
  component: '@byzanteam/vis-components/data-loader',
  position: [1245, 297],
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
      id: 'province-digital',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        titlePosition: 'bottom',
        $content: {
          title: '省级重点项目',
          $digital: 'results[1][1]',
        },
        $options: {
          separator: '',
        },
        ...normal_digital_style,
      }
    },
  ]
};
