import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from 'src/assets/Images';
import AuthBackground from 'src/components/AuthBackground';
import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';
import { NavService, Shadows } from 'src/utils';

const CompanyInvite = () => {
  return (
    <AuthBackground back={false}>
      <Text style={styles.title}>{'Hello,\nJohn Smith'}</Text>
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy{'\n'}text of the printing.
      </Text>

      <View style={[styles.cardContainer, Shadows.shadow3]}>
        <View style={styles.logoContainer}>
          <Image source={Images.logo} style={styles.logo} />
        </View>

        <Text style={styles.companyName}>Company Name</Text>
        <Text style={styles.invitationText}>
          You have been invited to{' '}
          <Text style={styles.boldText}>Flyzy App</Text>
        </Text>

        <Text style={styles.invitedBy}>Invited By</Text>

        <View style={styles.inviterContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1687788923950-77822fa75e04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvdHJhaXQlMjBtYWxlJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={styles.inviterImage}
          />
          <View style={styles.inviterDetails}>
            <Text style={styles.inviterName}>John Smith</Text>
            <Text style={styles.inviterEmail}>johnsmith@maxlife.com</Text>
          </View>
          <Text style={styles.inviterRole}>Manager</Text>
        </View>

        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={styles.rejectButton}>
            <Text style={styles.rejectButtonText}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => NavService.reset(0, [{ name: 'AppStack' }])}
            style={styles.acceptButton}>
            <Text style={styles.acceptButtonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 30,
    lineHeight: 32,
    fontFamily: Fonts.bold,
    color: Colors.textPrimary,
  },
  description: {
    fontSize: 14,
    marginTop: 30,
    lineHeight: 22,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
  },
  cardContainer: {
    padding: 25,
    width: '100%',
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: Colors.white,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.border,
  },
  logo: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  companyName: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
    marginTop: 15,
  },
  invitationText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginTop: 5,
  },
  boldText: {
    color: Colors.primary,
    fontFamily: Fonts.bold,
  },
  invitedBy: {
    color: Colors.primary,
    fontFamily: Fonts.bold,
    fontSize: 14,
    marginTop: 30,
  },
  inviterContainer: {
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.border,
  },
  inviterImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightSilver,
  },
  inviterDetails: {
    marginLeft: 10,
    flex: 1,
  },
  inviterName: {
    color: Colors.primary,
    fontFamily: Fonts.semiBold,
    fontSize: 16,
  },
  inviterEmail: {
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
  inviterRole: {
    color: Colors.primary,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
  actionButtonsContainer: {
    height: 50,
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rejectButton: {
    width: '48%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.errorBG,
  },
  rejectButtonText: {
    fontSize: 14,
    color: Colors.error,
    fontFamily: Fonts.medium,
  },
  acceptButton: {
    width: '48%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  acceptButtonText: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Fonts.medium,
  },
});

export default CompanyInvite;
