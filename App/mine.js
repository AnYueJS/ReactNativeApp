/**
 * Created by zhiqiang on 2017/10/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const MinePage = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                <Text>
                    mine 我的
                </Text>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
    }
});

module.exports = MinePage;