import {I} from '../library/functional';
import {
  TAB_ONE,
  TAB_TWO,
  TAB_MAIN,
  STACK_ONE,
  STACK_TWO,
  HEADER,
} from './screenName';
import assets from '../assets';

/** Базовые деревья навигации */
export const rootMainApp = {
  root: {
    bottomTabs: {
      id: TAB_MAIN,
      // options: {
      // },
      children: [
        {
          stack: {
            id: STACK_ONE,
            options: {
              bottomTab: {
                icon: assets.CHAT,
                text: I.text('Coins'),
              },
            },
            children: [
              {
                component: {
                  id: TAB_ONE,
                  name: TAB_ONE,
                  options: {
                    topBar: {
                      visible: true,
                      drawBehind: true,
                      animate: true,
                      hideOnScroll: false,
                      height: 56,
                      title: {
                        height: 56,
                        component: {
                          name: HEADER,
                          passProps: {
                            title: {
                              text: I.text('Coins'),
                              // icon: assets.LOGO_TEXT,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
        },
        {
          stack: {
            id: STACK_TWO,
            options: {
              bottomTab: {
                icon: assets.PROFILE,
                text: I.text('Settings'),
              },
            },
            children: [
              {
                component: {
                  id: TAB_TWO,
                  name: TAB_TWO,
                  options: {
                    topBar: {
                      visible: true,
                      drawBehind: true,
                      animate: true,
                      hideOnScroll: false,
                      height: 56,
                      title: {
                        height: 56,
                        component: {
                          name: HEADER,
                          passProps: {
                            title: {
                              text: I.text('Settings'),
                              // icon: assets.LOGO_TEXT,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
};
