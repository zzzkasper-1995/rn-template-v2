import {I} from '../library';

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
                  id: 'projectList',
                  name: 'projectList',
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
                  id: 'projectList',
                  name: 'projectList',
                },
              },
            ],
          },
        },
      ],
    },
  },
};
