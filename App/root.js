/**
 * Created by zhiqiang on 2017/10/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
} from 'react-native';

const IndexPage = require("./App/index");
const ProductPage = require("./App/product");
const HousePage = require("./App/house");
const MinePage = require("./App/mine");

const Root = React.createClass({
    getInitialState: function () {
        return {
            tab: "IndexPage"
        }
    },
    select: function (tabName) {
        this.setState({
            tab: tabName
        });
    },
    render: function () {
        return(
            <TabBarIOS style={{flex: 1}}>
                <TabBarIOS.Item
                    title="IndexPage"
                    systemIcon="recents"
                    onPress={this.select.bind(this, "IndexPage")}
                    selected={this.state.tab === "IndexPage"}>
                    <IndexPage></IndexPage>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="ProductPage"
                    systemIcon="history"
                    onPress={this.select.bind(this, "ProductPage")}
                    selected={this.state.tab === "ProductPage"}>
                    <ProductPage></ProductPage>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="HousePage"
                    systemIcon="more"
                    onPress={this.select.bind(this, "HousePage")}
                    selected={this.state.tab === "HousePage"}>
                    <HousePage></HousePage>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="MinePage"
                    systemIcon="contacts"
                    onPress={this.select.bind(this, "MinePage")}
                    selected={this.state.tab === "MinePage"}>
                    <MinePage></MinePage>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
});

module.exports = Root;