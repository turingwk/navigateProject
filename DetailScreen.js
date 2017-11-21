'use strict'

import React,{Component} from 'react';
import {View,Text} from 'react-native';

class DetailScreen extends Component{
    static navigationOptions = {
        //detail页面标题
        title:'detail',
    };
    render(){
        //DetailScreen页面在StackNavigator中注册过，
        // 可以通过this.props.navigation取到navigation对象，并获取params参数
        const {params} = this.props.navigation.state;
        return(
            <View>
                <Text>通过params传递来如下信息： </Text>
                <Text style={{fontSize:18}}>{params.description}</Text>
            </View>
        );
    }
}
export default DetailScreen;