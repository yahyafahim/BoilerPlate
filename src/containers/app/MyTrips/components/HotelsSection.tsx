import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { hotelBookings } from 'src/config/dummyData';
import HotelBookings from 'src/components/HotelBookings';
import { TripEmptyComponent, HotelTypeSelector } from './';

type HotelType = 'upcoming' | 'completed';

const HotelsSection = () => {
  const [selectedType, setSelectedType] = useState<HotelType>('upcoming');

  return (
    <>
      <HotelTypeSelector
        selectedType={selectedType}
        onSelect={setSelectedType}
      />

      <FlatList
        bounces={false}
        data={hotelBookings}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <HotelBookings
            item={item}
            index={index}
            containerStyle={styles.hotelBooking}
          />
        )}
        ListEmptyComponent={TripEmptyComponent}
        contentContainerStyle={styles.listContent}
      />
    </>
  );
};

export default HotelsSection;

const styles = StyleSheet.create({
  listContent: {
    marginTop: 1,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  hotelBooking: {
    marginLeft: 0,
    marginBottom: 20,
  },
});
