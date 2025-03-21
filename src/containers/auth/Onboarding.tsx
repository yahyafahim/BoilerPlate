import React, { useRef, useState, useCallback } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icons from 'src/assets/Icons';
import Images from 'src/assets/Images';
import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';
import { NavService } from 'src/utils';

const pageData = [
  {
    id: 1,
    title: 'We have mastered the\nart of teleportation',
    description:
      'Just kidding, but we can teleport you from your couch to a tropical paradise with just a few taps!',
    image: Images.onboarding1,
  },
  {
    id: 2,
    title: 'We have secret\npowers ',
    description:
      'We can magically shrink your packing list from "everything but the kitchen sink" to "just the essentials" in seconds flat!',
    image: Images.onboarding2,
  },
  {
    id: 3,
    title: 'We are like\ngenie lamps',
    description:
      "But instead of granting wishes, we grant you access to a world of endless adventure – and they don't even require rubbing!",
    image: Images.onboarding3,
  },
];

const Onboarding = () => {
  const swiperRef = useRef<SwiperFlatList>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { width } = useWindowDimensions();

  const onChangeIndex = useCallback(({ index }: { index: number }) => {
    LayoutAnimation.easeInEaseOut();
    setCurrentPage(index);
  }, []);

  const handleNextPress = () => {
    if (currentPage < pageData.length - 1) {
      LayoutAnimation.easeInEaseOut();
      setCurrentPage(currentPage + 1);
      swiperRef.current?.scrollToIndex({ index: currentPage + 1 });
    } else {
      NavService.navigate('Login');
    }
  };

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <SwiperFlatList
        data={pageData}
        bounces={false}
        ref={swiperRef}
        index={currentPage}
        showPagination
        onChangeIndex={onChangeIndex}
        paginationActiveColor={Colors.primary}
        paginationDefaultColor={Colors.lightSilver}
        paginationStyle={styles.paginationStyle}
        paginationStyleItem={styles.paginationStyleItem}
        renderItem={({ item }) => (
          <View key={item.id.toString()} style={[styles.slide, { width }]}>
            <Image
              source={item.image}
              style={[styles.image, { width, height: width * 1.317 }]}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleNextPress}
          style={styles.nextButton}>
          {currentPage === pageData.length - 1 && (
            <Text style={styles.getStartedText}>Get Started</Text>
          )}
          <Image source={Icons.arrowForward} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => NavService.navigate('Login')}
        style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  paginationStyle: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  paginationStyleItem: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  slide: {
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.medium,
    color: Colors.text,
    textAlign: 'center',
    marginTop: 30,
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.textDisabled,
    textAlign: 'center',
    marginTop: 20,
  },
  footer: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  nextButton: {
    padding: 13,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  getStartedText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: Colors.white,
    marginRight: 15,
  },
  arrowIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  skipButton: {
    position: 'absolute',
    top: getStatusBarHeight() + 20,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: Colors.white,
  },
});

export default Onboarding;
