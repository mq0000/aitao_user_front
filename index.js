import React , {Component} from 'react'

import { AppRegistry } from 'react-native';
import App from './App';
import JdWebView from './src/page/WebView'
import {Navigator} from 'react-native-deprecated-custom-components';
import MainScreen from './src/MainScreen';

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
                //return (<App nav={nav}/>);
                return (<MainScreen nav={nav}/>);
                break;
            case 'webview':
                let url_ = route.url;
                //url_ = 'www.baidu.com';
                return (<JdWebView url={url_}/>);
                break;
        }
    }
}

AppRegistry.registerComponent('aitao_user_front', () => AitaoApp);
