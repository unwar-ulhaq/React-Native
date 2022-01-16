import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Constants} from '../utilities';
import ListItem from './ListItem';

const List = () => {
  const endpoint = 'media';
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(Constants.BASE_URL + endpoint);
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const json = await response.json();

      const media = await Promise.all(
        json.map(async (mediaItem) => {
          const mediaItemResponse = await fetch(
            Constants.BASE_URL + endpoint + '/' + mediaItem.file_id
          );
          return await mediaItemResponse.json();
        })
      );
      setMediaArray(media);
    } catch (error) {
      console.error('fetching media error', error);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default List;
