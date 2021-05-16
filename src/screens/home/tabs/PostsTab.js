import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {
  getTopBarWithProfileOptions,
  PROFILE_BUTTON_ID,
} from '../../../navigation/helper';
import {useNavigationButtonPress} from 'react-native-navigation-hooks';
import {Navigation} from 'react-native-navigation';
import {
  postDetailsStack,
  profileStack,
} from '../../../navigation/navigationStacks';
import {getPosts} from '../../../api/api';
import PostItem from './components/PostItem';
import {globalStyles} from '../../../styles/globalStyles';

const PostsTab = props => {
  const [posts, setPosts] = useState([]);

  useNavigationButtonPress(e => {
    if (e.buttonId === PROFILE_BUTTON_ID) {
      Navigation.push(props.componentId, profileStack);
    }
  }, props.componentId);

  const showPostDetails = post => {
    postDetailsStack.stack.children[0].component.passProps = {postId: post?.id};
    Navigation.push(props.componentId, postDetailsStack);
  };

  useEffect(() => {
    const retrievePosts = async () => {
      setPosts(await getPosts());
    };
    retrievePosts();
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
