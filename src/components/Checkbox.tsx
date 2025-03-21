import React, { FC, useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import Icons from 'src/assets/Icons';
import { Colors } from 'src/themes';

interface CheckboxProps {
  isChecked?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
  title?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  isChecked = false,
  containerStyle = {},
  iconStyle = {},
  onPress = () => {},
  title = '',
}) => {
  const [isCheck, setIsCheck] = useState(isChecked);

  const handlePress = () => {
    setIsCheck(!isCheck);
    onPress();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={styles.container}>
      <View style={[styles.checkbox, containerStyle]}>
        {isCheck && (
          <Image source={Icons.check} style={[styles.checkIcon, iconStyle]} />
        )}
      </View>
      {title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    backgroundColor: Colors.black,
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    width: 9,
    height: 9,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  title: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.black,
  },
});

export default Checkbox;
