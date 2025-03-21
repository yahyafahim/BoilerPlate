import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { flightBookings } from 'src/config/dummyData';
import { TripEmptyComponent, TripTypeSelector } from './';
import FlightBookings from 'src/components/FlightBookings';

type TripType = 'upcoming' | 'cancelled' | 'completed';

const FlightsSection = () => {
  const [selectedType, setSelectedType] = useState<TripType>('upcoming');

  return (
    <>
      <TripTypeSelector
        selectedType={selectedType}
        onSelect={setSelectedType}
      />

      <FlatList
        bounces={false}
        data={flightBookings}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <FlightBookings
            item={item}
            index={index}
            containerStyle={styles.flightBooking}
          />
        )}
        ListEmptyComponent={TripEmptyComponent}
        contentContainerStyle={styles.listContent}
      />
    </>
  );
};

export default FlightsSection;

const styles = StyleSheet.create({
  listContent: {
    marginTop: 1,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  flightBooking: {
    marginLeft: 0,
    marginBottom: 20,
  },
});
