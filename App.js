
import React from 'react';
import {
    Text,View,Button,StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailScreen from './DetailScreen';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Main',//设置标题内容
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.text}>Navigation主页面!</Text>
                <Button
                    onPress={() => navigate('Detail',{description:'price:$300'})}
                    title="GET DETAIL"/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    text:{
        margin:10,
        fontSize:18,
    }
})

//将HomeScreen和DetailScreen在StackNavigator中注册
const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Detail:{screen:DetailScreen},

});

export default SimpleApp;