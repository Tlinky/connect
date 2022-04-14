import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import App from './App';
import {name as appName} from './app.json';
import './i18n';

AppRegistry.registerComponent(appName, () => {
  SplashScreen.hide();
  return App;
});
