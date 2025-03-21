import React from 'react';
import { Colors, Fonts } from 'src/themes';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

type TripType = 'upcoming' | 'cancelled' | 'completed';

interface TripTypeSelectorProps {
  selectedType: TripType;
  onSelect: (type: TripType) => void;
}

const TripTypeSelector: React.FC<TripTypeSelectorProps> = ({
  selectedType,
  onSelect,
}) => (
  <View style={styles.typeSelector}>
    <TypeButton
      type="upcoming"
      isSelected={selectedType === 'upcoming'}
      onPress={() => onSelect('upcoming')}
    />
    <TypeButton
      type="cancelled"
      isSelected={selectedType === 'cancelled'}
      onPress={() => onSelect('cancelled')}
    />
    <TypeButton
      type="completed"
      isSelected={selectedType === 'completed'}
      onPress={() => onSelect('completed')}
    />
  </View>
);

export default TripTypeSelector;

interface TypeButtonProps {
  type: TripType;
  isSelected: boolean;
  onPress: () => void;
}

const TypeButton: React.FC<TypeButtonProps> = ({
  type,
  isSelected,
  onPress,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.typeButton}>
    <Text style={[styles.typeText, isSelected && styles.selectedTypeText]}>
      {type}
    </Text>
    {isSelected && <View style={styles.typeIndicator} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  typeSelector: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  typeButton: {
    alignItems: 'center',
    marginRight: 15,
  },
  typeText: {
    fontSize: 14,
    fontFamily: Fonts.semiBold,
    color: Colors.textDisabled,
    textTransform: 'capitalize',
  },
  selectedTypeText: {
    color: Colors.primary,
  },
  typeIndicator: {
    width: 6,
    height: 6,
    marginTop: 5,
    borderRadius: 3,
    backgroundColor: Colors.primary,
  },
});
