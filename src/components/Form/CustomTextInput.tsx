import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ViewStyle,
  Dimensions,
  StyleSheet,
  ImageStyle,
  TextInputProps,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { Colors } from 'src/themes';
import Fonts from 'src/themes/Fonts';

const { width } = Dimensions.get('window');

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  disabled?: boolean;
  onChange?: () => void;
  containerStyle?: ViewStyle;
  rightIconStyle?: ImageStyle;
  rightIcon?: ImageSourcePropType;
  textInputStyle?: TextInputProps['style'];
  type?: 'text' | 'email' | 'number' | 'description' | 'password';
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  type,
  label,
  error,
  value,
  onChange,
  disabled,
  rightIcon,
  containerStyle,
  textInputStyle,
  rightIconStyle,
  ...rest
}) => {
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(type === 'password');

  const hasError = !!error;
  const isActive = isFocused || !!value;

  useEffect(() => {
    if (value) {
      setIsFocused(true);
    }
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(prev => !prev);
  };

  return (
    <>
      <View
        style={[
          styles.inputContainer,
          containerStyle,
          type === 'description' && styles.descriptionContainerStyle,
          hasError && styles.errorBorder,
          disabled && styles.disabledContainer,
        ]}>
        <TouchableOpacity
          disabled={disabled}
          onPress={handleFocus}
          style={[
            styles.labelContainer,
            isActive && styles.labelContainerExpanded,
          ]}>
          {isActive && (
            <View
              style={[
                styles.labelBackground,
                disabled && { backgroundColor: Colors.lightSilver },
              ]}
            />
          )}
          <Text
            style={[
              styles.labelText,
              disabled && { color: Colors.text },
              hasError && { color: Colors.error },
              isActive && { fontSize: 12 },
            ]}>
            {label}
          </Text>
        </TouchableOpacity>

        {isActive && (
          <View style={styles.textInputWrapper}>
            <TextInput
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={[
                styles.textInput,
                textInputStyle,
                type === 'description' && styles.descriptionInputStyle,
                disabled && { color: Colors.textSecondary },
              ]}
              placeholderTextColor={Colors.textDisabled}
              secureTextEntry={secureTextEntry}
              editable={!disabled}
              value={value}
              onChangeText={onChange}
              multiline={type === 'description'}
              {...rest}
            />
            {type === 'password' && (
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.passwordToggle}>
                <Text style={styles.passwordToggleText}>
                  {secureTextEntry ? 'Show' : 'Hide'}
                </Text>
              </TouchableOpacity>
            )}
            {rightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
          </View>
        )}
      </View>

      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 55,
    marginTop: 15,
    borderWidth: 1,
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
  errorBorder: {
    borderColor: Colors.error,
  },
  disabledContainer: {
    backgroundColor: Colors.lightSilver,
    borderColor: Colors.textDisabled,
  },
  labelContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    height: 55,
    width: '100%',
  },
  labelContainerExpanded: {
    height: 27.5,
    top: -13.75,
    left: 10,
    width: 'auto',
  },
  labelBackground: {
    position: 'absolute',
    backgroundColor: Colors.white,
    height: 13.75,
    width: '100%',
    bottom: 1,
  },
  labelText: {
    fontFamily: Fonts.medium,
    color: Colors.textDisabled,
  },
  textInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 55,
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
  passwordToggle: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordToggleText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  errorText: {
    color: Colors.error,
    marginTop: 5,
    fontFamily: Fonts.regular,
    fontSize: 12,
    width: '100%',
  },
  rightIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  descriptionContainerStyle: {
    height: 100,
    alignItems: 'flex-start',
  },
  descriptionInputStyle: {
    textAlignVertical: 'top',
    height: 80,
    marginTop: 10,
  },
});

export default CustomTextInput;
