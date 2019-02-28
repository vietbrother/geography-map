import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

import {RkText, RkConfig, RkCard, RkButton, RkTheme} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MapListHeaderBlur extends Component {


  render() {
    return (
      <RkCard rkCardHeader style={styles.container}>

        <Text style={styles.title}>
          Hệ thống thông tin đất đai
        </Text>
        {/*<RkButton rkType='clear iconButton'>*/}
          {/*<Icon rkCardIcon name={'ios-person-add-outline'}/>*/}
        {/*</RkButton>*/}
      </RkCard>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    backgroundColor: RkConfig.colors.blurBg,
    marginTop: 10,
    marginBottom: 0,
    paddingVertical: 5,
    alignItems: 'center'
  },
  title:{
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 10
  }
});