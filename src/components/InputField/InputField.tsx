import {View, TextInput, StyleSheet, Pressable} from 'react-native';
// import Icon from '../Icons/Icon';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import PassIcon from '../Icons/PassIcon';

type InputFieldProps = {
  type: 'email' | 'password';
  style?: any;
  placeholder: string;
};

const InputField = ({type = 'email', style, placeholder}: InputFieldProps) => {
  const [isRevealPass, setIsRevealPass] = useState<boolean>(false);

  const handleRevealPass = () => setIsRevealPass(!isRevealPass);
  let content =
    type === 'email' ? (
      <TextInput
        placeholder={placeholder}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
    ) : (
      <View style={styles.innerContainer}>
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          secureTextEntry={isRevealPass ? false : true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Pressable onPress={handleRevealPass}>
          <PassIcon style={styles.icon} revealPass={isRevealPass} />
        </Pressable>
      </View>
    );
  return <View style={styles.container}>{content}</View>;
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
    marginBottom: 24,
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
});
