import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {RkConfig, RkButton, RkCard, RkText} from 'react-native-ui-kitten';

export default class MapItemBlur extends Component {


  render() {
    let addressDetail = this.props.addressDetail;
    return (
      <TouchableOpacity onPress={()=> {
        this.props.onClick(addressDetail)
      }}>
        <RkCard rkCardHeader rkCardFriendItem style={styles.border}>
          <View rkCardRow>
            <RkText style={{flexDirection: 'row', justifyContent: 'space-between', color: 'black'}}>
              <Icon name="md-map"  size={25} color="#4F8EF7" icon />
              {'   '}
              {addressDetail.name}
            </RkText>

          </View>

        </RkCard>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  timeContainer: {
    alignSelf: 'flex-start'
  },
  border:{
    borderBottomWidth: 0.5,
    borderBottomColor: RkConfig.colors.blurBg,
    backgroundColor: "white",
    color: "black",
    paddingVertical: 10
  }
});
