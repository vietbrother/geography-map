import React, {Component} from 'react';
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
} from 'react-native';



import ThemeService from '../util/ThemeService';
import Icon from 'react-native-vector-icons/Ionicons';
import {RkButton, RkCard, RkText, RkTextInput, RkSeparator, RkConfig} from 'react-native-ui-kitten';

export default class ChartScreenBase extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView>

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 50, paddingRight: 50}}>
                        <RkTextInput
                          rkType='rounded'
                          containerStyle={styles.inputContainer}
                          label={<Icon name='ios-person-outline'/>}
                          labelStyle={styles.inputIcon}
                          style={styles.input}
                          placeholder={'Tên'}
                          placeholderTextColor={RkConfig.colors.lightGray}/>
                        <RkTextInput
                          rkType='rounded'
                          containerStyle={styles.inputContainer}
                          label={<Icon name='ios-mail-outline'/>}
                          labelStyle={styles.inputIcon}
                          style={styles.input}
                          placeholder={'Email'}
                          placeholderTextColor={RkConfig.colors.lightGray}/>
                        <RkTextInput
                          rkType='rounded'
                          containerStyle={styles.inputContainer}
                          label={<Icon name='ios-filing-outline'/>}
                          labelStyle={styles.inputIcon}
                          style={styles.input}
                          placeholder={'Tiêu đề'}
                          placeholderTextColor={RkConfig.colors.lightGray}/>
                        <RkTextInput
                          rkType='rounded'
                          containerStyle={styles.inputContainer}
                          label={<Icon name='ios-paper-outline'/>}
                          labelStyle={styles.inputIcon}
                          style={styles.input}
                          placeholder={'Tin nhắn'}
                          placeholderTextColor={RkConfig.colors.lightGray}/>

                        <View style={{alignItems: 'center'}}>
                            <RkButton rkCardHeader
                                      style={styles.buttonContainer}
                                      rkType='circle shadow'
                            >
                                <Text style={{color: '#fdfdfd'}}>Gửi</Text>
                            </RkButton>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 70,
        paddingBottom: 20,
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    inputContainer: {
        backgroundColor: RkConfig.colors.blurBgWhite,
        marginTop: 15,
        paddingLeft: 15
    },
    inputIcon: {
        //color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#07205a',
    },
    inputIconLock: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#07205a',
    },
    input: {
        flex: 1,
        color: '#07205a',
        fontWeight: '300',
        fontSize: 16,
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
        backgroundColor: '#07205a',
        // shadowColor: RkConfig.colors.blurPrimary,
        paddingVertical: 12,
        shadowRadius: 12,
        shadowOpacity: 0.4,
        marginTop: 20,
    },
    buttonInner: {
        fontSize: 22,
        color: 'white',
    },
});
