import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import Arrow from '../Icons/Arrow';

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
  primary?: boolean;
  icon?: boolean;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton = ({
  text,
  onPress,
  primary,
  icon,
  style,
}: PrimaryButtonProps) => {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [
                styles.buttonInnerContainer,
                primary && {
                  color: colors.CLEAN_WHITE,
                  backgroundColor: colors.BLUE_BASE,
                },
              ]
        }
        onPress={onPress}
        android_ripple={{color: colors.BLUE_BASE}}>
        <Text
          style={[styles.buttonText, primary && {color: colors.CLEAN_WHITE}]}>
          {text}
        </Text>
        {icon && <Arrow style={styles.svg} />}
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    width: '100%',
    height: 36,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: colors.WHITE_BASE,
    height: '100%',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.BLUE_MID,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  pressed: {
    opacity: 0.75,
  },
  svg: {
    marginLeft: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
