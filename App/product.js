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

const ProductPage = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                <Text>
                    product 资产
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

module.exports = ProductPage;