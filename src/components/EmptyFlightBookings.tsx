import React, { useRef, useState } from 'react';
import {
  Image,
  Text,
  useWindowDimensions,
  View,
  StyleSheet,
} from 'react-native';
import { ActionSheetRef } from 'react-native-actions-sheet';
import Icons from 'src/assets/Icons';
import Images from 'src/assets/Images';
import CustomButton from 'src/components/CustomButton';
import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';
import { Shadows } from 'src/utils';
import AddTripSheet from './AddTripSheet';
import AddTripSuccessModal from './AddTripSuccessModal';
import AddTripFailureModal from './AddTripFailureModal ';

const EmptyFlightBookings = () => {
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isFailureModalVisible, setIsFailureModalVisible] = useState(false);

  const { width } = useWindowDimensions();
  const addTripsRef = useRef<ActionSheetRef>(null);

  const onSuccess = () => {
    setTimeout(() => {
      setIsSuccessModalVisible(true);
    }, 1000);
  };

  const onError = () => {
    setTimeout(() => {
      setIsFailureModalVisible(true);
    }, 1000);
  };

  return (
    <View style={[styles.container, { width: width - 40 }]}>
      <AddTripSuccessModal
        isVisible={isSuccessModalVisible}
        setIsVisible={setIsSuccessModalVisible}
      />

      <AddTripFailureModal
        isVisible={isFailureModalVisible}
        setIsVisible={setIsFailureModalVisible}
        onButtonPress={() => {
          setIsFailureModalVisible(false);

          setTimeout(() => {
            addTripsRef.current?.show();
          }, 500);
        }}
      />

      <AddTripSheet onSuccess={onSuccess} onError={onError} ref={addTripsRef} />

      <Image source={Images.girlConfused} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>No Flight Bookings</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text.
        </Text>
        <CustomButton
          title="Add Trip"
          icon={Icons.add}
          onPress={() => addTripsRef.current?.show()}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default EmptyFlightBookings;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 245,
    borderRadius: 15,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    ...Shadows.shadow3,
  },
  image: {
    height: 118,
    width: 136,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    marginTop: 15,
    width: '80%',
  },
  button: {
    alignSelf: 'flex-start',
    width: '70%',
  },
});
