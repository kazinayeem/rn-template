/* eslint-disable react-native/no-inline-styles */
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {SafeAreaView} from 'react-native';

import {Button, Appbar} from 'react-native-paper';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <Button icon="camera">Press me</Button>
      <Icon name="rocket" size={30} color="#900" />
    </SafeAreaView>
  );
}

export default App;
