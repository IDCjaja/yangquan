const {normal_digital_style} = require('../share');

module.exports = {
  id: 'investment',
  component: '@byzanteam/vis-components/data-loader',
  position: [530, 760],
  exports: {
    results: 'results',
  },
  props: {
    url: "/v1/components/52ef7f5e-8046-4297-9671-cee40e05460c/data",
    method: 'get',
    $data: "[[0]]",
    $style: {
      width: '860px',
      height: '280px'
    },
  },
  children: [
    {
      id: 'investment-table',
      component: '@byzanteam/vis-components/vis-table',
      props: {
        'v-if': 'results',
        stripe: 'row',
        $headers: "[{key: 'name', title: '项目名称'}, {key: 'finished', title: '已完成投资额'}, {key: 'total', title: '项目总投资'}, {key: 'percetage', title: '已投资比率'}, {key: 'status', title: '预警标识'}]",
        $data: "results.map(item => ({name: item[0], finished: `${item[1]} 亿元`, total: `${item[2]} 亿元`, percetage: `${item[3]}%`, status: item[4]}))"
      },
      children: [
        {
          component: 'template',
          exports: {
            cell: 'cell',
            columnKey: 'columnKey'
          },
          children: [
            {
              component: 'span',
              props: {
                class: 'badge',
                $class: 'cell'
              },
              content: '{{craneStates.statusMap[cell]}}',
              directive: {
                if: "columnKey === 'status'"
              }
            },
            {
              component: 'span',
              directive: {
                else: true,
              },
              content: '{{cell}}',
            }
          ]
        },
      ]
    },
  ]
};
