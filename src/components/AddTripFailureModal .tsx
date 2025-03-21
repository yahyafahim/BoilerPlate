import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';
import CustomModal from './CustomModal';
import Icons from 'src/assets/Icons';
import { Colors, Fonts } from 'src/themes';
import CustomButton from './CustomButton';

interface AddTripFailureModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  onButtonPress?: () => void;
}

const AddTripFailureModal = ({
  isVisible = false,
  setIsVisible = () => {},
  onButtonPress = () => {},
}: AddTripFailureModalProps) => {
  return (
    <CustomModal
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(false)}>
      <View style={styles.container}>
        <Image source={Icons.modalFailed} style={styles.icon} />
        <Text style={styles.title}>Failed to add trip, please try again</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
          simply dummy text of the printing.
        </Text>

        <CustomButton
          title="Re-enter Trip code"
          onPress={onButtonPress}
          buttonStyle={styles.button}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.closeButton}
          onPress={() => setIsVisible(false)}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
    </CustomModal>
  );
};

export default AddTripFailureModal;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  icon: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 16,
    marginTop: 15,
    color: Colors.primary,
    fontFamily: Fonts.semiBold,
  },
  description: {
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center',
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
  },
  button: {
    marginTop: 30,
    width: '100%',
  },
  closeButton: {
    marginTop: 20,
  },
  closeText: {
    fontSize: 14,
    color: Colors.text,
    textAlign: 'center',
    fontFamily: Fonts.medium,
  },
});
