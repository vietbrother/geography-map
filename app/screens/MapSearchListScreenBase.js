import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ListView,
  Text,
  ScrollView
} from 'react-native'

import ThemeService from '../util/ThemeService'
import api from '../util/ApiMock'
import { RkConfig } from 'react-native-ui-kitten'

import Panel from '../components/common/Panel'
import Icon from 'react-native-vector-icons/Ionicons'

export default class MapSearchListScreenBase extends Component {

  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
    let data = api.getAddressInfo();
    this.state = {
      dataSource: ds.cloneWithRows(data)
    }

  }

  render () {
    let Header = ThemeService.getMapListHeaderComponent()

    return (
      <View style={styles.container}>
        <Header/>
        <ScrollView style={styles.scrollStyle}>
          {this._renderDistrict()}
        </ScrollView>
        {/*<ListView*/}
        {/*style={styles.list}*/}
        {/*automaticallyAdjustContentInsets={false}*/}
        {/*dataSource={this.state.dataSource}*/}
        {/*renderRow={(row) => this._renderRowItem(row)}*/}
        {/*/>*/}
      </View>
    )
  }

  _renderDistrict () {
    let data = api.getAddressInfo()
    let villages = [];

    for (district of data) {
      let ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
      let childOfDistrict = api.getChildInfoByParentId(district.id);
      villages.push(
        <Panel title={district.name} style={styles.panel}>
          <ListView
            style={styles.list}
            automaticallyAdjustContentInsets={false}
            dataSource={ds.cloneWithRows(childOfDistrict)}
            renderRow={(row) => this._renderRowItem(row)}
          />
        </Panel>
      )
    }
    return villages;
  }

  _renderRowItem (rowData) {
    let MapItemDetail = ThemeService.getMapItemComponent()
    return (
      <MapItemDetail
        style={styles.list}
        addressDetail={rowData}
        onClick={(rowData) => this._openAddressDetail(rowData)}
      />
    )
  }

  _openAddressDetail (rowData) {
    this.props.navigator.push({
      screen: ThemeService.getMapSearchScreen(true),
      passProps: {
        addressId: rowData.id,
        addressName: rowData.name
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  list: {
    backgroundColor: 'white',
    paddingLeft: 35,
    borderTopColor: '#ecf0f1',
    borderTopWidth: 1
  },
  content: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  panel: {
    borderColor: '#ecf0f1',
    borderWidth: 1
  },
  scrollStyle: {
    backgroundColor: 'white'
  }
})