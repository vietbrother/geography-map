import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ListView,
  ScrollView,
  Dimensions
} from 'react-native'

import _ from 'lodash'
import { RkConfig, RkButton, RkText, RkTextInput, RkBoardUpView, RkBarBg } from 'react-native-ui-kitten'
import api from '../util/ApiMock'
import ThemeService from '../util/ThemeService'

import MapView, { MAP_TYPES, Polygon, ProviderPropType } from 'react-native-maps'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class MapSearchScreenBase extends Component {

  constructor (props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    }
  }

  render () {
    let addressDetail = api.getAddressInfoById(this.props.addressId)
    let Wrapper = ThemeService.getAppWrapperComponent()
    let Toolbar = ThemeService.getToolbarComponent()
    return (
      <Wrapper>
        <Toolbar
          leftIcon="ios-arrow-round-back"
          title={addressDetail.name}
          onLeftClick={() => this.props.navigator.pop()}/>
        {this._renderMapContent()}
      </Wrapper>
    )
  }

  _renderMapContent() {
    return (
      <RkBoardUpView>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
        >

        </MapView>
      </RkBoardUpView>
    )
  }

}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },

})
