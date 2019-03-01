import React from 'react';

import ChatListScreenBase from '../screens/ChatListScreenBase';
import ChatScreenBase from '../screens/ChatScreenBase';
import ProfileScreenBase from '../screens/ProfileScreenBase';
import MainScreenBase from '../screens/MainScreenBase';
import NewsScreenBase from '../screens/NewsScreenBase';

import AppWrapperClassic from '../components/classic/AppWrapper';
import AppWrapperBlur from '../components/blur/AppWrapper';
import PostBase from '../components/common/Post';
import PostMaterial from '../components/material/Post';
import ChatItemClassic from '../components/classic/ChatItem';
import ChatItemBlur from '../components/blur/ChatItem';
import ChatItemMaterial from '../components/material/ChatItem';
import ChatListHeaderClassic from '../components/classic/ChatListHeader';
import ChatListHeaderBlur from '../components/blur/ChatListHeader';
import ChatListHeaderMaterial from '../components/material/ChatListHeader';
import ChatFooterClassic from '../components/classic/ChatFooter';
import ChatFooterBlur from '../components/blur/ChatFooter';
import ChatFooterMaterial from '../components/material/ChatFooter';
import MessageClassic from '../components/classic/Message';
import MessageBlur from '../components/blur/Message';
import MessageMaterial from '../components/material/Message';
import Toolbar from '../components/common/Toolbar';
import ToolbarBlur from '../components/blur/Toolbar';
import ToolbarMaterial from '../components/material/Toolbar';
import ProfileTabClassic from '../components/classic/ProfileTab';
import ProfileTabBlur from '../components/blur/ProfileTab';
import ProfileTabMaterial from '../components/material/ProfileTab';
import ProfileClassic from '../components/classic/Profile';
import ProfileBlur from '../components/blur/Profile';
import ProfileMaterial from '../components/material/Profile';
import NewsHeadClassic from '../components/classic/NewsHead';
import NewsHeadBlur from '../components/blur/NewsHead';
import NewsHeadMaterial from '../components/material/NewsHead';

import MapListHeaderBlur from '../components/blur/MapListHeader'
import MapItemBlur from '../components/blur/MapItem'

import LoginScreenClassic from '../screens/login/LoginScreenClassic';
import SettingsScreenBase from '../screens/SettingsScreenBase';
import MapScreenBase from '../screens/MapScreenBase.js';
import HomeScreenBase from '../screens/HomeScreenBase.js';

import LoginScreenMaterial from '../screens/login/LoginScreenMaterial';
import MainScreenMaterial from '../screens/MainScreenMaterial';

import LoginScreenBlur from '../screens/login/LoginScreenBlur';

import {RkConfig} from 'react-native-ui-kitten';
import MapSearchListScreenBase from '../screens/MapSearchListScreenBase.js';
import MapSearchScreenBase from '../screens/MapSearchScreenBase.js';
import SupportScreenBase from '../screens/SupportScreenBase.js';
import ChartScreenBase from '../screens/ChartScreenBase.js';

let classicTheme = {
  mainScreen: MainScreenBase,
  profileScreen: ProfileScreenBase,
  chatListScreen: ChatListScreenBase,
  chatScreen: ChatScreenBase,
  loginScreen: LoginScreenClassic,
  newsScreen: NewsScreenBase,
  settingsScreens: SettingsScreenBase,
  appWrapperComponent: AppWrapperClassic,
  postComponent: PostBase,
  chatItemComponent: ChatItemClassic,
  chatListHeaderComponent: ChatListHeaderClassic,
  messageComponent: MessageClassic,
  chatFooterComponent: ChatFooterClassic,
  toolbarComponent: Toolbar,
  profileTabComponent: ProfileTabClassic,
  profileComponent: ProfileClassic,
  newsHeadComponent: NewsHeadClassic,

  mapScreens: MapScreenBase,
  homeScreens: HomeScreenBase,
  mapSearchListScreen: MapSearchListScreenBase,
  mapSearchScreen: MapSearchScreenBase,
  mapListHeaderComponent: MapListHeaderBlur,

  setup: function () {
    RkConfig.theme = RkConfig.themes.classic;
  }
};

let materialTheme = {
  mainScreen: MainScreenMaterial,
  profileScreen: ProfileScreenBase,
  chatListScreen: ChatListScreenBase,
  chatScreen: ChatScreenBase,
  loginScreen: LoginScreenMaterial,
  newsScreen: NewsScreenBase,
  settingsScreens: SettingsScreenBase,


  mapScreens: MapScreenBase,
  homeScreens: HomeScreenBase,
  mapSearchListScreen: MapSearchListScreenBase,
  mapSearchScreen: MapSearchScreenBase,
  mapListHeaderComponent: MapListHeaderBlur,

  appWrapperComponent: AppWrapperClassic,
  postComponent: PostMaterial,
  chatItemComponent: ChatItemMaterial,
  chatListHeaderComponent: ChatListHeaderMaterial,
  messageComponent: MessageMaterial,
  chatFooterComponent: ChatFooterMaterial,
  toolbarComponent: ToolbarMaterial,
  profileTabComponent: ProfileTabMaterial,
  profileComponent: ProfileMaterial,
  newsHeadComponent: NewsHeadMaterial,
  setup: function () {
      RkConfig.theme = RkConfig.themes.material;
  }
};

let blurTheme = {
  mainScreen: MainScreenBase,
  profileScreen: ProfileScreenBase,
  chatListScreen: ChatListScreenBase,
  chatScreen: ChatScreenBase,
  loginScreen: LoginScreenBlur,
  newsScreen: NewsScreenBase,
  settingsScreens: SettingsScreenBase,

  mapScreens: MapScreenBase,
  homeScreens: HomeScreenBase,
  mapSearchListScreen: MapSearchListScreenBase,
  mapSearchScreen: MapSearchScreenBase,
  mapListHeaderComponent: MapListHeaderBlur,
  mapItemComponent: MapItemBlur,
  supportScreenBase: SupportScreenBase,
  chartScreenBase: ChartScreenBase,


  appWrapperComponent: AppWrapperBlur,
  postComponent: PostBase,
  chatItemComponent: ChatItemBlur,
  chatListHeaderComponent: ChatListHeaderBlur,
  messageComponent: MessageBlur,
  chatFooterComponent: ChatFooterBlur,
  toolbarComponent: ToolbarBlur,
  profileTabComponent: ProfileTabBlur,
  profileComponent: ProfileBlur,
  newsHeadComponent: NewsHeadBlur,
  setup: function () {
    RkConfig.theme = RkConfig.themes.blur;
  }
};


let themes = [
  classicTheme,
  materialTheme,
  blurTheme
];

let currentThemeIndex = 2;
themes[currentThemeIndex].setup();

export default ThemeService = {

  getCurrentThemeIndex: () => currentThemeIndex,
  setCurrentThemeIndex: index => {
    currentThemeIndex = index;
    themes[currentThemeIndex].setup();
  },

  getMainScreen: () => themes[currentThemeIndex].mainScreen,
  getLoginScreen: () => themes[currentThemeIndex].loginScreen,
  getChatScreen: () => themes[currentThemeIndex].chatScreen,
  getChatListScreen: () => themes[currentThemeIndex].chatListScreen,
  getNewsScreen: () => themes[currentThemeIndex].newsScreen,
  getProfileScreen: () => themes[currentThemeIndex].profileScreen,
  getSettingsScreen: () => themes[currentThemeIndex].settingsScreens,
  getSupportScreenBase: () => themes[currentThemeIndex].supportScreenBase,
  getChartScreenBase: () => themes[currentThemeIndex].chartScreenBase,

  getMapsScreen: () => themes[currentThemeIndex].mapScreens,
  getHomeScreen: () => themes[currentThemeIndex].homeScreens,
  getMapSearchScreen: () => themes[currentThemeIndex].mapSearchScreen,
  getMapSearchListScreen: () => themes[currentThemeIndex].mapSearchListScreen,
  getMapListHeaderComponent: () => themes[currentThemeIndex].mapListHeaderComponent,
  getMapItemComponent: () => themes[currentThemeIndex].mapItemComponent,

  getAppWrapperComponent: () => themes[currentThemeIndex].appWrapperComponent,
  getPostComponent: () => themes[currentThemeIndex].postComponent,
  getChatItemComponent: () => themes[currentThemeIndex].chatItemComponent,
  getChatListHeaderComponent: () => themes[currentThemeIndex].chatListHeaderComponent,
  getMessageComponent: () => themes[currentThemeIndex].messageComponent,
  getChatFooterComponent: () => themes[currentThemeIndex].chatFooterComponent,
  getToolbarComponent: () => themes[currentThemeIndex].toolbarComponent,
  getProfileTabComponent: () => themes[currentThemeIndex].profileTabComponent,
  getProfileComponent: () => themes[currentThemeIndex].profileComponent,
  getNewsHeadComponent: () => themes[currentThemeIndex].newsHeadComponent
}