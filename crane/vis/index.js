const investmentTable = require('./investment_table')
const map = require('./map')

module.exports = {
  route: {
    name: 'vis',
    path: 'vis',
  },

  title: '考勤看板',

  states: [
    {
      id: 'statusMap',
      value: {
        red: '异常',
        green: '正常',
        yellow: '预警'
      }
    }
  ],

  components: [
    map,
    investmentTable
  ],
};
