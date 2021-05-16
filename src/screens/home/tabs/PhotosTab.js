import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {getTopBarWithProfileOptions} from '../../../navigation/helper';
import {useNavigationButtonPressed} from '../../../hooks/navigationHooks';
import {
  profileStack,
  photoDetailsStack,
} from '../../../navigation/navigationStacks';
import {getPhotos} from '../../../api/api';
import {globalStyles} from '../../../styles/globalStyles';
import PhotoItem from './components/PhotoItem';

const PhotosTab = props => {
  const [photos, setPhotos] = useState([]);
  const [layout, setLayout] = useState(null);

  const imagesPerRow = 3;
  const imageWidth = layout?.width / imagesPerRow;
  const imageHeight = imageWidth;

  useNavigationButtonPressed(e => {
    if (e.buttonId === 'PROFILE_BUTTON_ID') {
      Navigation.push(props.componentId, profileStack);
    }
  }, props.componentId);

  const showPhotoDetails = photo => {
    Navigation.push(props.componentId, photoDetailsStack);
  };

  useEffect(() => {
    const retrievePhotos = async () => {
      setPhotos(await getPhotos());
    };
    retrievePhotos();
  }, []);

  const photoList = photos.map(item => (
    <PhotoItem
      imageStyle={{width: imageWidth, height: imageHeight}}
      photo={item}
      onPress={() => showPhotoDetails(item)}
    />
  ));

  return (
    <ScrollView styles={globalStyles.root}>
      <View
        style={styles.imageListContainer}
        onLayout={event => {
          const updLayout = event.nativeEvent.layout;
          if (layout !== updLayout) {
            setLayout(updLayout);
          }
        }}>
        {photoList}
      </View>
    </ScrollView>
  );
};
export default PhotosTab;
PhotosTab.options = getTopBarWithProfileOptions('Photos');

const styles = StyleSheet.create({
  imageListContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
