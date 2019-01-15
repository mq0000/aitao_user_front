
import React , {Component} from 'react'
import {
    View,
    WebView,
    Platform
} from 'react-native';

export default class JdWebView extends Component {

    constructor(props) {
        super(props);
    }

    onNavigationStateChange(event){
        console.log('onNavigationStateChange:');
        console.log(event); //打印出event中属性
    }

    render() {
        return (
            <View style={{flex:1,paddingTop:Platform.os==='ios'?20:0}}>
                <WebView startInLoadingState={true}
                         javaScriptEnabled={true}
                         //url={this.props.url}
                         //source={{uri: this.props.url}}
                         source={{uri:this.props.url,method:'GET'}}
                         onNavigationStateChange={this.onNavigationStateChange}//在WebView中注册该回调方法
                         />
            </View>
        )
    }
}