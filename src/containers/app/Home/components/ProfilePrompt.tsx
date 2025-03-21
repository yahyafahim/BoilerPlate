import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Images from 'src/assets/Images';
import { Colors, Fonts } from 'src/themes';
import { Shadows } from 'src/utils';

const ProfilePrompt = (): JSX.Element => (
  <View style={styles.profileContainer}>
    <Image source={Images.mobileWithCheck} style={styles.profileImage} />
    <View style={styles.profileContent}>
      <Text style={styles.profileTitle}>Complete Your Profile</Text>
      <Text style={styles.profileDescription}>
        Stay in the loop about flights and hotel bookings
      </Text>
      <Text style={styles.profileAction}>Complete Now</Text>
    </View>
  </View>
);

export default ProfilePrompt;

const styles = StyleSheet.create({
  profileContainer: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 25,
    ...Shadows.shadow3,
  },
  profileImage: {
    height: 104,
    width: 61,
    resizeMode: 'contain',
  },
  profileContent: {
    flex: 1,
    marginLeft: 15,
  },
  profileTitle: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: Colors.textPrimary,
  },
  profileDescription: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    marginTop: 5,
    width: '80%',
  },
  profileAction: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: Colors.primary,
    marginTop: 15,
  },
});
