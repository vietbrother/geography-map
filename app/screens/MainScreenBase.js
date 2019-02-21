import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
    Image,
    TabBarIOS,
} from 'react-native';

import ThemeService from '../util/ThemeService';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainScreenBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'profile'
        };
        this._screens = {
            profile: ThemeService.getProfileScreen(),
            news: ThemeService.getNewsScreen(),
            chat: ThemeService.getChatListScreen(),
            settings: ThemeService.getSettingsScreen(),
            map: ThemeService.getMapsScreen(),
            home: ThemeService.getHomeScreen()
        }
    }

    render() {
        let Wrapper = ThemeService.getAppWrapperComponent();
        return (
            <Wrapper>
                {this.renderTabBar(Wrapper.tabProps)}
            </Wrapper>
        )
    }

    renderTabBar(tabBarProps) {
        return (
            /*<TabBarIOS {...tabBarProps}>
              <Icon.TabBarItemIOS
                title="Profile"
                iconName="ios-person"
                selected={this.state.selected === 'profile'}
                onPress={() => {
                  this.setState({
                    selected: 'profile',
                  });
                }}>
                {<this._screens.profile navigator={this.props.navigator}/>}
              </Icon.TabBarItemIOS>
              <Icon.TabBarItemIOS
                title="News"
                iconName="ios-paper-outline"
                selected={this.state.selected === 'news'}
                onPress={() => {
                  this.setState({
                    selected: 'news',
                  });
                }}>
                {<this._screens.news navigator={this.props.navigator}/>}
              </Icon.TabBarItemIOS>
              <Icon.TabBarItemIOS
                title="Chats"
                iconName="ios-chatbubbles-outline"
                badge={1}
                selected={this.state.selected === 'chat'}
                onPress={() => {
                  this.setState({
                    selected: 'chat',
                  });
                }}>
                {<this._screens.chat navigator={this.props.navigator}/>}
              </Icon.TabBarItemIOS>
              <Icon.TabBarItemIOS
                title="Settings"
                iconName="ios-settings-outline"
                selectedIconName="ios-settings"
                selected={this.state.selected === 'settings'}
                onPress={() => {
                  this.setState({
                    selected: 'settings',
                  });
                }}>
                {<this._screens.settings navigator={this.props.navigator}/>}
              </Icon.TabBarItemIOS>
            </TabBarIOS>*/



            <TabNavigator>
                <TabNavigator.Item
                    title="Map"
                    iconName="ios-map"
                    renderIcon={() => <Icon name={"ios-map"} size={30}/>}
                    selected={this.state.selected === 'map'}
                    onPress={() => {
                        this.setState({
                            selected: 'map',
                        });
                    }}>
                    {<this._screens.map navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="Profile"
                    iconName="ios-person"
                    // renderIcon={() => <Image source={Icon.getImageSource("ios-person")} />}
                    renderIcon={() => <Icon name={"ios-person"} size={30}/>}
                    selected={this.state.selected === 'profile'}
                    onPress={() => {
                        this.setState({
                            selected: 'profile',
                        });
                    }}>
                    {<this._screens.profile navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="Trang chủ"
                    iconName="ios-paper-outline"
                    renderIcon={() => <Icon name={"md-home"} size={30}/>}
                    selected={this.state.selected === 'home'}
                    onPress={() => {
                        this.setState({
                            selected: 'home',
                        });
                    }}>
                    {<this._screens.home navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="Tin tức"
                    iconName="ios-paper-outline"
                    renderIcon={() => <Icon name={"ios-paper-outline"} size={30}/>}
                    selected={this.state.selected === 'news'}
                    onPress={() => {
                        this.setState({
                            selected: 'news',
                        });
                    }}>
                    {<this._screens.news navigator={this.props.navigator}/>}
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="Chats"
                    iconName="ios-chatbubbles-outline"
                    badge={1}
                    selected={this.state.selected === 'chat'}
                    onPress={() => {
                        this.setState({
                            selected: 'chat',
                        });
                    }}>
                    {<this._screens.chat navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="Settings"
                    iconName="ios-settings-outline"
                    selectedIconName="ios-settings"
                    selected={this.state.selected === 'settings'}
                    onPress={() => {
                        this.setState({
                            selected: 'settings',
                        });
                    }}>
                    {<this._screens.settings navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="Hỗ trợ"
                    iconName="ios-settings-outline"
                    selectedIconName="ios-settings"
                    renderIcon={() => <Icon name={"ios-help-circle-outline"} size={30}/>}
                    selected={this.state.selected === 'settings'}
                    onPress={() => {
                        this.setState({
                            selected: 'settings',
                        });
                    }}>
                    {<this._screens.settings navigator={this.props.navigator}/>}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

}

