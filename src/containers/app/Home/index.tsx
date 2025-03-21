import React, { useEffect } from 'react';
import { Colors, Fonts } from 'src/themes';
import { Text, StyleSheet } from 'react-native';
import { ProfilePrompt, Swiper } from './components';
import HotelBookings from 'src/components/HotelBookings';
import AppBackground from 'src/components/AppBackground';
import FlightBookings from 'src/components/FlightBookings';
import refreshToken from 'src/redux/services/fetchAuthTokenTemp';
import EmptyHotelBookings from 'src/components/EmptyHotelBookings';
import EmptyFlightBookings from 'src/components/EmptyFlightBookings';
import { flightBookings, hotelBookings } from 'src/config/dummyData';

const Home = () => {
  useEffect(() => {
    refreshToken();
  }, []);
  return (
    <AppBackground homeHeader containerStyle={{ paddingBottom: 0 }}>
      <Text style={styles.greeting}>Hello John 👋</Text>
      <Text style={styles.subtitle}>How are you doing today?</Text>
      <ProfilePrompt />

      <Text style={styles.sectionTitle}>Ongoing Flight</Text>
      <Swiper
        data={[]}
        renderItem={props => <FlightBookings {...props} />}
        ListEmptyComponent={EmptyFlightBookings}
      />

      <Text style={styles.sectionTitle}>My Flight Bookings</Text>

      <Swiper
        data={flightBookings}
        renderItem={props => <FlightBookings {...props} />}
        ListEmptyComponent={EmptyFlightBookings}
      />

      <Text style={styles.sectionTitle}>My Hotel Bookings</Text>

      <Swiper
        data={hotelBookings}
        renderItem={props => <HotelBookings {...props} />}
        ListEmptyComponent={EmptyHotelBookings}
      />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.textPrimary,
    lineHeight: 32,
    marginTop: 20,
    marginHorizontal: 20,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Fonts.medium,
    color: Colors.textPrimary,
    lineHeight: 32,
    marginHorizontal: 20,
  },
});

export default Home;
