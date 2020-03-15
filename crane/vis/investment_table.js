const {normal_digital_style} = require('../share');

module.exports = {
  id: 'investment',
  component: '@byzanteam/vis-components/data-loader',
  position: [63, 121],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/89b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
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
      component: 'element-ui/table',
      props: {
        'v-if': 'results',
        $stripe: true,
        $data:''
      }
    },
  ]
};
