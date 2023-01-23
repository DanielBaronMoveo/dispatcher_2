import React, {useMemo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import InputField from '../../components/InputField/InputField';
import colors from '../../constants/colors';
import useToggle from '../../utils/useToggle';

const Logister = () => {
  const [isSignup, setIsSignup] = useToggle(true);
  const [email, setEmail] = useState({
    value: '',
    isValid: true,
  });
  const [password, setPassword] = useState({
    value: '',
    isValid: true,
  });
  const [rePassword, setRePassword] = useState({
    value: '',
    isValid: true,
  });

  const title = useMemo(() => {
    return isSignup ? 'Signup' : 'Login';
  }, [isSignup]);

  const primaryBtnText = useMemo(() => {
    return isSignup ? 'Signup' : 'Login';
  }, [isSignup]);

  const secondaryBtnText = useMemo(() => {
    return isSignup ? 'Login' : 'Signup';
  }, [isSignup]);

  const validateInput = (type: string, value: string) => {
    if (type === 'email') {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!value.match(emailRegex)) {
        console.log('invalid email');
        setEmail(prev => ({...prev, isValid: false}));
      } else {
        setEmail(prev => ({...prev, isValid: true}));
      }
    } else if (type === 'password') {
      if (value.length < 7) {
        console.log('invalid password');
        setPassword(prev => ({...prev, isValid: false}));
      } else {
        setPassword(prev => ({...prev, isValid: true}));
      }
    }
  };

  const handleTextChange = (type: string, value: string) => {
    if (type === 'email') {
      setEmail(prev => ({...prev, value}));
    } else if (type === 'password') {
      setPassword(prev => ({...prev, value}));
    } else if (type === 'rePassword') {
      setRePassword(prev => ({...prev, value}));
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.input}>
          <InputField
            type="email"
            placeholder="Your email"
            value={email.value}
            isValid={email.isValid}
            onChangeText={value => handleTextChange('email', value)}
            validateInput={validateInput}
            styleProps={!email.isValid ? styles.invalidInputBorder : null}
          />
          {!email.isValid && (
            <Text style={styles.errorText}>
              One or more files is un validated
            </Text>
          )}
        </View>
        <View style={styles.input}>
          <InputField
            type="password"
            placeholder="Password"
            value={password.value}
            onChangeText={value => handleTextChange('password', value)}
            validateInput={validateInput}
            isValid={password.isValid}
            styleProps={!password.isValid ? styles.invalidInputBorder : null}
          />
          {!password.isValid && (
            <Text style={styles.errorText}>
              One or more files is un validated
            </Text>
          )}
        </View>
        {isSignup && (
          <View style={styles.input}>
            <InputField
              type="password"
              placeholder="Re-Enter Password"
              value={rePassword.value}
              onChangeText={value => handleTextChange('rePassword', value)}
              validateInput={validateInput}
            />
            {!rePassword.isValid && (
              <Text style={styles.errorText}>
                One or more files is un validated
              </Text>
            )}
          </View>
        )}
      </View>
      <View style={styles.controlsContainer}>
        <PrimaryButton
          primary={true}
          onPress={() =>
            console.log(`${isSignup ? 'Signup' : 'Login'} Pressed!`)
          }
          text={primaryBtnText}
          icon={true}
          style={styles.primaryBtn}
        />
        <PrimaryButton text={secondaryBtnText} onPress={setIsSignup} />
      </View>
    </View>
  );
};

export default Logister;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    marginTop: 40,
    marginBottom: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.BLUE_MID,
  },
  inputsContainer: {
    width: 335,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 48,
    flex: 1,
    marginBottom: 24,
  },
  invalidInputBorder: {
    borderColor: colors.RED_BASE,
    color: colors.RED_BASE,
  },
  errorText: {
    color: colors.RED_BASE,
  },
  controlsContainer: {
    width: 335,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtn: {
    marginBottom: 24,
  },
});
