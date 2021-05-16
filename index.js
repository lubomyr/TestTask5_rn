import React from 'react';
import {Navigation} from 'react-native-navigation';
import LoginScreen from './src/screens/login/LoginScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import PostsTab from './src/screens/home/tabs/PostsTab';
import PhotosTab from './src/screens/home/tabs/PhotosTab';
import UsersTab from './src/screens/home/tabs/UsersTab';
import {loginStack, homeStack} from './src/navigation/navigationStacks';
import {getUserFromStorage} from './src/helpers/authHelpers';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Profile', () => ProfileScreen);
Navigation.registerComponent('Posts', () => PostsTab);
Navigation.registerComponent('Photos', () => PhotosTab);
Navigation.registerComponent('Users', () => UsersTab);

Navigation.events().registerAppLaunchedListener(async () => {
  const authUser = await getUserFromStorage();
  const rootStack = authUser ? homeStack : loginStack;
  Navigation.setRoot({
    root: rootStack,
  });
});
