import {I} from '../library';
import {TAB_ONE, TAB_TWO} from './screenName';

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
                // icon: IconSources.SEARCH,
                text: I.text('Проекты'),
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
                // icon: IconSources.CHAT,
                text: I.text('Инфо'),
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
