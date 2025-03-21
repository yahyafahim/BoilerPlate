import {
  signInWithOTP,
  getCurrentUser,
  signInWithGoogle,
} from 'src/redux/services/firebase';
import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';
import Icons from 'src/assets/Icons';
import Images from 'src/assets/Images';
import { NavService } from 'src/utils';
import React, { useState } from 'react';
import CustomButton from 'src/components/CustomButton';
import AuthBackground from 'src/components/AuthBackground';
import { isValidEmail } from 'src/redux/services/validations';
import refreshToken from 'src/redux/services/fetchAuthTokenTemp';
import CustomTextInput from 'src/components/Form/CustomTextInput';
import { Text, View, Image, Platform, StyleSheet } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');
    if (!isValidEmail(email)) {
      setError('Please enter a correct Email Address');
    } else {
      signInWithOTP(email);
    }
  };

  const googleSingIn = async () => {
    await signInWithGoogle();
    await refreshToken();
    NavService.reset(0, [{ name: 'AppStack' }]);
  };

  return (
    <AuthBackground back={false} help={false}>
      <View style={styles.container}>
        <Text style={styles.greetingText}>Hello,</Text>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Image source={Images.logo} style={styles.logo} />
        </View>

        <CustomTextInput
          label="Email Address"
          placeholder="Enter Email Address"
          value={email}
          onChangeText={setEmail}
          error={error}
        />

        <CustomButton title="Continue with Email" onPress={handleSubmit} />

        <Image source={Images.divider} style={styles.divider} />

        <CustomButton
          variant="social"
          icon={Icons.google}
          title="Continue with Google"
          onPress={googleSingIn}
        />
        {Platform.OS === 'ios' && (
          <CustomButton
            variant="social"
            icon={Icons.apple}
            title="Continue with Apple"
            onPress={getCurrentUser}
          />
        )}
      </View>

      <Text style={styles.declaration}>
        By proceeding, you agree to Flyzy’s{' '}
        <Text style={styles.declarationLink}>{'User\nAgreement'}</Text>,{' '}
        <Text style={styles.declarationLink}>T&Cs</Text>
        {' and '}
        <Text style={styles.declarationLink}>Privacy Policy</Text>
      </Text>
    </AuthBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 32,
    fontFamily: Fonts.bold,
    color: Colors.text,
    width: '100%',
    lineHeight: 42,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: Fonts.semiBold,
    color: Colors.text,
    lineHeight: 32,
  },
  logo: {
    height: 28,
    width: 65,
    resizeMode: 'contain',
  },
  divider: {
    marginTop: 40,
    marginBottom: 25,
    width: '100%',
    resizeMode: 'contain',
  },
  declaration: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    color: Colors.textDisabled,
  },
  declarationLink: {
    fontFamily: Fonts.bold,
    textDecorationLine: 'underline',
  },
});
