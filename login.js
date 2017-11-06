import React from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native'
import Storage from 'react-native-storage';
import HostAPI from './API';


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
     // alert(ret.mx_token);
     this.props.navigation.navigate('App')
   }
 })
 .catch(err => {

});

export default class Login extends React.Component {
  state = {
    isLoading: false,
    phone: '',
    password: ''
  }

  login = () => {
    if(this.state.phone === ''){
      Alert.alert("手机号码不能为空");
      return;
    }
    if(this.state.password === ''){
      Alert.alert("密码不能为空");
      return;
    }
    let formData = {};
    formData.phone = this.state.phone;
    formData.is_management = "false";
    formData.password = this.state.password;
    let url = HostAPI + "/product/channel/advisorLoginByPwd";
    var opts = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
       },
       body: JSON.stringify(formData)
    }

    fetch(url, opts)
    .then((response) => response.json())
    .then((responseData) =>{
      if(responseData.code ==1){
        storage.save({
          key: "loginInfo",
          data: {
            "mx_token": responseData.body.mx_token,
            "mx_secret": responseData.body.mx_secret,
            "phone": this.state.phone
          },
          expires: 1000*3600*7
        });
      }
      this.props.navigation.navigate('App')
    })
    .catch((response) =>{

    })

  }

  signup = () => {
    this.props.navigation.navigate('Signup')
  }

  focusNext = (nextField) => {
    this.refs[nextField].focus()
  }

  render() {
    if(this.state.isLoading) {
      return (
        <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator
            animating={true}
            size="large"
            color='white'
          />
        </View>
      )
    } else {
      return (
        <View style={{flex: 1, backgroundColor: '#f4f4f4', padding: 12}}>
          <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 25}}>
            <Text style={styles.header}>MEI XIN</Text>
          </View>
          <KeyboardAvoidingView
            style={{flex: 1, justifyContent: 'flex-end'}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#555'}}>
              <TextInput
                ref='phone'
                style={styles.input}
                placeholderTextColor={'#555'}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={(phone) => this.setState({phone})}
                maxLength={60}
                blurOnSubmit={true}
                keyboardType={'phone-pad'}
                returnKeyType={'next'}
                placeholder={'手机号'}
                value={this.state.email}
                onSubmitEditing={() => this.focusNext('password')}
              />
            </View>

            <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#555', paddingTop: 20, marginBottom: 6}}>
              <TextInput
                ref='password'
                style={styles.input}
                placeholderTextColor={'#555'}
                autoCapitalize={'none'}
                autoCorrect={false}
                returnKeyType={'done'}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                maxLength={30}
                blurOnSubmit={true}
                placeholder={'密码'}
                value={this.state.password}
              />
            </View>
          </KeyboardAvoidingView>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={styles.option}>
              <Text style={styles.optionText}>忘记密码?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={this.signup}>
              <Text style={styles.optionText}>新建账户</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.login}>
              <Text style={styles.buttonText}>登录</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    marginVertical: 12,

    color: '#555'
  },
  input: {
    height: 36,
    color: '#555',
    fontSize: 14,
  },
  button: {
    flex: 1,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    borderColor: '#eee',
    backgroundColor: "#f56000"
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },
  option: {
    margin: 4,
    paddingVertical: 12
  },
  optionText: {
    color: '#555',
    fontSize: 14
  }
})
