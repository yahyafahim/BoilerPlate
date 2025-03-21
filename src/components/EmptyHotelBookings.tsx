import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import Images from 'src/assets/Images';
import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';
import { Shadows } from 'src/utils';

const EmptyHotelBookings = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        padding: 15,
        height: 245,
        borderRadius: 15,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        width: width - 40,
        ...Shadows.shadow3,
      }}>
      <Image
        source={Images.girlConfused}
        style={{
          height: 118,
          width: 136,
          resizeMode: 'contain',
        }}
      />

      <View style={{ flex: 1, marginLeft: 15 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.semiBold,
            color: Colors.primary,
          }}>
          No Hotel Bookings
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Fonts.regular,
            color: Colors.textSecondary,
            marginTop: 15,
            width: '80%',
          }}>
          Lorem Ipsum is simply dummy text.
        </Text>
      </View>
    </View>
  );
};

export default EmptyHotelBookings;
