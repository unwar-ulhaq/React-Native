import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity}>
      <Image
        style={styles.touchableImage}
        source={{uri: props.singleMedia.thumbnails.w160}}
      />
      <View style={styles.touchableText}>
        <Text style={styles.textTitle}>{props.singleMedia.title}</Text>
        <Text style={styles.textDescription}>
          {props.singleMedia.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#989898',
    borderBottomWidth: 4,
    borderBottomColor: '#ffffff',
  },
  touchableImage: {
    flex: 1,
    padding: 30,
    flexWrap: 'wrap',
  },
  touchableText: {
    flex: 2,
    padding: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textDescription: {},
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
