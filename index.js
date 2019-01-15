import React , {Component} from 'react'

import { AppRegistry } from 'react-native';
import App from './App';
import JdWebView from './src/page/WebView'
import {Navigator} from 'react-native-deprecated-custom-components';
import MainScreen from './src/MainScreen';
import GoodsDetail from './src/page/GoodsDetail';

const screen = {
    main: MainScreen,
    goods_detail: GoodsDetail
}

class AitaoApp extends Component {
    render(){
        return (
            <Navigator
                initialRoute={{name: 'main', index: 0, id:'main'}}
                renderScene={(route, navigator) => AitaoApp._renderPage(route,navigator)}
                configureScene={(route) => {
                //跳转的动画
                    return Navigator.SceneConfigs.FadeAndroid;
                }}
            />
        )
    }

    static _renderPage(route, navigator) {
        switch (route.id) {
            case 'main':
                //return (<App nav={nav}/>);
                return (<MainScreen nav={navigator}/>);
                break;
            case 'goods_detail':
                return (<GoodsDetail params={route.params} nav={navigator}/>);
                break;
            case 'webview':
                let url_ = route.url;
                //url_ = 'www.baidu.com';
                return (<JdWebView url={url_} nav={navigator} title = {'sdf'}/>);
                break;
        }
    }
}

AppRegistry.registerComponent('aitao_user_front', () => AitaoApp);
