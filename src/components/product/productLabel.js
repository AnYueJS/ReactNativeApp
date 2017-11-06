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
  View} from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <ProductLabelScreen>{banner}</ProductLabelScreen>
      <Button
        onPress={() => navigation.navigate('ProductList', { name: 'Jordan' })}
        title="我是产品标签页"
      />
    </SafeAreaView>
  </ScrollView>
);

const MyProductScreen = ({ navigation }) => (
  <MyNavScreen banner="product Screen" navigation={navigation} />
);

var contents = [
    "1",
    "2",
    "3"
]
class ProductLabelScreen extends Component {
    constructor(props) {
        super(props);
        // alert("constructor");
        this.state = {str: "hello"};
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
