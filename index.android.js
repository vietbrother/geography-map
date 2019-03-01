import React, {Component} from 'react';
import {
  AppRegistry,
  // Navigator
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import Init from './app/util/Setup'
import ThemeService from './app/util/ThemeService'
var Navigator = NavigationExperimental.Navigator;
class TayNinhPortal extends Component {

  constructor(props) {
    super(props);
  }


  render() {
	  console.disableYellowBox = true;
    return (
      <Navigator
        style={{flex: 1}}
        navigationBarHidden={true}
        initialRoute={{screen: ThemeService.getLoginScreen()}}
        renderScene={(route, navigator) => {
          return <route.screen navigator={navigator} {...route.passProps} />
        }}
      />
    );
  }
}


AppRegistry.registerComponent('TayNinhPortal', () => TayNinhPortal);
