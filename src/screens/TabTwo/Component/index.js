import React from 'react';
import {
  Log,
  Theme,
  ModuleWrapper,
  Navigation,
} from '../../../library/functional';
import {
  Switch,
  Button,
  ScrollView,
  Text,
  View,
} from '../../../library/basicComponents';
import styles from './styles';
import {TextStyles, ViewStyles} from '../../../theming';
import {rootMainApp} from '../../../routes/roots';
import {settingDark} from '../../../routes/settings';
// import {View} from 'react-native';

class TabTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeName: Theme.getName(),
    };
  }

  changeTheme = (isLight) => {
    const name = isLight ? 'Default' : 'Dark';

    Theme.setTheme(name);
    this.setState({themeName: name});

    Navigation.setDefaultOptions(settingDark());
    Navigation.setRoot(rootMainApp);
    Navigation.mergeOptions(this.props.componentId, {
      bottomTabs: {
        currentTabIndex: 1,
      },
    });
  };

  render() {
    Log('render Tabtwo');
    const {themeName} = this.state;
    // const {} = this.props;

    return (
      <View type="safeArea" style={styles.safeArea}>
        <ScrollView
          style={styles.mainContainer}
          contentContainerStyle={styles.content}>
          <View style={[ViewStyles.row, ViewStyles.mainRow]}>
            <Text style={TextStyles.normal}>Light theme</Text>
            <Switch
              value={themeName === 'Default'}
              onValueChange={this.changeTheme}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ModuleWrapper(TabTwo);
