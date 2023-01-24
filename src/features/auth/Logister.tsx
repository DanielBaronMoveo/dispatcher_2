import React, {useMemo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import InputField from '../../components/InputField/InputField';
import colors from '../../constants/colors';
import useToggle from '../../utils/useToggle';
import {validateEmail, validatePassword} from '../../utils/validation';

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

  const secondaryBtnText = useMemo(() => {
    return isSignup ? 'Login' : 'Signup';
  }, [isSignup]);

  const validateInput = (type: string, value: string) => {
    switch (type) {
      case 'email':
        const isEmailValid = validateEmail(value);
        if (!isEmailValid) {
          setEmail(prev => ({...prev, isValid: false}));
        } else {
          setEmail(prev => ({...prev, isValid: true}));
        }
        break;
      case 'password':
        const isPasswordValid = validatePassword(value);
        if (!isPasswordValid) {
          setPassword(prev => ({...prev, isValid: false}));
        } else {
          setPassword(prev => ({...prev, isValid: true}));
        }
        break;
      case 'rePassword':
        if (value.length < 6 || value !== password.value) {
          setRePassword(prev => ({...prev, isValid: false}));
        } else {
          setRePassword(prev => ({...prev, isValid: true}));
        }
        break;
      default:
        break;
    }
  };

  const handleTextChange = (type: string, value: string) => {
    if (type === 'email') {
      setEmail(prev => ({...prev, value}));
      console.log('email', email);
    } else if (type === 'password') {
      setPassword(prev => ({...prev, value}));
    } else if (type === 'rePassword') {
      setRePassword(prev => ({...prev, value}));
    }
  };

  const renderFields = () => {
    return (
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
            onChangeText={handleTextChange}
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
            onChangeText={handleTextChange}
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
              type="rePassword"
              placeholder="Re-Enter Password"
              value={rePassword.value}
              onChangeText={handleTextChange}
              validateInput={validateInput}
              isValid={rePassword.isValid}
              styleProps={
                !rePassword.isValid ? styles.invalidInputBorder : null
              }
            />
            {!rePassword.isValid && (
              <Text style={styles.errorText}>
                It looks like your passwords don't match!
              </Text>
            )}
          </View>
        )}
      </View>
    );
  };
  const renderControls = () => {
    return (
      <View style={styles.controlsContainer}>
        <PrimaryButton
          primary={true}
          onPress={() =>
            console.log(`${isSignup ? 'Signup' : 'Login'} Pressed!`)
          }
          text={title}
          icon={true}
          style={styles.primaryBtn}
        />
        <PrimaryButton text={secondaryBtnText} onPress={setIsSignup} />
      </View>
    );
  };

  console.log('password', password);
  console.log('rePassword', rePassword);

  return (
    <View style={styles.mainContainer}>
      {renderFields()}
      {renderControls()}
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
