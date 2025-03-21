import React, { FC } from 'react';
import {
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  Dimensions,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';

const { width } = Dimensions.get('screen');

interface CustomButtonProps {
  icon?: any;
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'social';
  iconStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}

const CustomButton: FC<CustomButtonProps> = ({
  icon,
  title,
  onPress,
  disabled = false,
  variant = 'primary',
  iconStyle,
  textStyle,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        { backgroundColor: disabled ? '#D9D9D9' : Colors.primary },
        variant === 'social' && styles.socialButton,
        buttonStyle,
      ]}>
      {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
      <Text
        style={[
          styles.text,
          variant === 'social' && styles.socialText,
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    marginTop: 15,
    borderRadius: 12,
    width: width - 40,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Fonts.medium,
  },
  socialButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  socialText: {
    color: Colors.textDisabled,
    fontFamily: Fonts.regular,
  },
});

export default CustomButton;
