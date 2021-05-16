import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const PhotoItem = props => {
  const {style, photo, onPress, imageStyle} = props;
  const {title, url, thumbnailUrl} = photo || {};
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image style={imageStyle} source={{uri: thumbnailUrl}} />
    </TouchableOpacity>
  );
};
export default PhotoItem;
