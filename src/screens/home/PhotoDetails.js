import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {getTopBarOptions} from '../../navigation/helper';
import {getPhotoById} from '../../api/api';
import {globalStyles} from '../../styles/globalStyles';

const PhotoDetails = ({photoId}) => {
  const [photo, setPhoto] = useState(null);
  const {title, url, thumbnailUrl} = photo || {};

  const retrievePhoto = async () => {
    setPhoto(await getPhotoById(photoId));
  };

  useEffect(() => {
    retrievePhoto();
  }, []);

  return (
    <View style={globalStyles.root}>
      <Text style={[globalStyles.title, styles.title]}>{title}</Text>
      <Image style={styles.image} source={{uri: url}} />
    </View>
  );
};
PhotoDetails.options = getTopBarOptions('Photo details');
export default PhotoDetails;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: '100%',
  },
});
