import React from 'react';
import { View, Text } from 'react-native';
import type { LocationDetails } from './types';
import styles from './styles';

const LocationInfo = ({
  location,
  date,
  destination = false,
}: {
  location: LocationDetails;
  date?: string;
  destination?: boolean;
}) => (
  <View
    style={[
      styles.locationContainer,
      destination && { alignItems: 'flex-end' },
    ]}>
    <Text style={styles.code}>{location?.code}</Text>
    <Text style={styles.city}>{location?.city}</Text>
    {!!location?.time && (
      <Text style={styles.time}>
        {!!location?.delayedTime && (
          <Text style={styles.delayedTime}>{location?.time}</Text>
        )}
        {!!location?.delayedTime ? ` ${location?.delayedTime}` : location?.time}
      </Text>
    )}
    {!!date && <Text style={styles.date}>{date}</Text>}
  </View>
);

export default LocationInfo;
