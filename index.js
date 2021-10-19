/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import FastImage from 'react-native-fast-image';
import App from './App';
import {name as appName} from './app.json';

// FastImage.preload([
//   {
//     uri: 'https://facebook.github.io/react/img/logo_og.png',
//     headers: {Authorization: 'someAuthToken'},
//   },
//   {
//     uri: 'https://facebook.github.io/react/img/logo_og.png',
//     headers: {Authorization: 'someAuthToken'},
//   },
// ]);

AppRegistry.registerComponent(appName, () => App);
