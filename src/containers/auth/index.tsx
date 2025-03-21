import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from './Login';
import Onboarding from './Onboarding';
import OtpVerification from './OtpVerification';
import CompanyInvite from './CompanyInvite';
import SignInWithPhone from './SignInWithPhone';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'simple_push',
        headerShown: false,
      }}
      initialRouteName={'Onboarding'}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignInWithPhone" component={SignInWithPhone} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="CompanyInvite" component={CompanyInvite} />
    </Stack.Navigator>
  );
};

export default AuthStack;
