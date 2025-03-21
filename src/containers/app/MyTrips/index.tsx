import Icons from 'src/assets/Icons';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TabButton from 'src/components/TabButton';
import AppBackground from 'src/components/AppBackground';
import MonthSelectionModal from 'src/components/MonthSelectionModal';
import { MonthSelector, FlightsSection, HotelsSection } from './components';

type TripTab = 'flights' | 'hotels';

const MyTrips = () => {
  const [selectedTab, setSelectedTab] = useState<TripTab>('flights');
  const [selectedMonth, setSelectedMonth] = useState('All Time');
  const [isMonthSelectionModalVisible, setIsMonthSelectionModalVisible] =
    useState(false);

  return (
    <AppBackground homeHeader disableScroll>
      <MonthSelectionModal
        isVisible={isMonthSelectionModalVisible}
        setIsVisible={setIsMonthSelectionModalVisible}
        selected={selectedMonth}
        onSelect={setSelectedMonth}
      />

      <View style={styles.header}>
        <View style={styles.tabContainer}>
          <TabButton
            icon={Icons.planeFilled}
            title="Flights"
            isSelected={selectedTab === 'flights'}
            onSelect={() => setSelectedTab('flights')}
          />
          <TabButton
            icon={Icons.hotel}
            title="Hotels"
            isSelected={selectedTab === 'hotels'}
            onSelect={() => setSelectedTab('hotels')}
            buttonStyle={styles.hotelTab}
          />
        </View>

        <MonthSelector
          month={selectedMonth}
          onPress={() => setIsMonthSelectionModalVisible(true)}
        />
      </View>

      {selectedTab == 'flights' && <FlightsSection />}
      {selectedTab == 'hotels' && <HotelsSection />}
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  tabContainer: {
    flexDirection: 'row',
  },
  hotelTab: {
    marginLeft: 15,
  },
});

export default MyTrips;
