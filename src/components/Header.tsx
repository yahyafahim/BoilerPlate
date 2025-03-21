import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Colors } from 'src/themes';
import Icons from 'src/assets/Icons';
import Fonts from 'src/themes/Fonts';
import { NavService } from 'src/utils';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/types';
import Images from 'src/assets/Images';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface HeaderProps {
  nav?: string;
  title?: string;
  back?: boolean;
  editIcon?: boolean;
  crossIcon?: boolean;
  deleteIcon?: boolean;
  onEditPress?: () => void;
  onCrossPress?: () => void;
  onDeletePress?: () => void;
  headerTextStyle?: StyleProp<TextStyle>;
  headerBackStyle?: StyleProp<ImageStyle>;
  headerContainerStyle?: StyleProp<ViewStyle>;
}

const Header = ({
  nav = '',
  title = '',
  back = true,
  headerBackStyle,
  headerTextStyle,
  editIcon = false,
  crossIcon = false,
  deleteIcon = false,
  headerContainerStyle,
  onEditPress = () => {},
  onCrossPress = () => {},
  onDeletePress = () => {},
}: HeaderProps) => {
  const navigateBack = () => {
    if (nav === 'HomeStack') {
      NavService.reset(0, [{ name: 'HomeStack' }]);
    } else {
      nav ? NavService.navigate(nav) : NavService.goBack();
    }
  };

  return (
    <View style={[styles.container, headerContainerStyle]}>
      <View style={styles.rowCenter}>
        {back && (
          <TouchableOpacity activeOpacity={0.8} onPress={navigateBack}>
            <Image
              resizeMode="contain"
              source={Icons.back}
              style={[styles.backIcon, headerBackStyle]}
            />
          </TouchableOpacity>
        )}

        {!!title && (
          <Text style={[styles.title, headerTextStyle]}>{title}</Text>
        )}
      </View>

      <View style={styles.rowCenter}>
        {deleteIcon && (
          <TouchableOpacity activeOpacity={0.8} onPress={onDeletePress}>
            <Image source={Icons.delete} style={styles.rightIcon} />
          </TouchableOpacity>
        )}
        {editIcon && (
          <TouchableOpacity activeOpacity={0.8} onPress={onEditPress}>
            <Image source={Icons.edit} style={styles.rightIcon} />
          </TouchableOpacity>
        )}
        {crossIcon && (
          <TouchableOpacity activeOpacity={0.8} onPress={onCrossPress}>
            <Image source={Icons.cross} style={styles.rightIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const HeaderHome = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
  return (
    <View style={[styles.container, styles.homeContainer]}>
      <Image source={Images.logo} style={styles.logo} />
      <View style={styles.rowCenter}>
        <TouchableOpacity
          onPress={() => NavService.navigate('Search')}
          activeOpacity={0.8}
          style={styles.iconContainer}>
          <Image source={Icons.search} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.iconContainer}
          onPress={() => NavService.navigate('Notifications')}>
          <View style={styles.notificationDot} />
          <Image source={Icons.bell} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavService.navigate('Settings')}
          activeOpacity={0.8}>
          <Image
            source={{ uri: userData?.photoURL }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight() + 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: 20,
    width: 20,
    marginRight: 15,
    tintColor: Colors.text,
  },
  title: {
    fontSize: 18,
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
  },
  rightIcon: {
    height: 32,
    width: 32,
    marginLeft: 10,
  },
  homeContainer: {
    paddingVertical: 10,
  },
  logo: {
    height: 28,
    width: 63,
    resizeMode: 'contain',
  },
  iconContainer: {
    marginRight: 15,
  },
  icon: {
    height: 24,
    width: 24,
  },
  notificationDot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: Colors.green,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  profileImage: {
    backgroundColor: Colors.lightSilver,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default Header;
export { HeaderHome };
