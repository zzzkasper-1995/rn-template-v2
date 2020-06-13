import {I} from '../library/functional';
import {TAB_ONE, TAB_TWO, TAB_MAIN, STACK_ONE, STACK_TWO} from './screenName';
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
                text: I.text('Таб1'),
              },
            },
            children: [
              {
                component: {
                  id: TAB_ONE,
                  name: TAB_ONE,
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
                text: I.text('Таб2'),
              },
            },
            children: [
              {
                component: {
                  id: TAB_TWO,
                  name: TAB_TWO,
                },
              },
            ],
          },
        },
      ],
    },
  },
};
