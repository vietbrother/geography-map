import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ListView
} from 'react-native';


import ThemeService from '../util/ThemeService';
import api from '../util/ApiMock';
import { RkConfig } from 'react-native-ui-kitten'

export default class MapSearchListScreenBase extends Component {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    let data = api.getAddressInfo();
    this.state = {
      dataSource: ds.cloneWithRows(data)
    };
  }

  render() {
     let Header = ThemeService.getMapListHeaderComponent();
    return (
      <View style={styles.container}>
        <Header/>
        <ListView
          style={styles.list}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={(row) => this._renderRowItem(row)}
        />
      </View>
    )
  }

  _renderRowItem(rowData) {
    let MapItemDetail = ThemeService.getMapItemComponent();
    return (
      <MapItemDetail
        style={styles.list}
        addressDetail={rowData}
        onClick={(rowData) => this._openAddressDetail(rowData)}
      />
    );
  }

  _openAddressDetail(rowData) {
    this.props.navigator.push({
      screen: ThemeService.getMapSearchScreen(true),
      passProps: {
        addressId: rowData.id,
        addressName: rowData.name
      }
    });
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "transparent",
  },
  list: {
    backgroundColor: 'white'
    // paddingTop: 10
  },
});