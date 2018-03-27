/**
 * Created by zehuachen on 2018/3/27.
 */
/**
 * Created by zehuachen on 2017/12/13.
 */
import React, {Component} from 'react'
import {requireNativeComponent, Platform, View} from 'react-native'
import PropTypes  from 'prop-types';
// requireNativeComponent 自动把这个组件提供给 "RNTMapManager"
const NativeCaptchaView = requireNativeComponent('MyCustomView', CaptchaView);


export default class CaptchaView extends Component{
    static propTypes = {
        ...View.propTypes,
        onChange: PropTypes.func,
        onRegionChange:PropTypes.func,
        onChangeMessage:PropTypes.func,
    };
    _onChange = (event: Event) => {
    if (!this.props.onRegionChange ) {
    return;
}
this.props.onRegionChange(event.nativeEvent);
}
render(){
    let backColor = Platform.OS == 'ios' ? 'orange' : null
    return (<NativeCaptchaView {...this.props}  onChange={this._onChange}  style={{width:100,height:35,backgroundColor:backColor}} />)
}}