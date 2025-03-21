import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Colors, Fonts } from 'src/themes';
import { NavService, Shadows } from 'src/utils';
import StatusBadge, { BadgeType } from './StatusBadge';
import Icons from 'src/assets/Icons';

const { width } = Dimensions.get('window');

interface HotelBookingDetails {
  id: string;
  imageUrl: string;
  title: string;
  stars: number;
  checkInDate: string;
  guests: string;
  nights: string;
  status: BadgeType;
  statusText: string;
}

const HotelBookings = ({
  item,
  index,
  containerStyle,
}: {
  item: HotelBookingDetails;
  index: number;
  containerStyle?: ViewStyle;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => NavService.navigate('HotelDetails', { hotel: item })}
      key={item.id}
      style={[
        styles.cardContainer,
        index !== 0 && styles.cardSpacing,
        containerStyle,
      ]}>
      <ImageBackground
        source={{ uri: item.imageUrl }}
        imageStyle={styles.imageStyle}
        style={styles.imageBackground}>
        <StatusBadge type={item.status} customText={item.statusText} />
      </ImageBackground>

      <View style={styles.cardContent}>
        <Text style={styles.hotelTitle}>{item.title}</Text>

        <View style={styles.starsContainer}>
          {[...Array(item.stars)].map((_, i) => (
            <Image key={i} source={Icons.star} style={styles.starIcon} />
          ))}
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoColumnLeft}>
            <Text style={styles.infoLabel}>Check-in Date</Text>
            <Text style={styles.infoValue}>{item.checkInDate}</Text>
          </View>
          <View style={styles.infoColumnRight}>
            <Text style={styles.infoLabel}>Guests</Text>
            <Text style={styles.infoValue}>
              {item.guests} Guests, {item.nights} Nights
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    width: width - 40,
    ...Shadows.shadow3,
  },
  cardSpacing: {
    marginLeft: 40,
  },
  imageBackground: {
    height: 190,
    alignItems: 'flex-end',
    padding: 15,
  },
  imageStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    padding: 15,
  },
  hotelTitle: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.textPrimary,
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  starIcon: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },
  infoGrid: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoColumnLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  infoColumnRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
  },
  infoValue: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textPrimary,
    marginTop: 5,
  },
});

export default HotelBookings;
