import React, { useState } from 'react';
import { Colors, Fonts } from 'src/themes';
import AppBackground from 'src/components/AppBackground';
import { BadgeType } from 'src/components/StatusBadge';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { Filters, ListItem, ExpenseNotFound } from './components';

const filters = ['All', 'Pending', 'Approved', 'Rejected', 'Reimbursed'];
const data = [
  {
    id: 1,
    amount: 350,
    category: 'Category Name',
    status: 'approved' as BadgeType,
    date: '20 Dec 2024',
  },
  {
    id: 2,
    amount: 500,
    category: 'Category Name',
    status: 'pending' as BadgeType,
    date: '20 Dec 2024',
  },
  {
    id: 3,
    amount: 100,
    category: 'Category Name',
    status: 'rejected' as BadgeType,
    date: '20 Dec 2024',
  },
  {
    id: 4,
    amount: 200,
    category: 'Category Name',
    status: 'delayed' as BadgeType,
    date: '20 Dec 2024',
  },
  {
    id: 5,
    amount: 350,
    category: 'Category Name',
    status: 'approved' as BadgeType,
    date: '20 Dec 2024',
  },
  {
    id: 6,
    amount: 500,
    category: 'Category Name',
    status: 'pending' as BadgeType,
    date: '20 Dec 2024',
  },
  {
    id: 7,
    amount: 100,
    category: 'Category Name',
    status: 'rejected' as BadgeType,
    date: '20 Dec 2024',
  },
  {
    id: 8,
    amount: 200,
    category: 'Category Name',
    status: 'delayed' as BadgeType,
    date: '20 Dec 2024',
  },
];

const Approval = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <AppBackground disableScroll homeHeader>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.headerText}>Expenses</Text>

        <Filters
          filters={filters}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>

      <FlatList
        data={data}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ExpenseNotFound}
        contentContainerStyle={styles.sectionListContent}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontFamily: Fonts.medium,
    color: Colors.textPrimary,
    marginVertical: 20,
  },
  sectionListContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});

export default Approval;
