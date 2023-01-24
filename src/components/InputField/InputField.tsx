import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import PassIcon from '../Icons/PassIcon';

type InputFieldProps = {
  type: 'email' | 'password' | 'rePassword';
  styleProps?: StyleProp<ViewStyle>;
  placeholder: string;
  value: string;
  isValid?: boolean;
  onChangeText: (type: string, value: string) => void;
  validateInput: (type: string, value: string) => void;
};

const InputField = ({
  type = 'email',
  styleProps,
  placeholder,
  value,
  isValid,
  onChangeText,
  validateInput,
}: InputFieldProps) => {
  const [isRevealPass, setIsRevealPass] = useState<boolean>(false);

  const handleRevealPass = () => setIsRevealPass(!isRevealPass);
  let content =
    type === 'email' ? (
      <View style={styles.innerContainer}>
        <TextInput
          placeholder={placeholder}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={text => onChangeText('email', text)}
          onChange={() => validateInput('email', value)}
          style={[styles.input, isValid ? {} : {color: colors.RED_BASE}]}
        />
      </View>
    ) : (
      <>
        <View style={styles.innerContainer}>
          <TextInput
            style={[styles.input, isValid ? {} : {color: colors.RED_BASE}]}
            placeholder={placeholder}
            secureTextEntry={!isRevealPass}
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onChangeText={text =>
              type === 'password'
                ? onChangeText('password', text)
                : onChangeText('rePassword', text)
            }
            onChange={() =>
              type === 'password'
                ? validateInput('password', value)
                : validateInput('rePassword', value)
            }
          />
          <Pressable onPress={handleRevealPass}>
            <PassIcon style={styles.icon} revealPass={isRevealPass} />
          </Pressable>
        </View>
      </>
    );
  return <View style={[styles.container, styleProps]}>{content}</View>;
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: colors.BLUE_MID,
    borderWidth: 1,
    borderColor: colors.BLUE_DARK,
    width: '100%',
    paddingHorizontal: 16,
    height: 44,
    elevation: 2,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    position: 'relative',
  },
  innerContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  icon: {
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
  },
  errorMsg: {
    color: colors.RED_BASE,
    fontSize: 12,
  },
});
