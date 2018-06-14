
import React , {Component} from 'react'
import {
    View,
    Platform,
    StyleSheet,
    Image,
    TextInput,
    Dimensions,
    FlatList,
    Text,
} from 'react-native';
const {width,height}=Dimensions.get('window')
export default class ClassifyPage extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds
        };
    }

    componentWillMount() {
        //fetch('http://m.jd.com/index/recommend.action?_format_=json&page=1')
        fetch('https://sim.aitaoec.com/api/v1/shop/cate/list')
            .then((res)=> res.json())
            .then((str)=> {
                var ds = this.state.dataSource.cloneWithRows(str.data);
                this.setState({dataSource: ds});
            });
    }

      

    render() {
        var data = [];
        data.push({url: 'www.baidu.com', title: '品牌电器'});
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.searchBox}>
                        <Image source={require('../images/header/icon_search.png')} style={styles.searchIcon}/>
                        <TextInput
                            keyboardType='web-search'
                            placeholder='搜索商品'
                            style={styles.inputText}/>
                        <Image source={require('../images/header/icon_voice.png')} style={styles.voiceIcon}/>
                    </View>
                    <Image source={require('../images/header/icon_qr.png')} style={styles.scanIcon}/>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
                        return (
                            <View>
                                <Text>  </Text>
                                
                            </View>
                        )
                    }}
                />
            </View>
        )

       
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        backgroundColor: '#D15FEE',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo: {
        height: 40,
        width: 40,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    searchBox: {
        height: 30,
        flexDirection: 'row',
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
        borderRadius: 5,  // 设置圆角边
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12
    },
    scanIcon: {
        height: 26.7,
        width: 26.7,
        resizeMode: 'stretch'
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch'
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14
    },


    content:{
        width:width,
        height:height,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
      },
      cell:{
        height:100,
        backgroundColor:'purple',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#ececec',
        borderBottomWidth:1
     
      },
      txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
      }
});