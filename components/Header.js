import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = props => {
  return (
    <View>
      <Text style={styles.header}>{props.name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    color: '#53b2cd',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
});
