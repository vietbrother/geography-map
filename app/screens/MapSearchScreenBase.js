import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ListView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Platform, TextInput
} from 'react-native'

import _ from 'lodash'
import { RkConfig, RkButton, RkText, RkTextInput, RkBoardUpView, RkBarBg } from 'react-native-ui-kitten'
import api from '../util/ApiMock'
import ThemeService from '../util/ThemeService'

// import MapView, { MAP_TYPES, Polygon, ProviderPropType } from 'react-native-maps'
import MapView, { ProviderPropType, Marker, AnimatedRegion, Polygon, Callout } from 'react-native-maps'

const screen = Dimensions.get('window')

const ASPECT_RATIO = screen.width / screen.height
const LATITUDE = 21.012100
const LONGITUDE = 105.812612
const LATITUDE_DELTA = 0.0002
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

// const { width, height } = Dimensions.get('window')
//
// const ASPECT_RATIO = width / height
// const LATITUDE = 37.78825
// const LONGITUDE = -122.4324
// const LATITUDE_DELTA = 0.0922
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class MapSearchScreenBase extends Component {

  constructor (props) {
    super(props)

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
      }),
    }
  }

  animate () {
    const { coordinate } = this.state
    const newCoordinate = {
      latitude: LATITUDE + ((Math.random() - 0.5) * (LATITUDE_DELTA / 2)),
      longitude: LONGITUDE + ((Math.random() - 0.5) * (LONGITUDE_DELTA / 2)),
    }

    if (Platform.OS === 'android') {
      if (this.marker) {
        this.marker._component.animateMarkerToCoordinate(newCoordinate, 50)
      }
    } else {
      coordinate.timing(newCoordinate).start()
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

  _renderMapContent () {
    return (

      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Polygon
            coordinates={[
              { latitude: 21.012100, longitude: 105.812612 },
              { latitude: 21.012126, longitude: 105.812672 },
              { latitude: 21.012093, longitude: 105.812868 },
              { latitude: 21.011824, longitude: 105.812728 }

            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000'
            ]}
            fillColor="#fff68f"
            strokeWidth={1}
          />

          <Polygon
            coordinates={[
              { latitude: 21.012126, longitude: 105.812612 },
              { latitude: 21.012156, longitude: 105.812672 },
              { latitude: 21.012093, longitude: 105.812868 },
              { latitude: 21.011924, longitude: 105.812728 }

            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000'
            ]}
            fillColor="#7F0000"
            strokeWidth={1}
          />
          <Marker.Animated
            ref={marker => { this.marker = marker }}
            coordinate={this.state.coordinate}
          />


          <Callout>
            <View style={styles.calloutView}>
              <TextInput style={styles.calloutSearch}
                         placeholder={'Search'}
              />
            </View>
          </Callout>
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.animate()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Animate</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  // on the style sheet
  calloutView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: 'rgba(0,128,128, 0.9)',
    borderRadius: 10, borderWidth: 1,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 40,
    justifyContent: 'center',
  },
  calloutSearch: {
    borderColor: 'rgba(0,128,128, 0.9)',
    marginLeft: 20,
    width: '90%',
    marginRight: 10,
    height: 40,
    borderWidth: 0.0
  }

})
