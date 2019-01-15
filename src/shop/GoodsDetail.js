
import React , {Component} from 'react'
import {
    View,
    Platform,
    WebView,
    Dimensions,
    ListView,
    Image,
    Text,
    ScrollView,
} from 'react-native';

const {width,height}=Dimensions.get('window')

export default class GoodsDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goodsDetail: {},
            goods_id: this.props.params.goods_id
        }
    }

    componentWillMount() {
        fetch('https://sim.aitaoec.com/api/v1/shop/goods/detail?goods_id=' + this.state.goods_id)
            .then((res)=> res.json())
            .then((str)=> {
                this.setState({goodsDetail: str.data});
            });
    }

    render() {
        return (
            <View style={{flex:1,paddingTop:Platform.os==='ios'?20:0}}>
                <ScrollView>
                <WebView bounces={false}
                        scalesPageToFit={true}
                        source={{html:this.state.goodsDetail.goods_desc}}
                        style={{width:width, height:height}}>
                    </WebView>
                    <WebView bounces={false}
                        scalesPageToFit={true}
                        source={{html:this.state.goodsDetail.goods_desc}}
                        style={{width:width, height:height}}>
                    </WebView>
                </ScrollView>
                
            </View>
        )
    }
}