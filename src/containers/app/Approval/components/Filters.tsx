import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Colors, Fonts } from 'src/themes';

interface FiltersProps {
  filters: string[];
  activeTab: string;
  setActiveTab: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  filters,
  activeTab,
  setActiveTab,
}) => (
  <View style={styles.container}>
    <ScrollView
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.filterContainer}>
        {filters.map(item => (
          <FilterTab
            key={item}
            label={item}
            isActive={item === activeTab}
            onPress={() => setActiveTab(item)}
          />
        ))}
      </View>
    </ScrollView>
  </View>
);

const FilterTab: React.FC<{
  label: string;
  isActive: boolean;
  onPress: () => void;
}> = ({ label, isActive, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={styles.filterTab}>
    <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
      {label}
    </Text>
    {isActive && <View style={styles.activeIndicator} />}
  </TouchableOpacity>
);

export default Filters;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filterTab: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    fontFamily: Fonts.semiBold,
    color: Colors.textDisabled,
  },
  filterTextActive: {
    color: Colors.primary,
  },
  activeIndicator: {
    height: 6,
    width: 6,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    marginTop: 4,
  },
});
