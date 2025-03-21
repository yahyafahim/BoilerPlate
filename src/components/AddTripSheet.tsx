import React, { forwardRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import Icons from 'src/assets/Icons';
import { Colors, Fonts } from 'src/themes';
import CustomOTPInput from './CustomOtpInput';
import CustomButton from './CustomButton';

interface AddTripSheetProps {
  onSuccess: () => void;
  onError: () => void;
}

const AddTripSheet = forwardRef<ActionSheetRef, AddTripSheetProps>(
  ({ onSuccess, onError }, ref) => {
    const [otp, setOtp] = useState<string>('');
    const [error, setError] = useState<string>('');

    const hideSheet = () => {
      ref && 'current' in ref ? ref.current?.hide() : null;
    };

    const handleVerifyOtp = () => {
      if (otp.length !== 6) {
        setError('Trip Code must be 6 digits');
      } else if (otp === '123456') {
        setError('');
        hideSheet();
        onSuccess();
      } else if (otp === '000000') {
        setError('');
        hideSheet();
        onError();
      } else {
        setError(
          'Invalid Trip Code! (current Trip Code is 123456 for success modal and 000000 for error modal)',
        );
      }
    };

    return (
      <ActionSheet
        ref={ref}
        gestureEnabled
        defaultOverlayOpacity={0.6}
        indicatorStyle={styles.indicator}
        onClose={() => setError('')}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome, Hansraj</Text>
            <TouchableOpacity onPress={hideSheet}>
              <Image source={Icons.cross} style={styles.crossIcon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>Enter your Trip Code to continue</Text>

          <View style={styles.infoContainer}>
            <Image source={Icons.info} style={styles.infoIcon} />
            <Text style={styles.infoText}>
              Tap to learn where to get the Trip Code
            </Text>
          </View>

          <View style={styles.otpContainer}>
            <CustomOTPInput
              onFilled={text => setOtp(text)}
              error={error}
              onFocus={() => setError('')}
            />
          </View>

          <CustomButton title="Add Trip" onPress={handleVerifyOtp} />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={styles.supportContainer}>
            <Image source={Icons.messageQuestion} style={styles.supportIcon} />
            <Text style={styles.supportText}>Need Help? Contact Support</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    );
  },
);

export default AddTripSheet;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: Colors.lightSilver,
    marginTop: 15,
  },
  container: {
    padding: 15,
    paddingBottom: 30,
    paddingTop: 0,
  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    color: Colors.textPrimary,
  },
  crossIcon: {
    width: 25,
    height: 25,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
  },
  infoContainer: {
    padding: 6,
    marginTop: 15,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: Colors.yellowBG,
  },
  infoIcon: {
    height: 20,
    width: 20,
  },
  infoText: {
    fontSize: 12,
    marginLeft: 5,
    color: Colors.yellow,
    fontFamily: Fonts.regular,
  },
  otpContainer: {
    marginTop: 50,
    marginBottom: 35,
  },
  supportContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  supportIcon: {
    height: 20,
    width: 20,
    tintColor: Colors.primary,
  },
  supportText: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.primary,
    marginLeft: 5,
  },
});
