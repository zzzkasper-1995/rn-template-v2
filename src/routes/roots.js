import {I} from '../library';
import {TAB_ONE, TAB_TWO} from './screenName';
import assets from '../assets';

export const rootMainApp = {
  root: {
    bottomTabs: {
      id: 'mainTab',
      // options: {
      // },
      children: [
        {
          stack: {
            id: 'projectStack',
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
            id: 'infoStack',
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
