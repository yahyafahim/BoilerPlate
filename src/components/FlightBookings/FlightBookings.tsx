import React from 'react';
import {
  View,
  Image,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import type { FlightBookingsProps } from './types';
import InfoSection from './InfoSection';
import StatusBadge from 'src/components/StatusBadge';
import styles from './styles';
import FlightDetailsCard from './FlightDetailsCard';
import { NavService } from 'src/utils';

const FlightBookings = ({
  item,
  index,
  containerStyle,
}: FlightBookingsProps) => {
  const { width } = useWindowDimensions();

  const {
    origin,
    destination,
    date,
    flightCode,
    durations,
    pnr,
    airlineLogo,
    flightNumber,
    flightStatus,
    flightStatusDetails,
    additionalInformation,
  } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => NavService.navigate('FlightDetails')}
      style={[
        styles.container,
        { width: width - 40, marginLeft: index === 0 ? 0 : 40 },
        containerStyle,
      ]}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.airlineLogoContainer}>
            <Image source={{ uri: airlineLogo }} style={styles.airlineLogo} />
          </View>
          <Text style={styles.flightNumber}>{flightNumber}</Text>
        </View>
        <StatusBadge type={flightStatus} customText={flightStatusDetails} />
      </View>

      {/* Flight Details Section */}
      <FlightDetailsCard
        origin={origin}
        destination={destination}
        date={date}
        flightCode={flightCode}
        durations={durations}
      />

      <Text style={styles.additionalInformation}>{additionalInformation}</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Additional Info Section */}
      <InfoSection origin={origin} pnr={pnr} destination={destination} />
    </TouchableOpacity>
  );
};

export default FlightBookings;
