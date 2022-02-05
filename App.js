import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Card from './components/Card';
import Header from './components/Header';

const App = () => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <Header name="UI Exercise" />
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
