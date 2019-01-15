
import React , {Component} from 'react'
import {
    View,
    Platform
} from 'react-native';
import JdWebView from './WebView'
export default class DealPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1,paddingTop:Platform.os==='ios'?20:0}}>
                <JdWebView url={'https://www.aitaoec.com/static/index.html?t=1528800367395#/quotation'}/>
            </View>
        )
    }
}