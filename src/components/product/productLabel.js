/**
 * @flow
 */

import React, { Component } from 'react';
import { Button,
  ScrollView ,
    AsyncStorage,
  AppRegistry,
  StyleSheet,
  SectionList,
  Text,
    TouchableOpacity,
  View} from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';
import Storage from 'react-native-storage';
import HostAPI from '../../../API';


//定义storage
var storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24 * 7,
    enableCache: true,
    sync: function(){
        this.props.navigation.navigate('Login');
    }
})

//storage取值
storage.load({
    key: 'loginInfo',
    autoSync: true,
    syncInBackground: false})
    .then(ret => {
        if(ret.mx_token!=''){
            this.state.mx_token = ret.mx_token;
            this.state.mx_secret = ret.mx_secret;
        }
    })
    .catch(err => {

    });

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
        this.getProductLabel();
    }
    state = {
        mx_token:'',
        mx_secret: ''
    }
    getProductLabel = () => {
        let url = HostAPI + "/big_bend/common/cms_content/info";
        var opts = {
            method: "GET",
            headers: {
                "mx_token": this.state.mx_token,
                "mx_secret": this.state.mx_secret,
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({"content_key": "tags"})
        }

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
