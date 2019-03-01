import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Image,
  Text,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {RkButton, RkText, RkTextInput, RkSeparator, RkConfig} from 'react-native-ui-kitten';
import LoginScreenBase from "../LoginScreenBase";


export default class LoginScreenBlur extends LoginScreenBase {

  render() {
    let AppWrapper = ThemeService.getAppWrapperComponent();
    return (
      <AppWrapper>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.container}>
            <View>
              <Image style={styles.logoImg} source={require('../../../img/tayninh_logo.png')}/>
              <RkText style={styles.title}><RkText style={styles.extraBold}>Tây Ninh</RkText> Portal</RkText>
              <RkText style={styles.subTitle}>Hệ thống thông tin điện tử</RkText>
              <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15,}}>
                <View style={styles.widthLimit}>
                  <RkTextInput
                    rkType='rounded'
                    containerStyle={styles.inputContainer}
                    label={<Icon name='ios-person-outline'/>}
                    labelStyle={styles.inputIcon}
                    style={styles.input}
                    placeholder={'Tài khoản'}
                    placeholderTextColor={RkConfig.colors.lightGray}/>
                  <RkTextInput
                    rkType='rounded'
                    containerStyle={styles.inputContainer}
                    label={<Icon name='ios-lock-outline'/>}
                    labelStyle={[styles.inputIcon, styles.inputIconLock]}
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder={'Mật khẩu'}
                    placeholderTextColor={RkConfig.colors.lightGray}/>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={styles.widthLimit}>
                <RkButton innerStyle={styles.buttonInner}
                          style={styles.buttonContainer}
                          rkType='circle shadow'
                          onPress={() => super._renderMainScreen()}>
                  <RkText>Đăng nhập</RkText>
                </RkButton>
              </View>
            </View>
            <RkText style={styles.footText}>
              Chưa có tài khoản? <Text style={styles.extraBold}>Đăng ký</Text>.
            </RkText>
          </View>
        </ScrollView>
      </AppWrapper>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 70,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  widthLimit: {
    flex: 1,
    maxWidth: 275,
    minHeight: 120,
  },
  logoImg: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  title: {
    marginTop: 5,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '500'
  },
  subTitle: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 30
  },
  inputContainer: {
    backgroundColor: RkConfig.colors.blurBgWhite,
    marginTop: 15,
    paddingLeft: 15,
  },
  inputIcon: {
    color: 'white',
    fontSize: 28,
    fontWeight: '300'
  },
  inputIconLock: {
    fontSize: 24,
  },
  input: {
    flex: 1,
    color: RkConfig.colors.white,
    fontWeight: '300',
    fontSize: 18,
    textAlign: 'left',
    height: 40,
    marginHorizontal: 10
  },
  footText: {
    marginVertical: 30,
    alignSelf: 'center',
    color: RkConfig.colors.white,
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    backgroundColor: RkConfig.colors.blurPrimary,
    //backgroundColor: '#07205a',
    shadowColor: RkConfig.colors.blurPrimary,
    paddingVertical: 12,
    shadowRadius: 12,
    shadowOpacity: 0.4,
    marginTop: 20,
  },
  buttonInner: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700'
  },
  extraBold: {
    fontWeight: '700'
  }
});
