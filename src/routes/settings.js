import {Theme} from '../library/functional';

/** Настройки по умолчанию для Wix тнавигации */
export const settingsDefault = () => {
  const colors = Theme.getColors();

  return {
    //   layout: {
    //     direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
    //     backgroundColor: 'transparent',
    //     componentBackgroundColor: 'transparent',
    //     orientation: ['portrait'],
    //   },
    // statusBar: {
    //   drawBehind: true,
    //   style: 'dark',
    //   backgroundColor: 'rgba(255,255,255,0)',
    // },

    statusBar: {
      style: 'light',
      backgroundColor: null,
      visible: true,
    },
    bottomTabs: {
      // currentTabIndex: 0,
      animate: true,
      // animate: true,
      // android
      // elevation:0,
      titleDisplayMode: 'alwaysShow',
      // ios
      // barStyle: 'default', // | 'black',
      translucent: false,
      hideShadow: false,

      backgroundColor: 'white',
      // backgroundColor: Theme.getColors().BACKGROUND_BOTTOM_BAR,
    },
    bottomTab: {
      textColor: colors.primaryText,
      iconColor: colors.primaryText,
      selectedTextColor: colors.primary, //Theme.getColors().primary,
      selectedIconColor: colors.primary, //Theme.getColors().primary,
      // fontFamily: 'SF Pro Text',
      // fontFamily: 'Helvetica',
      fontWeight: 'semibold',
      fontSize: 10,
      // android
      selectedFontSize: 10,
      // ios
      iconInsets: {top: 0, left: 0, bottom: 0, right: 0},
      disableIconTint: true,
    },
    //   topBar: {
    //     visible: false,
    //     drawBehind: true,
    //     animate: true,
    //     hideOnScroll: false,
    //     noBorder: true,
    //     borderHeight: 0,
    //     elevation: 0, // TopBar elevation in dp
    //     height: 56,

    //     // title: {
    //     //   height: 56,
    //     //   component: {
    //     //     name: 'header',
    //     //     alignment: 'center',
    //     //   },
    //     // },
    //     // backButton: {
    //     //   icon: undefined,
    //     //   visible: false,
    //     // },
    //     // background: {
    //     //   color: 'rgba(0,0,0,0)', // Theme.getColors().HEADER,
    //     // },
    //   },
    //   overlay: {
    //     interceptTouchOutside: false,
    //     handleKeyboardEvents: false,
    //   },
    //   animations: {
    //     showModal: {
    //       waitForRender: true,
    //     },
    //     push: {
    //       waitForRender: true,
    //     },
    //   },

    modalPresentationStyle: 'default',
  };
};

export const settingDark = () => {
  const colors = Theme.getColors();

  return {
    statusBar: {
      // drawBehind: true,
      style: 'light',
      // backgroundColor: 'rgba(255,255,255,0)',
    },
    bottomTabs: {
      backgroundColor: colors.background,
    },
    topBar: {
      background: {
        color: colors.background,
      },
      title: {
        color: colors.primaryText,
      },
    },

    bottomTab: {
      textColor: colors.primaryText,
      iconColor: colors.primaryText,
      selectedTextColor: colors.primary, //Theme.getColors().primary,
      selectedIconColor: colors.primary, //Theme.getColors().primary,
      // fontFamily: 'SF Pro Text',
      // fontFamily: 'Helvetica',
      fontWeight: 'semibold',
      fontSize: 10,
      // android
      selectedFontSize: 10,
      // ios
      iconInsets: {top: 0, left: 0, bottom: 0, right: 0},
      disableIconTint: true,
    },
  };
};
