const { yangquanGeoJson }= require('../yangquan');

const map = require('./map');
module.exports = {
  route: {
    name: 'vis',
    path: 'vis',
  },

  title: '考勤看板',

  states: [
    {
      id: 'geojson',
      value: [yangquanGeoJson]
    }
  ],

  components: [],
};
