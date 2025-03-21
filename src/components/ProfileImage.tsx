import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Colors } from 'src/themes';

interface ProfileImageProps {
  size?: number;
  source?: any;
  name?: string;
  style?: object;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  size = 140,
  source,
  name = ' ',
  style,
}) => {
  return (
    <View
      style={[
        styles.container,
        { borderWidth: size / 25, borderRadius: size / 8, padding: size / 25 },
      ]}>
      {source ? (
        <Image
          source={source}
          style={[
            styles.image,
            { width: size, height: size, borderRadius: size / 12 },
            style,
          ]}
        />
      ) : (
        <View
          style={[
            styles.placeholder,
            { width: size, height: size, borderRadius: size / 12 },
            style,
          ]}>
          <Text style={[styles.text, { fontSize: size * 0.75 }]}>
            {name[0]?.toUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.primary,
  },
  image: {
    resizeMode: 'cover',
    backgroundColor: Colors.primary,
  },
  placeholder: {
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.primary,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default ProfileImage;
