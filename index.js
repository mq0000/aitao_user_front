import React , {Component} from 'react'

import { AppRegistry } from 'react-native';
import App from './App';

import {Navigator} from 'react-native-deprecated-custom-components';

class AitaoApp extends Component {
    render(){
        return (
            <Navigator
                initialRoute={{name: 'main', index: 0, id:'main'}}
                renderScene={(route, navigator) => AitaoApp._renderPage(route,navigator)}
            />
        )
    }

    static _renderPage(route, nav) {
        switch (route.id) {
            case 'main':
                return (<App nav={nav}/>);
                break;
            case 'webview':
                //return (<JdWebView url={route.url}/>);
                break;
        }
    }
}

AppRegistry.registerComponent('aitao_user_front', () => AitaoApp);
