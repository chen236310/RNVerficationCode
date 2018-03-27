/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    DeviceEventEmitter
} from 'react-native';
import CaptchaView from './lib/VerificationCode';
// import CheckCodeView from './lib/CheckCode';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor (props) {
        super(props)
        this.code = "";
    }
    componentWillMount() {
        if(Platform.OS == "android"){
            let that = this;
            this.subreceiveCode = DeviceEventEmitter.addListener('receiveCheckCode', function(msg) {
                console.log('android == '+msg.checkCode);
                that.code = msg.checkCode;
            });
        }
    }
    onRegionChange=(event: Event)=>{
        console.log('ios == '+event.checkCode);
        this.code = event.checkCode;
    }
    componentWillUnmount () {
        if(Platform.OS == "android"){
            this.subreceiveCode.remove();
        }
    }
  render() {
    return (
      <View style={styles.container}>
          {/*<CaptchaView onRegionChange = {this.onRegionChange}/>*/}
          <CaptchaView onRegionChange = {this.onRegionChange}/>
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
