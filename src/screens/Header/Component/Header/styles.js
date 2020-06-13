import {StyleSheet, Platform} from 'react-native';
import view from '../../../../theming/view';
import simple from '../../../../theming/simple';
import {Theme} from '../../../../library/functional';

export default Theme.create({
  header: {
    width: simple.screenSize.width - 20,
  },
  mainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Platform.OS === 'ios' ? 10 : 15,
  },
  headerTitleView: {
    ...view.absolute,
    alignItems: 'center',
    justifyContent: 'center',
    left: 40 + 0,
    right: 40 + 0,
    // backgroundColor: 'red',
    // backgroundColor: 'blue',
  },
  iconTitle: {
    width: 148,
    height: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: simple.fontWeight.semibold,
    // color: theme.color.TEXT_HEADER,
    textAlign: 'center',
  },
  internalGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },

  actionView: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 36,
    paddingBottom: 10,
    paddingTop: 0,
    zIndex: 2,
    // backgroundColor: 'blue',
  },
  leftActionIcon: {
    width: 16,
    height: 20,
    tintColor: 'white',
    backgroundColor: undefined,
  },
  rightActionIcon: {
    width: 24,
    height: 22,
    tintColor: 'white',
    backgroundColor: undefined,
  },
  actionText: {
    fontSize: 10,
    fontWeight: simple.fontWeight.bold,
    // color: theme.color.MAIN,
    paddingRight: 16,
  },
  textScreen: {
    fontSize: 15,
    // color: BLACK,
  },
  absolute: {
    ...view.absolute,
  },
});
