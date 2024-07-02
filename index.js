/**
 * @format
 */

import { Text } from 'react-native';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { color: 'black' }; // Set your desired color

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
