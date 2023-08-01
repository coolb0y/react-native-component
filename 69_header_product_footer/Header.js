import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: 'orange',
    padding: 5,
  },
  headerText: {
    fontSize: 30,
    textAlign: 'right',
  },
});

export default Header;
