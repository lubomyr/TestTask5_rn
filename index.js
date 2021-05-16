import React from 'react';
import {Navigation} from 'react-native-navigation';
import LoginScreen from './src/screens/login/LoginScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import PostsTab from './src/screens/home/tabs/PostsTab';
import PhotosTab from './src/screens/home/tabs/PhotosTab';
import UsersTab from './src/screens/home/tabs/UsersTab';
import PostDetails from './src/screens/home/PostDetails';
import PhotoDetails from './src/screens/home/PhotoDetails';
import UserDetails from './src/screens/home/UserDetails';
import {loginStack, homeStack} from './src/navigation/navigationStacks';
import {getUserFromStorage} from './src/helpers/authHelpers';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Profile', () => ProfileScreen);
Navigation.registerComponent('Posts', () => PostsTab);
Navigation.registerComponent('Photos', () => PhotosTab);
Navigation.registerComponent('Users', () => UsersTab);
Navigation.registerComponent('PostDetails', () => PostDetails);
Navigation.registerComponent('PhotoDetails', () => PhotoDetails);
Navigation.registerComponent('UserDetails', () => UserDetails);

Navigation.events().registerAppLaunchedListener(async () => {
  const authUser = await getUserFromStorage();
  const rootStack = authUser ? homeStack : loginStack;
  Navigation.setRoot({
    root: rootStack,
  });
});
