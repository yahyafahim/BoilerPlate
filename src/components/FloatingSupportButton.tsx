import React from 'react';
import { Colors } from 'src/themes';
import Icons from 'src/assets/Icons';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavService } from 'src/utils';

const FloatingSupportButton = ({ bottom }: { bottom?: number }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => NavService.navigate('Support')}
      style={[styles.container, !!bottom && { bottom }]}>
      <Image source={Icons.messages} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default FloatingSupportButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    right: 25,
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  icon: {
    height: 28,
    width: 28,
  },
});
