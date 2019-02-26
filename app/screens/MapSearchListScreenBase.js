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

    let districts = api.getAddressInfo();



  }

  render () {
    let Header = ThemeService.getMapListHeaderComponent()

    return (
      <View style={styles.container}>
        <Header/>
        {/*<View style={styles.content}>*/}
          {/*<Panel title="This is the first container" style={styles.panel}>*/}
            {/*<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore*/}
              {/*et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip*/}
              {/*ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu*/}
              {/*fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt*/}
              {/*mollit anim id est laborum.</Text>*/}
          {/*</Panel>*/}
          {/*<Panel title="Second panel in the view" style={styles.panel}>*/}
            {/*<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis aute irure dolor in reprehenderit in*/}
              {/*voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non*/}
              {/*proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>*/}
          {/*</Panel>*/}
          {/*<Panel expanded title="One more to test" style={styles.panel}>*/}
            {/*<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore*/}
              {/*et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip*/}
              {/*ex ea commodo consequat.</Text>*/}
            {/*<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore*/}
              {/*et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip*/}
              {/*ex ea commodo consequat.</Text>*/}
          {/*</Panel>*/}

        {/*</View>*/}
        <ScrollView>
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
    let data = api.getAddressInfo();
    let districts = []
    for (district of data) {
      districts.push(
        <Panel title={district.name} style={styles.panel}>
          <ListView
            style={styles.list}
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.dataSource}
            renderRow={(row) => this._renderRowItem(row)}
          />
        </Panel>
      );
    }
    return districts;
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
    paddingLeft: 15
  },
  content: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  panel: {
    marginBottom: 10,
  }
})