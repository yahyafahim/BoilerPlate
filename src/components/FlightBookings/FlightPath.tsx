import React from 'react';
import { View, Image, Text } from 'react-native';
import type { FlightDurations } from './types';
import Icons from 'src/assets/Icons';
import styles from './styles';

const FlightPath = ({
  durations,
  flightCode,
}: {
  durations: FlightDurations;
  flightCode?: string;
}) => (
  <View style={styles.pathContainer}>
    <View style={styles.pathRow}>
      <Image source={Icons.flightPath} style={styles.planeIcon} />
      {!!durations?.layover && (
        <Text style={styles.flightCode}>{flightCode}</Text>
      )}
    </View>
    <View style={styles.dottedLine}>
      <View style={styles.dottedLineHider} />
      <View style={[styles.dot, { left: -3.5 }]} />
      {!!durations?.layover && <View style={styles.dotMiddle} />}
      <View style={[styles.dot, { right: -3.5 }]} />
    </View>
    <View
      style={[
        styles.durationTexts,
        !!!durations?.layover && { justifyContent: 'center' },
      ]}>
      <Text style={styles.duration}>{durations?.first}</Text>
      {!!durations?.layover && (
        <Text style={styles.duration}>{durations?.layover}</Text>
      )}
    </View>
  </View>
);

export default FlightPath;
