import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {getTopBarOptions} from '../../navigation/helper';
import {getPostById, getComments} from '../../api/api';
import PostItem from './tabs/components/PostItem';
import CommentItem from './components/CommentItem';
import {globalStyles} from '../../styles/globalStyles';

const PostDetails = ({postId}) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const retrievePost = async () => {
    setPost(await getPostById(postId));
  };

  const retrieveComments = async () => {
    setComments(await getComments(postId));
  };

  const retrieveData = () => {
    retrievePost();
    retrieveComments();
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const commentsView = comments.map(item => (
    <CommentItem key={item?.id} style={globalStyles.items} comment={item} />
  ));

  return (
    <ScrollView>
      <View style={globalStyles.root}>
        <PostItem post={post} />
        <Text style={styles.commentsLabel}>Comments:</Text>
        {commentsView}
      </View>
    </ScrollView>
  );
};
PostDetails.options = getTopBarOptions('Post details');
export default PostDetails;

const styles = StyleSheet.create({
  commentsLabel: {
    marginTop: 20,
    fontWeight: 'bold',
  }
})
