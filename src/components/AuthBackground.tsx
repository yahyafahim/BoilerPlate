import React, { FC, ReactNode } from 'react';
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icons from 'src/assets/Icons';
import Images from 'src/assets/Images';
import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';
import { NavService } from 'src/utils';

interface AuthBackgroundProps {
  children: ReactNode;
  back?: boolean;
  help?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const AuthBackground: FC<AuthBackgroundProps> = ({
  children,
  back = true,
  help = true,
  containerStyle = {},
}) => {
  return (
    <ImageBackground
      source={Images.authBackground}
      style={[styles.container, containerStyle]}>
      {(back || help) && (
        <View style={styles.header}>
          {back ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => NavService.goBack()}
              style={styles.backContainer}>
              <Image
                resizeMode="contain"
                source={Icons.back}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
          {help && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.helpContainer}
              onPress={() => {}}>
              <Image source={Icons.messageQuestion} style={styles.helpIcon} />
              <Text style={styles.helpText}>Need Help?</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <ScrollView
        bounces={false}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight() + 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  backContainer: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    height: 30,
    width: 30,
    tintColor: Colors.black,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  helpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpIcon: {
    height: 30,
    width: 30,
    tintColor: Colors.text,
  },
  helpText: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginLeft: 7.5,
  },
});

export default AuthBackground;
