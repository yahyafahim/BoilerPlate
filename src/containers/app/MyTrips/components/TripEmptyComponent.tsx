import React from 'react';
import { Shadows } from 'src/utils';
import { Colors } from 'src/themes';
import { View, StyleSheet } from 'react-native';

const TripEmptyComponent = () => <View style={styles.emptyContainer} />;

export default TripEmptyComponent;

const styles = StyleSheet.create({
  emptyContainer: {
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 15,
    backgroundColor: Colors.white,
    ...Shadows.shadow3,
  },
});
