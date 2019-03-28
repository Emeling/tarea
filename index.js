/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Lista from './src/containers/lista-container'
import AlbunContainer from './src/containers/albumcontainer';
import TareaContainer from './src/containers/tareacontainer'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TareaContainer );
