const { yangquanGeoJson }= require('../yangquanGeoJson');

const allYear = require('./kpi_all_year_investment_digital');
const fixedInvestment = require('./kpi_fixed_investment_digital');
const fixedSpeed = require('./kpi_fixed_speed');
const provinceMajor = require('./kpi_province_major_project_digital');
const provinceSpeed = require('./kpi_province_speed');
const funds = require('./kpi_funds_digital');
const newProject = require('./kpi_new_project_digital');
const workShop = require('./kpi_workshop_digital');
const workShopSpeed = require('./kpi_workshop_speed');
const donut = require('./project_class_donut');
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
    },
    {
      id: 'donutMap',
      value:{
        'kaigong': '开工',
        'tudi': '土地审批',
        'lixiang': '立项审批'
      }
    }
  ],

  components: [
    // 各个区域标题及外层border盒子
    {
      id: 'six-title-icon',
      component: 'div',
      position: [1450, 62],
      props: {
        $style: {
          height: '20px',
          width: '4px',
          borderRadius: '2px',
          backgroundColor: '#0158ff',
        }
      }
    },
    {
      id: 'six-title-text',
      component: 'div',
      content: '六大指标',
      position: [1466, 62],
      props: {
        $style: {
          fontsize: '20px',
          color: '#6b7885',
          lineHeight: 1,
          fontWeight: 500
        }
      }
    },
    {
      id: 'six-title-line',
      component: 'div',
      position: [1450, 104],
      props: {
        $style: {
          width: '410px',
          height: '1px',
          backgroundColor: '#ECF1F3'
        }
      }
    },
    {
      id: 'six-border-box',
      component: 'div',
      position: [1430, 40],
      props: {
        $style: {
          border: '1px solid #ecf1f3',
          borderRadius: '8px',
          width: '450px',
          height: '633px'
        }
      }
    },

    {
      id: 'project-title-icon',
      component: 'div',
      position: [60, 294],
      props: {
        $style: {
          height: '20px',
          width: '4px',
          borderRadius: '2px',
          backgroundColor: '#0158ff',
        }
      }
    },
    {
      id: 'project-title-text',
      component: 'div',
      content: '项目分布情况',
      position: [76, 294],
      props: {
        $style: {
          fontsize: '20px',
          color: '#6b7885',
          lineHeight: 1,
          fontWeight: 500
        }
      }
    },
    {
      id: 'project-title-line',
      component: 'div',
      position: [60, 336],
      props: {
        $style: {
          width: '410px',
          height: '1px',
          backgroundColor: '#ECF1F3'
        }
      }
    },
    {
      id: 'project-border-box',
      component: 'div',
      position: [40, 272],
      props: {
        $style: {
          border: '1px solid #ecf1f3',
          borderRadius: '8px',
          width: '450px',
          height: '384px'
        }
      }
    },

    {
      id: 'new-title-icon',
      component: 'div',
      position: [60, 698],
      props: {
        $style: {
          height: '20px',
          width: '4px',
          borderRadius: '2px',
          backgroundColor: '#0158ff',
        }
      }
    },
    {
      id: 'new-title-text',
      component: 'div',
      content: '新建项目进度分布',
      position: [76, 698],
      props: {
        $style: {
          fontsize: '20px',
          color: '#6b7885',
          lineHeight: 1,
          fontWeight: 500
        }
      }
    },
    {
      id: 'new-title-line',
      component: 'div',
      position: [60, 740],
      props: {
        $style: {
          width: '410px',
          height: '1px',
          backgroundColor: '#ECF1F3'
        }
      }
    },
    {
      id: 'new-border-box',
      component: 'div',
      position: [40, 676],
      props: {
        $style: {
          border: '1px solid #ecf1f3',
          borderRadius: '8px',
          width: '450px',
          height: '384px'
        }
      }
    },

    {
      id: 'city-title-icon',
      component: 'div',
      position: [1450, 715],
      props: {
        $style: {
          height: '20px',
          width: '4px',
          borderRadius: '2px',
          backgroundColor: '#0158ff',
        }
      }
    },
    {
      id: 'city-title-text',
      component: 'div',
      content: '市级项目概括',
      position: [1466, 715],
      props: {
        $style: {
          fontsize: '20px',
          color: '#6b7885',
          lineHeight: 1,
          fontWeight: 500
        }
      }
    },
    {
      id: 'city-title-line',
      component: 'div',
      position: [1450, 758],
      props: {
        $style: {
          width: '410px',
          height: '1px',
          backgroundColor: '#ECF1F3'
        }
      }
    },
    {
      id: 'city-border-box',
      component: 'div',
      position: [1430, 693],
      props: {
        $style: {
          border: '1px solid #ecf1f3',
          borderRadius: '8px',
          width: '450px',
          height: '367px'
        }
      }
    },

    // 六大指标图片
    {
      id: 'banner',
      component: 'div',
      position: [40, 40],
      props:{
        $style: {
          width: '1370px',
          height: '212px',
        },
      },
      children: [
        {
          id: 'bannerImg',
          component: 'img',
          props: {
            $style: {
              height: '100%',
            },
            src: '/yqfw/image/image_banner_bg.png'
          }
        }
      ]
    },
    {
      id: 'fixed-img-box',
      component: 'div',
      position: [1450, 125],
      props: {
        $style: {
          width: '60px',
          height: '60px',
          borderRadius: '6px',
          backgroundColor: '#0158ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      children: [
        {
          id: 'fixed-img',
          component: 'img',
          props: {
            $style: {
              height: '24px'
            },
            src: '/yqfw/image/icon 04.svg'
          }
        }
      ]
    },
    {
      id: 'province-img-box',
      component: 'div',
      position: [1450, 218],
      props: {
        $style: {
          width: '60px',
          height: '60px',
          borderRadius: '6px',
          backgroundColor: '#efc11e',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      children: [
        {
          id: 'province-img',
          component: 'img',
          props: {
            $style: {
              height: '24px'
            },
            src: '/yqfw/image/icon 05.svg'
          }
        }
      ]
    },
    {
      id: 'all-year-img-box',
      component: 'div',
      position: [1450, 311],
      props: {
        $style: {
          width: '60px',
          height: '60px',
          borderRadius: '6px',
          backgroundColor: '#fd5080',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      children: [
        {
          id: 'all-year-img',
          component: 'img',
          props: {
            $style: {
              height: '24px'
            },
            src: '/yqfw/image/icon 06.svg'
          }
        }
      ]
    },
    {
      id: 'new-project-img-box',
      component: 'div',
      position: [1450, 404],
      props: {
        $style: {
          width: '60px',
          height: '60px',
          borderRadius: '6px',
          backgroundColor: '#7FC88E',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      children: [
        {
          id: 'new-project-img',
          component: 'img',
          props: {
            $style: {
              height: '24px'
            },
            src: '/yqfw/image/icon 07.svg'
          }
        }
      ]
    },
    {
      id: 'funds-img-box',
      component: 'div',
      position: [1450, 497],
      props: {
        $style: {
          width: '60px',
          height: '60px',
          borderRadius: '6px',
          backgroundColor: '#0158ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      children: [
        {
          id: 'funds-img',
          component: 'img',
          props: {
            $style: {
              height: '24px'
            },
            src: '/yqfw/image/icon 04.svg'
          }
        }
      ]
    },
    {
      id: 'work-box',
      component: 'div',
      position: [1450, 590],
      props: {
        $style: {
          width: '60px',
          height: '60px',
          borderRadius: '6px',
          backgroundColor: '#fd5080',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      children: [
        {
          id: 'work-img',
          component: 'img',
          props: {
            $style: {
              height: '24px'
            },
            src: '/yqfw/image/icon 08.svg'
          }
        }
      ]
    },
    // 六大指标标题
    {
      id: 'fixed-title',
      component: 'div',
      position: [1538, 132],
      content: '固定资产投资',
      props: {
        $style: {
          color: '#9DACBE',
          fontsize: '18px',
          fontWeight: 500,
          lineHeight: 1
        }
      }
    },
    {
      id: 'province-title',
      component: 'div',
      position: [1538, 225],
      content: '省市重点工程',
      props: {
        $style: {
          color: '#9DACBE',
          fontsize: '18px',
          fontWeight: 500,
          lineHeight: 1
        }
      }
    },
    {
      id: 'all-year-title',
      component: 'div',
      position: [1538, 318],
      content: '全年项目库投资',
      props: {
        $style: {
          color: '#9DACBE',
          fontsize: '18px',
          fontWeight: 500,
          lineHeight: 1
        }
      }
    },
    {
      id: 'new-project--title',
      component: 'div',
      position: [1538, 411],
      content: '省市重点工程',
      props: {
        $style: {
          color: '#9DACBE',
          fontsize: '18px',
          fontWeight: 500,
          lineHeight: 1
        }
      }
    },
    {
      id: 'funds-title',
      component: 'div',
      position: [1538, 504],
      content: '国省资金争取',
      props: {
        $style: {
          color: '#9DACBE',
          fontsize: '18px',
          fontWeight: 500,
          lineHeight: 1
        }
      }
    },
    {
      id: 'work-title',
      component: 'div',
      position: [1538, 597],
      content: '标准厂房建设',
      props: {
        $style: {
          color: '#9DACBE',
          fontsize: '18px',
          fontWeight: 500,
          lineHeight: 1
        }
      }
    },

    allYear,
    fixedInvestment,
    fixedSpeed,
    provinceMajor,
    provinceSpeed,
    funds,
    newProject,
    workShop,
    workShopSpeed,
    donut,
  ],
};
