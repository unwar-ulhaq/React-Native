import React from 'react';
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {Settings} from 'react-native-feather';

import List from './components/List';

const image = {
  uri: 'https://4.bp.blogspot.com/-jom3bTOOQqs/UnXZ-lOOeGI/AAAAAAAAAF8/WvM_5uXioJI/s1600/tumblr_mn4k71ujcU1s2jqm8o1_1280.jpgg',
};

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <StatusBar
          backgroundColor="#000000"
          barStyle="light-content"
          style="auto"
        />
        {/*        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingBottom: 48,
            borderBottomRightRadius: 40,
            borderTopRightRadius: 24,
          }}
        >*/}
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <Settings
            style={styles.settingIcon}
            stroke="grey"
            width={32}
            height={32}
          />
          <Text style={styles.text}>Some text about Image</Text>
        </ImageBackground>
        {/*    </View>*/}
        <List />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#000000',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 32,
  },
  text: {
    position: 'absolute',
    top: '80%',
    paddingLeft: 24,
    paddingRight: 24,
    color: '#FFFFFF',
    fontSize: 32,
    lineHeight: 48,
    textAlign: 'left',
    backgroundColor: '#1072c2',
    zIndex: 1,
  },
  settingIcon: {
    position: 'absolute',
    top: '5%',
    right: '5%',
  },
});

export default App;
