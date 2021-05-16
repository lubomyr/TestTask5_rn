import {BackHandler} from 'react-native';
import {Navigation} from 'react-native-navigation';

export const onBackPress = props => {
  if (
    props.componentId === 'LOGIN_SCREEN' ||
    props.componentId === 'POSTS_TAB_SCREEN'
  ) {
    BackHandler.exitApp();
  } else {
    Navigation.pop(props.componentId);
  }

  return true;
};
