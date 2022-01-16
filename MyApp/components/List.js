import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {ApiHooks} from '../hooks';

const List = () => {
  const {mediaArray} = ApiHooks.useMedia();
  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default List;
