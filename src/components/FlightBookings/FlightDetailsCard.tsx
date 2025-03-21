import React from 'react';
import { View } from 'react-native';
import LocationInfo from './LocationInfo';
import FlightPath from './FlightPath';
import styles from './styles';
import { FlightDetailsCardProps } from './types';

const FlightDetailsCard = ({
  origin,
  destination,
  date,
  flightCode,
  durations,
}: FlightDetailsCardProps) => (
  <View style={styles.flightSection}>
    <LocationInfo location={origin} date={date} />
    <FlightPath durations={durations} flightCode={flightCode} />
    <LocationInfo location={destination} date={date} destination />
  </View>
);

export default FlightDetailsCard;
