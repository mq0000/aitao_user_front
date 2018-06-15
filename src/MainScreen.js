import React , {Component} from 'react'

import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';


import HomePage from './page/HomePage';
import ClassifyPage from './page/ClassifyPage'
import DealPage from './page/DealPage'
import CartPage from './page/CartPage'
import PersonalPage from './page/PersonalPage'
import TabNavigator from 'react-native-tab-navigator';

const HOME = 'home';
const HOME_NORMAL = require('./images/tabs/首页1.png');
const HOME_FOCUS = require('./images/tabs/首页2.png');
const CLASSIFY = 'classify';
const CLASSIFY_NORMAL = require('./images/tabs/分类1.png');
const CLASSIFY_FOCUS = require('./images/tabs/分类2.png');
const DEAL = 'deal';
const DEAL_NORMAL = require('./images/tabs/商铺1.png');
const DEAL_FOCUS = require('./images/tabs/商铺2.png');
const CART = 'cart';
const CART_NORMAL = require('./images/tabs/购物车1.png');
const CART_FOCUS = require('./images/tabs/购物车2.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('./images/tabs/我的1.png');
const PERSONAL_FOCUS = require('./images/tabs/我的2.png');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomePage nav={this.props.nav}/>)}
                    {this._renderTabItem(CLASSIFY_NORMAL, CLASSIFY_FOCUS, CLASSIFY, <ClassifyPage nav={this.props.nav}/>)}
                    {this._renderTabItem(DEAL_NORMAL, DEAL_FOCUS, DEAL, <DealPage nav={this.props.nav}/>)}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, <CartPage nav={this.props.nav}/>)}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, <PersonalPage nav={this.props.nav}/>)}
                </TabNavigator>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 12.5
    }
});