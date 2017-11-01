/**
 * Created by zhiqiang on 2017/11/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Root from './root';
const Login = React.createClass({

    pressPush: function () {
        let nextPage = {
            component: IndexPage
        };
        this.props.navigator.push(nextPage)
    },

    render: function () {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput style={styles.input}
                               placeholder="请输入账号"/>
                    <TextInput style={styles.input}
                               placeholder="请输入密码"/>
                </View>

                <TouchableOpacity
                    style={styles.btnWra}
                    onPress={this.pressPush}>
                    <Text style={styles.btn}>登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f4f4f4",
        marginTop: 160,
        justifyContent: "center",
    },

    input: {
        height: 35,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15,
        fontSize: 12,
        paddingLeft: 10,
    },

    btnWra: {
        justifyContent: "center",
        alignItems: "center",
    },

    btn: {
        textAlign: "center",
        fontSize: 12,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ccc",
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10
    },
});


const MyNavigator = React.createClass({
    render: function () {
        const rootRoute = {
            component: Login
        };
        return (
            <Navigator
                initialRoute={rootRoute}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScence={(route, navigator) => {
                    let Component = route.component;
                    return (
                        <Component
                            navigator={navigator}
                            route={route}/>
                    )
                }}

            />
        )
    }
});