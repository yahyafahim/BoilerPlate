import { StyleSheet } from 'react-native';
import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';
import { Shadows } from 'src/utils';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    ...Shadows.shadow3,
  },
  header: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  airlineLogoContainer: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.border,
  },
  airlineLogo: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  flightNumber: {
    fontSize: 12,
    fontFamily: Fonts.semiBold,
    color: Colors.textPrimary,
    marginLeft: 5,
  },
  flightSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  locationContainer: {
    alignItems: 'flex-start',
  },
  code: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    color: Colors.primary,
  },
  city: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
  },
  time: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginTop: 10,
  },
  delayedTime: {
    color: Colors.error,
    textDecorationLine: 'line-through',
    textDecorationColor: Colors.error,
  },
  date: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
  },
  pathContainer: {
    flex: 1,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  pathRow: {
    alignItems: 'center',
    marginBottom: 8,
  },
  planeIcon: {
    height: 20,
    width: 20,
  },
  flightCode: {
    fontSize: 12,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
    marginBottom: 5,
  },
  dottedLine: {
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: Colors.primary,
    width: '100%',
    maxWidth: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dottedLineHider: {
    width: '100%',
    height: 1,
    marginBottom: -1,
    backgroundColor: Colors.white,
    position: 'absolute',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    top: -3.5,
    backgroundColor: Colors.primary,
  },
  dotMiddle: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    top: -5.5,
    backgroundColor: Colors.primary,
  },
  durationTexts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  duration: {
    fontSize: 10,
    fontFamily: Fonts.regular,
    color: Colors.textPrimary,
    marginTop: 5,
  },
  divider: {
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: Colors.lightSilver,
    marginVertical: 20,
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    alignItems: 'flex-start',
  },
  infoItemCenter: {
    alignItems: 'center',
  },
  infoItemRight: {
    alignItems: 'flex-end',
  },
  infoLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontFamily: Fonts.regular,
  },
  infoValue: {
    fontSize: 14,
    marginTop: 3,
    color: Colors.textPrimary,
    fontFamily: Fonts.regular,
  },
  additionalInformation: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
    marginTop: 10,
  },
});

export default styles;
