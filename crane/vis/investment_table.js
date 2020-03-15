const {normal_digital_style} = require('../share');

module.exports = {
  id: 'investment',
  component: '@byzanteam/vis-components/data-loader',
  position: [63, 121],
  exports: {
    results: 'results',
  },

  props: {
    url: "/v1/components/52ef7f5e-8046-4297-9671-cee40e05460c/data",
    method: 'get',
    $data: "[[0]]",
    $style: {
      width: '194px',
      height: '44px',
    },
  },
  children: [
    {
      id: 'investment-table',
      component: '@byzanteam/vis-components/vis-table',
      props: {
        'v-if': 'results',
        $stripe: true,
        $data:''
      }
    },
  ]
};
