module.exports = {
  route: {
    name: 'vis',
    path: 'vis',
  },

  title: '考勤看板',

  states: [],

  components: [
    {
      component: 'div',
      props: {
        class: 'carousel-item',
        $style: {
          $transform: "`translateX(${1920 * (0 - craneStates.pageIndex)}px)`"
        }
      },
      children: [
        {
          id: 'datetime-picker-wrapper',
          component: 'div',
          position: [],
          children: [
            {
              id: 'datetime-picker',
              component: 'element-ui/date-picker',
              props: {
                type: 'daterange',
                valueFormat: 'yyyy-MM-dd',
                format: 'yyyy-MM-dd',
                size: 'small',
                $unlinkPanels: 'true',
                $pickerOptions: {
                  $disabledDate: 'disableDateFunc'
                },
                'v-model': 'craneStates.dateRange',
                'start-placeholder': '开始日期',
                'end-placeholder': '结束日期',
                'range-separator': ' ',
              },
            },
          ],
        },
      ]
    },
  ],
};
