import React , {Component} from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import {
    Image,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper'

dimensions = Dimensions.get('window');

export default class SwiperComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    style={styles.swiper}
                    height={200}
                    horizontal={true}
                    paginationStyle={{bottom: 10}}
                    showsButtons={false}>
                    <Image source={require('../images/banner/1.jpg')} style={styles.img}/>
                    <Image source={require('../images/banner/2.jpg')} style={styles.img}/>
                    <Image source={require('../images/banner/3.jpg')} style={styles.img}/>
                    {/* <Image source={require('../images/banner/4.jpg')} style={styles.img}/> */}
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    swiper: {},
    img: {
        width: dimensions.width,
        height: 200,
    }
});