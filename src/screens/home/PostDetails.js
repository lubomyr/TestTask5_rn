import {View, Text} from 'react-native';
import {getTopBarOptions} from '../../navigation/helper';

const PostDetails = props => {
  return (
    <View>
      <Text>Post Details</Text>
    </View>
  );
};
PostDetails.options = getTopBarOptions('Post details');
export default PostDetails;
