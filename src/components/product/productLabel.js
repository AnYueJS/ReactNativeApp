/**
 * @flow
 */

import React, { Component } from 'react';
import { Button,
  ScrollView ,
  AppRegistry,
  StyleSheet,
  SectionList,
  Text,
    TouchableOpacity,
  View} from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';
import HostAPI from '../../../API';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <ProductLabelScreen>{banner}</ProductLabelScreen>
      <Button
        onPress={() => navigation.navigate('ProductList', { name: 'Jordan' })}
        title="我是产品标签页"
      />
        <TouchableOpacity
            onPress={this.ProductLabelScreen}>
            <Text>登录</Text>
        </TouchableOpacity>
    </SafeAreaView>
  </ScrollView>
);

const MyProductScreen = ({ navigation }) => (
  <MyNavScreen banner="product Screen" navigation={navigation} />
);

class ProductLabelScreen extends Component {
    constructor(props) {
        super(props);
        // alert("constructor");
        this.getProductLabel;
    }
    getProductLabel = () => {
        let url = HostAPI + "/big_bend/common/cms_content/info";
        var opts = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({"content_key": "tags"})
        }

        alert('123')
        fetch(url, opts)
            .then((response) => response.json())
            .then((responseData) =>{
                if(responseData.code ==1){
                    Alert.alert("123")
                }
            })
            .catch((response) =>{

            })

    }
    render() {
        return (
            <View style={styles.container}>
              <SectionList
                  renderItem={({item}) => <ListItem title={item.title} />}
                  renderSectionHeader={({section}) => <Header title={section.key} />}
                  sections={[ // 不同section渲染相同类型的子组件

                  ]}
              />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default MyProductScreen;
