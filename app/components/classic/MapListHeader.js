import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {RkText, RkConfig, RkCard, RkButton} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MapListHeaderClassic extends Component {


  render() {
    return (
      <RkCard rkCardHeader style={styles.container}>

        <RkText rkCardTitle>
          Hệ thống thông tin đất đai
        </RkText>
        <RkButton rkType='clear iconButton'>
          <Icon rkCardIcon name={'ios-person-add-outline'}/>
        </RkButton>
      </RkCard>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    backgroundColor: RkConfig.colors.blurBg,
    marginTop: 20,
    marginBottom: 0,
    paddingVertical: 5,
  }
});