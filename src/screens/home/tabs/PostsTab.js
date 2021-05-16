import React, {useEffect, useState} from 'react';
import {View, FlatList, BackHandler} from 'react-native';
import {
  getTopBarWithProfileOptions,
  PROFILE_BUTTON_ID,
} from '../../../navigation/helper';
import {useNavigationButtonPress} from 'react-native-navigation-hooks';
import {Navigation} from 'react-native-navigation';
import {screenComponents} from '../../../navigation/screenComponents';
import {getPosts} from '../../../api/api';
import PostItem from './components/PostItem';
import {globalStyles} from '../../../styles/globalStyles';
import {onBackPress} from '../../../helpers/onBackPressHelper';

const PostsTab = props => {
  const [posts, setPosts] = useState([]);

  useNavigationButtonPress(e => {
    if (e.buttonId === PROFILE_BUTTON_ID) {
      Navigation.push(props.componentId, screenComponents.profile);
    }
  }, props.componentId);

  const showPostDetails = post => {
    screenComponents.postDetails.component.passProps = {postId: post?.id};
    Navigation.push(props.componentId, screenComponents.postDetails);
  };

  useEffect(() => {
    const retrievePosts = async () => {
      setPosts(await getPosts());
    };
    retrievePosts();
    BackHandler.addEventListener('hardwareBackPress', () => onBackPress(props));
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () =>
        onBackPress(props),
      );
  }, []);

  return (
    <View style={globalStyles.root}>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <PostItem
            style={globalStyles.items}
            post={item}
            onPress={() => showPostDetails(item)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default PostsTab;
PostsTab.options = getTopBarWithProfileOptions('Posts');
