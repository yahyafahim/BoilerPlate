import { Dimensions, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { OtpInput, OtpInputProps } from 'react-native-otp-entry';
import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';

interface CustomOTPInputProps extends OtpInputProps {
  error?: string;
  theme?: OtpInputProps['theme'];
  numberOfDigits?: number;
  wrapperStyle?: ViewStyle;
}

const { width } = Dimensions.get('window');

const CustomOTPInput = ({
  error,
  theme,
  numberOfDigits = 6,
  wrapperStyle,
  ...rest
}: CustomOTPInputProps) => {
  const hasError = !!error;
  return (
    <View style={{ alignItems: 'center', ...wrapperStyle }}>
      <OtpInput
        numberOfDigits={numberOfDigits}
        focusColor={Colors.textPrimary}
        autoFocus={false}
        hideStick={false}
        placeholder="-"
        blurOnFilled={true}
        focusStickBlinkingDuration={500}
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: {
            ...styles.pinCodeContainer,
            ...(hasError && styles.pinCodeErrorContainer),
            width: (width - 150) / numberOfDigits,
          },
          pinCodeTextStyle: styles.pinCodeText,
          placeholderTextStyle: styles.placeholderText,
          focusedPinCodeContainerStyle: hasError
            ? styles.pinCodeErrorContainer
            : {},
          focusStickStyle: styles.focusStick,

          ...theme,
        }}
        {...rest}
      />
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomOTPInput;

const styles = StyleSheet.create({
  container: {
    width: width - 100,
  },
  pinCodeContainer: {
    borderColor: Colors.border,
    height: 55,
  },
  pinCodeErrorContainer: {
    borderColor: Colors.error,
  },
  activePinCodeContainer: {
    borderColor: Colors.border,
  },
  pinCodeText: {
    color: Colors.textPrimary,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  focusStick: {
    height: 20,
    width: 2,
  },
  placeholderText: {
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 20,
  },
  errorText: {
    color: Colors.error,
    marginTop: 10,
    fontFamily: Fonts.regular,
    fontSize: 14,
    textAlign: 'center',
  },
});
