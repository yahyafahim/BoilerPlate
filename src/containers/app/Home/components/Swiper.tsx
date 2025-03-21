import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { Colors } from 'src/themes';

interface SwiperProps {
  data: any[];
  renderItem: (props: any) => JSX.Element;
  ListEmptyComponent: () => JSX.Element;
}

const Swiper = ({ data, renderItem, ListEmptyComponent }: SwiperProps) => {
  return (
    <View style={styles.swiperWrapper}>
      <SwiperFlatList
        showPagination
        bounces={false}
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.swiperContainer}
        paginationStyleItemActive={styles.paginationItemActive}
        paginationActiveColor={Colors.primary}
        paginationDefaultColor={Colors.lightSilver}
        paginationStyleItem={styles.paginationItem}
      />
    </View>
  );
};

export default Swiper;

const styles = StyleSheet.create({
  swiperWrapper: {
    paddingBottom: 40,
  },
  swiperContainer: {
    marginTop: 25,
    paddingBottom: 5,
    paddingHorizontal: 20,
  },
  paginationItemActive: {
    width: 20,
  },
  paginationItem: {
    height: 8,
    width: 8,
    marginHorizontal: 4,
  },
});
