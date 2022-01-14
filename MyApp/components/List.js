import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

const url =
  'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';

// const mediaArray = [];

// loadMedia();

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setMediaArray(json);
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
