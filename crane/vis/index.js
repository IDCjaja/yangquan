const investmentTable = require('./investment_table')
const map = require('./base_map')
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
const cityDigital = require('./city_digital');
const provinceDigital = require('./province_digital');
const otherDigital = require('./other_digital');
const newProjectClass = require('./new_project_donut');

module.exports = {
  route: {
    name: 'vis',
    path: 'vis',
  },

  title: '阳泉重点项目管理平台',

  states: [
    {
      id: 'statusMap',
      value: {
        red: '异常',
        green: '正常',
        yellow: '预警'
      }
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
      position: [1466, 64],
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
      position: [76, 296],
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
      position: [76, 700],
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
      position: [1466, 717],
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
    {
      id: 'city-content',
      component: 'div',
      position: [1450, 778],
      content: '年初，全市初步计划实施项目318个，总投资1557.5亿元，年度计划投资267.5亿元。为进一步夯实全市投资基础，确保顺利完成年度投资任务，我们于4月、5月多次组织各县区对今年建设项目库进行对接充实。截至5月底，全市建设项目360个，年度计划投资299.85亿元。其中，基础设施类项目58个，年度计划投资61.3亿元，占全年计划投资的20.4%；产业类项目179个，年度计划投资163.15元，占全年计划投资的54.4%；社会民生类项目123个，年度计划投资75.39亿元，占全年计划投资的25.2%。',
      props: {
        $style: {
          width: '410px',
          height: '287px',
          fontSize: '14px',
          color: '#313c56',
          lineHeight: 2,


        }
      }
    },

    {
      id: 'new-title-icon',
      component: 'div',
      position: [530, 697],
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
      content: '投资预计分析',
      position: [546, 698],
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
      position: [530, 740],
      props: {
        $style: {
          width: '860px',
          height: '1px',
          backgroundColor: '#ECF1F3'
        }
      }
    },
    {
      id: 'new-border-box',
      component: 'div',
      position: [510, 676],
      props: {
        $style: {
          border: '1px solid #ecf1f3',
          borderRadius: '8px',
          width: '900px',
          height: '384px'
        }
      }
    },

    {
      id: 'province-border-box',
      component: 'div',
      position: [1117, 272],
      props: {
        $style: {
          border: '1px solid #ecf1f3',
          borderRadius: '8px',
          width: '294px',
          height: '114px'
        }
      }
    },
    {
      id: 'city-border-box',
      component: 'div',
      position: [1117, 406],
      props: {
        $style: {
          border: '1px solid #ecf1f3',
          borderRadius: '8px',
          width: '294px',
          height: '114px'
        }
      }
    },
    {
      id: 'other-border-box',
      component: 'div',
      position: [1117, 541],
      props: {
        $style: {
          border: '1px solid #ecf1f3',
          borderRadius: '8px',
          width: '294px',
          height: '114px'
        }
      }
    },

    // digital图标; 六大指标图片，和省市级的3个
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

    {
      id: 'province-box',
      component: 'div',
      position: [1157, 300],
      props: {
        $style: {
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          backgroundColor: '#0158ff0D',
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
            src: '/yqfw/image/icon 01.svg'
          }
        }
      ]
    },
    {
      id: 'city-box',
      component: 'div',
      position: [1157, 434],
      props: {
        $style: {
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          backgroundColor: '#EFC11E0D',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      children: [
        {
          id: 'city-img',
          component: 'img',
          props: {
            $style: {
              height: '24px'
            },
            src: '/yqfw/image/icon 02.svg'
          }
        }
      ]
    },
    {
      id: 'other-box',
      component: 'div',
      position: [1157, 569],
      props: {
        $style: {
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          backgroundColor: '#fd50800D',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      children: [
        {
          id: 'other-img',
          component: 'img',
          props: {
            $style: {
              height: '24px'
            },
            src: '/yqfw/image/icon 03.svg'
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
    cityDigital,
    provinceDigital,
    otherDigital,
    map,
    investmentTable,
    newProjectClass
  ],
};
