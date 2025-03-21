import {
  ListItem,
  ListHeader,
  SectionHeader,
  ExpenseNotFound,
} from './components';
import { Colors, Fonts } from 'src/themes';
import { loaderActions } from 'src/redux/actions';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SectionList } from 'react-native';
import AppBackground from 'src/components/AppBackground';
import transformStatus from 'src/helpers/transformStatus';
import { useGetMyExpensesQuery } from 'src/redux/services/expenseApis';

const filters = ['All', 'Pending', 'Approved', 'Rejected', 'Reimbursed'];

const Expenses = () => {
  const [activeTab, setActiveTab] = useState('All');

  let params = {};

  if (activeTab == 'All') params = {};
  else params = { status: activeTab.toLowerCase() };

  const { data, isLoading } = useGetMyExpensesQuery(params);

  useEffect(() => {
    loaderActions.setLoader(isLoading);
  }, [isLoading]);

  const transformedData = data?.data?.map((item: any) => ({
    id: item._id,
    category: item.category,
    subtitle: item.description,
    amount: item.amount,
    date: item.expenseDate,
    status: transformStatus(item.status),
  }));

  const sections = [{ filters: filters, data: transformedData ?? [] }];

  return (
    <AppBackground disableScroll homeHeader>
      <SectionList
        bounces={false}
        sections={sections}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.sectionListContent}
        renderItem={({ item }) => <ListItem item={item as any} />}
        ListFooterComponent={() => {
          if (!!!data?.data?.length && !isLoading) return <ExpenseNotFound />;
        }}
        renderSectionHeader={({ section }) => (
          <SectionHeader
            filters={section.filters}
            activeTab={activeTab}
            setActiveTab={tab => {
              setActiveTab(tab);
            }}
          />
        )}
      />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  sectionListContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  listItemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  listItemText: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.textPrimary,
  },
});

export default Expenses;
