import React from 'react';
import Icons from 'src/assets/Icons';
import { Colors, Fonts } from 'src/themes';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface MonthSelectorProps {
  month: string;
  onPress: () => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({ month, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.monthSelector}>
    <Text style={styles.monthText}>{month}</Text>
    <Image source={Icons.chevronDown} style={styles.chevronIcon} />
  </TouchableOpacity>
);

export default MonthSelector;

const styles = StyleSheet.create({
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: Fonts.regular,
  },
  chevronIcon: {
    width: 12,
    height: 12,
    marginLeft: 5,
    resizeMode: 'contain',
    tintColor: Colors.primary,
  },
});
