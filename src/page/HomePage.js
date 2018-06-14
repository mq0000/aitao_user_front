
import React , {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Alert,
    ListView,
    RefreshControl,
    PixelRatio,
    SectionList,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
//import ViewPager from 'react-native-viewpager';
import MenuButton from '../component/MenuButton';
import HeaderComponent from '../component/HeaderComponent';
import SwiperComponent from '../component/SwiperComponent'

const len = 160;
dimensions = Dimensions.get('window');
export default class HomePage extends Component {

    constructor(props) {
        super(props);

        // 用于构建DataSource对象
        this._onMenuClick = this._onMenuClick.bind(this);
        this._onRecommendClick = this._onRecommendClick.bind(this);
        // 实际的DataSources存放在state中
        this.state = {
            sections: []
        }
    }

    componentWillMount() {
        //fetch('http://m.jd.com/index/recommend.action?_format_=json&page=1')
        fetch('https://sim.aitaoec.com/api/v1/shop/goods/home')
            .then((res)=> res.json())
            .then((str)=> {
                let array = []
                for (let [_key, _value] of Object.entries(str.data)) {
                    let items = []
                    for (let i=0; i < _value.length; i+=2) {
                        items = [...items, ...[[_value[i],_value[i+1]]] ]
                    }
                    array = [...array , ...[{key:_key, data: items}]]
                }
                this.setState({sections: array});
            });
    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }

    _onRecommendClick(wareId) {
        let url = 'http://item.m.jd.com/product/' + wareId + '.html';
        this.props.nav.push({
            id: 'webview',
            title: 'webiew',
            url: url
        });
    }

    //订售 积分 订单 账户
    _renderMenu = () => {
        return (
            <View style={styles.menuView}>
            <MenuButton renderIcon={require('../images/home_icons/wdgz.png')}
                        showText={'订售'} tag={'wdgz'}
                        onClick={this._onMenuClick}/>
            <MenuButton renderIcon={require('../images/home_icons/wlcx.png')}
                        showText={'积分'} tag={'wlcx'}
                        onClick={this._onMenuClick}/>
            <MenuButton renderIcon={require('../images/home_icons/cz.png')}
                        showText={'订单'} tag={'cz'}
                        onClick={this._onMenuClick}/>
            <MenuButton renderIcon={require('../images/home_icons/dyp.png')}
                        showText={'账户'} tag={'dyp'}
                        onClick={this._onMenuClick}/>
            </View>
        )
    }

    _renderHot = () => {
        return (
            <View>
                <View style={{height:30, flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{justifyContent: 'center'}}>
                        <View style={{justifyContent: 'center' , flexDirection:'row'}}>
                            <Image resizeMode={'contain'} style={{width:20, height: 20}} source={require('../images/home/gou.jpg')} />
                            <Text style={{color:'#6d46ac',fontSize:12,justifyContent: 'center'}}>精选品牌 好物易购</Text>
                        </View>
                        
                    </View>
                    <View style={{justifyContent: 'center', }}>
                        <View style={{justifyContent: 'center' , flexDirection:'row'}}>
                            <Image resizeMode={'contain'} style={{width:20, height: 20}} source={require('../images/home/gou.jpg')} />
                            <Text style={{color:'#6d46ac',fontSize:12,justifyContent: 'center'}}>爱淘自营 正品保证</Text>   
                        </View>
                        
                    </View>
                    <View style={{justifyContent: 'center' }}>
                        <View style={{justifyContent: 'center' , flexDirection:'row'}}>
                            <Image resizeMode={'contain'} style={{width:20, height: 20}} source={require('../images/home/gou.jpg')} />
                            <Text style={{color:'#6d46ac',fontSize:12,justifyContent: 'center'}}>积分全场任意兑换</Text>
                        </View>
                        
                    </View> 
                </View>
                <SwiperComponent />
                <View style={styles.menuView}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Image resizeMode={'contain'} style={{width:200,height:200}} source={{uri: 'https://image100.oss-cn-shanghai.aliyuncs.com/test/image/classify01.jpg?x-oss-process=style/small'}}/>
                    </View>
                    <View style={{flex:1,alignItems:'center' , flexDirection: 'column', paddingRight:20}}>
                        <View style={{flex:1,alignItems:'center'}}>
                            <Image resizeMode={'contain'} style={{width:200,height:100}} source={{uri: 'https://image100.oss-cn-shanghai.aliyuncs.com/test/image/classify02.jpg?x-oss-process=style/small'}}/>
                        </View>
                        <View style={{flex:1, alignItems:'center'}}>
                            <View style={{flex:1,alignItems:'center' , flexDirection:'row'}}>
                                <Image resizeMode={'contain'} style={{width:100,height:100}} source={{uri: 'https://image100.oss-cn-shanghai.aliyuncs.com/test/image/classify03.jpg?x-oss-process=style/small'}}/>
                                <Image resizeMode={'contain'} style={{width:100,height:100}} source={{uri: 'https://image100.oss-cn-shanghai.aliyuncs.com/test/image/classify04.jpg?x-oss-process=style/small'}}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    _renderItem = (data) => {
        // const goods_name = data.item.goods_name
        // const goods_img = 'https://sim.aitaoec.com/' + data.item.goods_img
        // const goods_id = data.item.goods_id
        // const market_price = data.item.market_price
        // const shop_price =  '$:' + data.item.shop_price
        // const point = '  积分:' + Number.parseInt(data.item.shop_price*100)
        return (
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                {/* <View style={{width: dimensions.width/2 - 20,height: dimensions.height/2}}>
                    <Image resizeMode='cover' style={{alignItems:'center',width:dimensions.width/2 - 20,height:dimensions.width/2}} source={{uri: goods_img}}/>
                    <Text style={{ 'flexWrap': 'wrap', width: dimensions.width/2 -10, height: 40, alignItems:'center', color: '#5C5C5C', fontSize: 15 }}>{goods_name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ height: 30, alignItems:'center', color: '#ff0000', fontSize: 15 }}>{shop_price}</Text>
                        <Text style={{ height: 30, alignItems:'center', color: '#5C5C5C', fontSize: 15 }}>{point}</Text>
                    </View>
                </View> */}
                {
                    data.item.map((item, i) => {
                        if (!item) {
                            return (<View style={{ width: dimensions.width/2 - 20,height: 250}}></View>)
                        }
                        const goods_name = item.goods_name
                        const goods_img = 'https://sim.aitaoec.com/' + item.goods_img
                        const goods_id = item.goods_id
                        const market_price = item.market_price
                        const shop_price =  '$:' + item.shop_price
                        const point = '  积分:' + Number.parseInt(item.shop_price*100)
                        return (
                            <View style={{ width: dimensions.width/2 - 20,height: 250}}>
                                <Image resizeMode='cover' style={{alignItems:'center',width:dimensions.width/2 - 20,height:dimensions.width/2}} source={{uri: goods_img}}/>
                                <Text style={{ 'flexWrap': 'wrap', width: dimensions.width/2 - 10, height: 40, alignItems:'center', color: '#5C5C5C', fontSize: 15 }}>{goods_name}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{ height: 30, alignItems:'center', color: '#ff0000', fontSize: 15 }}>{shop_price}</Text>
                                    <Text style={{ height: 30, alignItems:'center', color: '#5C5C5C', fontSize: 15 }}>{point}</Text>
                                </View>
                            </View>
                        )
                    })
                }
                

            </View>
        )
    }

    _renderSection = (data) => {
        const key = data.section.key
        let imageUrl = (key === '热销商品' && require('../images/classify/rexiao.jpg') ||
        key === '推荐商品' && require('../images/classify/xihuan.jpg') ||
        key === '最新商品' && require('../images/classify/xinpin.jpg'))
        let icon = require('../images/classify/xinpin.jpg')
        return (//<Image resizeMode='contain' style={{width:200,height:43}} source={require('../images/classify/xinpin.jpg')}/>
            <View style={{alignItems: 'center'}}>
                <Image resizeMode='contain' style={{width:200,height:43}} source={imageUrl}/>
            </View>)
        
    }

    render() {
         const array = [
            { key: "A", data: [{ goods_name: "111" }, { goods_name: "阿玛尼" }, { goods_name: "爱多多" }] },
            { key: "B", data: [{ goods_name: "表哥" }, { goods_name: "贝贝" }, { goods_name: "表弟" }, { goods_name: "表姐" }, { goods_name: "表叔" }] },
            { key: "C", data: [{ goods_name: "成吉思汗" }, { goods_name: "超市快递" }] },
            { key: "D", data: [{ goods_name: "王磊" }, { goods_name: "王者荣耀" }, { goods_name: "往事不能回味" },{ goods_name: "王小磊" }, { goods_name: "王中磊" }, { goods_name: "王大磊" }] },
        ];
        return (
            <View style={{flex: 1}}>
                <HeaderComponent />
                <SectionList
                    renderSectionHeader={this._renderSection}
                    renderItem={this._renderItem}
                    sections={this.state.sections}
                    stickySectionHeadersEnabled={false}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    ListHeaderComponent={this._renderHot}
                    numColumns={2}
                    horizontal={false}
                    //ListFooterComponent=
                />            
            </View >
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
    menuView: {
        flexDirection: 'row',
        marginTop: 10
    },
    recommendTitle: {
        width: len,
        flexWrap: 'wrap',
        fontSize: 12,
        color: 'black',
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        height: 30
    },
    priceText: {
        flex: 1,
        alignSelf: 'flex-start',
        textAlign: 'left',
        fontSize: 13,
        color: '#f15353'
    }
});