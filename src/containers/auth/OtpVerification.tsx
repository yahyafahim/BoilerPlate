import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';
import { NavService } from 'src/utils';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from 'src/components/CustomButton';
import AuthBackground from 'src/components/AuthBackground';
import CustomOTPInput from 'src/components/CustomOtpInput';
import useCountdownTimer from 'src/hooks/useCountdownTimer';

interface OtpVerificationProps {
  route: { params: { phone: string } };
}

const OtpVerification = ({ route }: OtpVerificationProps) => {
  const { phone } = route.params || { phone: '+1234567890' };

  const { remainingTime, isFinished, reset } = useCountdownTimer(59);

  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      setError('OTP must be 6 digits');
    } else if (otp !== '123456') {
      setError('Please enter correct OTP (current OTP is 123456)');
    } else {
      setError('');
      NavService.navigate('CompanyInvite');
      // Handle successful OTP verification here
    }
  };

  return (
    <AuthBackground>
      <View style={styles.container}>
        <Text style={styles.title}>{'OTP\nVerification'}</Text>
        <Text style={styles.description}>
          We've sent a 6-digit OTP to
          {'\n'}
          {phone}
        </Text>

        <View style={styles.OtpContainer}>
          <CustomOTPInput
            onFilled={text => setOtp(text)}
            error={error}
            onFocus={() => setError('')}
          />

          <Text style={styles.resendText}>
            Didn’t get a code?{' '}
            <Text
              onPress={reset}
              style={[
                styles.resendLink,
                { color: isFinished ? Colors.primary : Colors.textDisabled },
              ]}>
              Resend
            </Text>{' '}
            {!isFinished && `in ${remainingTime} s`}
          </Text>
        </View>
      </View>
      <CustomButton
        title="Verify OTP"
        onPress={handleVerifyOtp}
        buttonStyle={styles.verifyButton}
      />
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  OtpContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 30,
    lineHeight: 32,
    fontFamily: Fonts.bold,
    color: Colors.textPrimary,
  },
  description: {
    fontSize: 14,
    marginTop: 30,
    lineHeight: 22,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
  },
  resendText: {
    marginTop: 30,
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  resendLink: {
    fontFamily: Fonts.semiBold,
  },
  verifyButton: {
    marginBottom: 15,
    bottom: 0,
  },
});

export default OtpVerification;
