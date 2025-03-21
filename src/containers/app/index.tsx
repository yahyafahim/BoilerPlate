import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTab from 'src/helpers/BottomTab';
import Home from './Home';
import MyTrips from './MyTrips';
import Expenses from './Expenses';
import Approval from './Approval';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={() => <BottomTab />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyTrips" component={MyTrips} />
      <Tab.Screen name="Expenses" component={Expenses} />
      <Tab.Screen name="Approval" component={Approval} />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />

      {/* any screen which do not have bottom tab */}

      {/* <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Account" component={Account} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
