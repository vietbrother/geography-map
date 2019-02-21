import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native'

import { RkConfig, RkCard, RkButton, RkChoiceGroup, RkChoice, RkText } from 'react-native-ui-kitten'

import ThemeService from '../util/ThemeService'

import MapView, { MAP_TYPES, Polygon, ProviderPropType } from 'react-native-maps'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
let id = 0

export default class MapScreenBase extends Component {

  constructor (props) {
    super(props)

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      polygons: [],
      editing: null,
      creatingHole: false,
    }
  }

  finish () {
    const { polygons, editing } = this.state
    this.setState({
      polygons: [...polygons, editing],
      editing: null,
      creatingHole: false,
    })
  }

  createHole () {
    const { editing, creatingHole } = this.state
    if (!creatingHole) {
      this.setState({
        creatingHole: true,
        editing: {
          ...editing,
          holes: [
            ...editing.holes,
            [],
          ],
        },
      })
    } else {
      const holes = [...editing.holes]
      if (holes[holes.length - 1].length === 0) {
        holes.pop()
        this.setState({
          editing: {
            ...editing,
            holes,
          },
        })
      }
      this.setState({ creatingHole: false })
    }
  }

  onPress (e) {
    const { editing, creatingHole } = this.state
    if (!editing) {
      this.setState({
        editing: {
          id: id++,
          coordinates: [e.nativeEvent.coordinate],
          holes: [],
        },
      })
    } else if (!creatingHole) {
      this.setState({
        editing: {
          ...editing,
          coordinates: [
            ...editing.coordinates,
            e.nativeEvent.coordinate,
          ],
        },
      })
    } else {
      const holes = [...editing.holes]
      holes[holes.length - 1] = [
        ...holes[holes.length - 1],
        e.nativeEvent.coordinate,
      ]
      this.setState({
        editing: {
          ...editing,
          id: id++, // keep incrementing id to trigger display refresh
          coordinates: [
            ...editing.coordinates,
          ],
          holes,
        },
      })
    }
  }

  render () {
    const mapOptions = {
      scrollEnabled: true,
    }

    if (this.state.editing) {
      mapOptions.scrollEnabled = false
      mapOptions.onPanDrag = e => this.onPress(e)
    }
    console.log('1111111111111111111')
    return (
      <View style={styles.container}>


          <MapView
            provider={this.props.provider}
            style={styles.map}
            mapType={MAP_TYPES.HYBRID}
            initialRegion={this.state.region}
            onPress={e => this.onPress(e)}
            {...mapOptions}
          >
            {this.state.polygons.map(polygon => (
              <Polygon
                key={polygon.id}
                coordinates={polygon.coordinates}
                holes={polygon.holes}
                strokeColor="#F00"
                fillColor="rgba(255,0,0,0.5)"
                strokeWidth={1}
              />
            ))}
            {this.state.editing && (
              <Polygon
                key={this.state.editing.id}
                coordinates={this.state.editing.coordinates}
                holes={this.state.editing.holes}
                strokeColor="#000"
                fillColor="rgba(255,0,0,0.5)"
                strokeWidth={1}
              />
            )}
          </MapView>

        <View style={styles.buttonContainer}>
          {this.state.editing && (
            <TouchableOpacity
              onPress={() => this.createHole()}
              style={[styles.bubble, styles.button]}
            >
              <Text>{this.state.creatingHole ? 'Finish Hole' : 'Create Hole'}</Text>
            </TouchableOpacity>
          )}
          {this.state.editing && (
            <TouchableOpacity
              onPress={() => this.finish()}
              style={[styles.bubble, styles.button]}
            >
              <Text>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}

MapScreenBase.propTypes = {
  provider: ProviderPropType,
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    position: 'relative'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
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
})






//
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
//
// let {width, height} = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
//
// // const Images = [
// //     {uri: "https://i.imgur.com/sNam9iJ.jpg"},
// //     {uri: "https://i.imgur.com/N7rlQYt.jpg"},
// //     {uri: "https://i.imgur.com/UDrH0wm.jpg"},
// //     {uri: "https://i.imgur.com/Ka8kNST.jpg"}
// // ]
// //
// // const {width, height} = Dimensions.get("window");
//
// const CARD_HEIGHT = height / 4;
// const CARD_WIDTH = CARD_HEIGHT - 50;
//
// export default class MapScreenBase extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             // themeIndex: ThemeService.getCurrentThemeIndex(),
//             // markers: [
//             //     {
//             //         coordinate: {
//             //             latitude: 45.524548,
//             //             longitude: -122.6749817,
//             //         },
//             //         title: "Best Place",
//             //         description: "This is the best place in Portland",
//             //         image: Images[0],
//             //     },
//             //     {
//             //         coordinate: {
//             //             latitude: 45.524698,
//             //             longitude: -122.6655507,
//             //         },
//             //         title: "Second Best Place",
//             //         description: "This is the second best place in Portland",
//             //         image: Images[1],
//             //     },
//             //     {
//             //         coordinate: {
//             //             latitude: 45.5230786,
//             //             longitude: -122.6701034,
//             //         },
//             //         title: "Third Best Place",
//             //         description: "This is the third best place in Portland",
//             //         image: Images[2],
//             //     },
//             //     {
//             //         coordinate: {
//             //             latitude: 45.521016,
//             //             longitude: -122.6561917,
//             //         },
//             //         title: "Fourth Best Place",
//             //         description: "This is the fourth best place in Portland",
//             //         image: Images[3],
//             //     },
//             // ],
//             region: {
//                 latitude: 45.52220671242907,
//                 longitude: -122.6653281029795,
//                 latitudeDelta: 0.04864195044303443,
//                 longitudeDelta: 0.040142817690068,
//             },
//         }
//     }
//
//     //
//     // async requestLocationPermission() {
//     //     try {
//     //         const granted = await PermissionsAndroid.request(
//     //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     //             {
//     //                 'title': 'Example App',
//     //                 'message': 'Example App access to your location '
//     //             }
//     //         )
//     //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     //             console.log("You can use the location")
//     //             alert("You can use the location");
//     //             navigator.geolocation.getCurrentPosition(
//     //                 position => {
//     //                     this.setState({
//     //                         region: {
//     //                             latitude: position.coords.latitude,
//     //                             longitude: position.coords.longitude,
//     //                             latitudeDelta: LATITUDE_DELTA,
//     //                             longitudeDelta: LONGITUDE_DELTA,
//     //                         }
//     //                     });
//     //                 },
//     //                 (error) => console.log(error.message),
//     //                 {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//     //             );
//     //             this.watchID = navigator.geolocation.watchPosition(
//     //                 position => {
//     //                     this.setState({
//     //                         region: {
//     //                             latitude: position.coords.latitude,
//     //                             longitude: position.coords.longitude,
//     //                             latitudeDelta: LATITUDE_DELTA,
//     //                             longitudeDelta: LONGITUDE_DELTA,
//     //                         }
//     //                     });
//     //                 }
//     //             );
//     //         } else {
//     //             console.log("location permission denied")
//     //             alert("Location permission denied");
//     //         }
//     //     } catch (err) {
//     //         console.warn(err)
//     //     }
//     // }
//     //
//     // async componentDidMount() {
//     //     await requestLocationPermission()
//     // }
//
//     componentDidMount() {
//         navigator.geolocation.getCurrentPosition(
//             position => {
//                 this.setState({
//                     region: {
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude,
//                         latitudeDelta: LATITUDE_DELTA,
//                         longitudeDelta: LONGITUDE_DELTA,
//                     }
//                 });
//             },
//             (error) => console.log(error.message),
//             {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//         );
//         this.watchID = navigator.geolocation.watchPosition(
//             position => {
//                 this.setState({
//                     region: {
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude,
//                         latitudeDelta: LATITUDE_DELTA,
//                         longitudeDelta: LONGITUDE_DELTA,
//                     }
//                 });
//             }
//         );
//     }
//
//     componentWillUnmount() {
//         navigator.geolocation.clearWatch(this.watchID);
//     }
//
//     render() {
//         return (
//             <MapView
//                 provider={PROVIDER_GOOGLE}
//                 style={styles.container}
//                 // customMapStyle={ RetroMapStyles }
//                 showsUserLocation={true}
//                 region={this.state.region}
//                 onRegionChange={region => this.setState({region})}
//                 onRegionChangeComplete={region => this.setState({region})}
//             >
//                 <MapView.Marker
//                     coordinate={this.state.region}
//                 />
//             </MapView>
//         );
//     }
//
//     _changeTheme(index) {
//         this.setState({
//             themeIndex: index
//         });
//     }
//
//
//     _logOut() {
//         ThemeService.setCurrentThemeIndex(this.state.themeIndex);
//         this.props.navigator.replace({
//             screen: ThemeService.getLoginScreen(),
//         });
//     }
//
// }
//
// let styles = StyleSheet.create({
//
//     settingsSection: {
//         marginBottom: 30,
//         paddingLeft: 15,
//         borderTopWidth: 0.5,
//         borderBottomWidth: 0.5,
//         borderColor: RkConfig.colors.blurBg,
//     },
//     settingsSectionSymmetric: {
//         paddingLeft: 0
//     },
//     settingsTitle: {
//         marginTop: 20,
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         fontSize: 13,
//         color: RkConfig.colors.blurBgStrong
//     },
//     setting: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingVertical: 10,
//         paddingRight: 10,
//         borderBottomWidth: 0.5,
//         borderBottomColor: RkConfig.colors.blurBg,
//     },
//     settingLabel: {
//         fontSize: 18,
//     },
//     noBottomBorder: {
//         borderBottomWidth: 0
//     },
//     container: {
//         height: '100%',
//         width: '100%',
//     },
//     scrollView: {
//         position: "absolute",
//         bottom: 30,
//         left: 0,
//         right: 0,
//         paddingVertical: 10,
//     },
//     endPadding: {
//         paddingRight: width - CARD_WIDTH,
//     },
//     card: {
//         padding: 10,
//         elevation: 2,
//         backgroundColor: "#FFF",
//         marginHorizontal: 10,
//         shadowColor: "#000",
//         shadowRadius: 5,
//         shadowOpacity: 0.3,
//         shadowOffset: {x: 2, y: -2},
//         height: CARD_HEIGHT,
//         width: CARD_WIDTH,
//         overflow: "hidden",
//     },
//     cardImage: {
//         flex: 3,
//         width: "100%",
//         height: "100%",
//         alignSelf: "center",
//     },
//     textContent: {
//         flex: 1,
//     },
//     cardtitle: {
//         fontSize: 12,
//         marginTop: 5,
//         fontWeight: "bold",
//     },
//     cardDescription: {
//         fontSize: 12,
//         color: "#444",
//     },
//     markerWrap: {
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     marker: {
//         width: 8,
//         height: 8,
//         borderRadius: 4,
//         backgroundColor: "rgba(130,4,150, 0.9)",
//     },
//     ring: {
//         width: 24,
//         height: 24,
//         borderRadius: 12,
//         backgroundColor: "rgba(130,4,150, 0.3)",
//         position: "absolute",
//         borderWidth: 1,
//         borderColor: "rgba(130,4,150, 0.5)",
//     },
// });
//
