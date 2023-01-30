import {createAsyncThunk} from '@reduxjs/toolkit';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import {resetTo} from '../../../navigation/RootNavigation';
import {Screens} from '../../../constants/screens';

export const logister = createAsyncThunk(
  'auth/logister',
  async (payload: {
    isSignup: boolean;
    email: string;
    password: string;
    rePassword: string;
  }) => {
    const {isSignup, email, password, rePassword} = payload;
    try {
      if (isSignup) {
        if (
          email.length === 0 ||
          password.length === 0 ||
          rePassword.length === 0
        ) {
          return null;
        }
        if (password !== rePassword) {
          showMessage({
            message: 'Passwords do not match!',
            type: 'danger',
          });
          return null;
        }
        const user = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        showMessage({
          message: 'User created successfully!',
          type: 'success',
        });
        resetTo(Screens.TabScreens);

        return user.user;
      } else {
        if (email.length === 0 || password.length === 0) {
          return null;
        }
        const user = await auth().signInWithEmailAndPassword(email, password);
        showMessage({
          message: 'User logged in successfully!',
          type: 'success',
        });
        resetTo(Screens.TabScreens);

        return user.user;
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        showMessage({
          message: 'That email address is already in use!',
          type: 'danger',
        });
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        showMessage({
          message: 'That email address is invalid!',
          description: 'That email address is invalid!',
          type: 'danger',
        });
      }

      if (error.code === 'auth/user-not-found') {
        console.log('User not found!');
        showMessage({
          message: 'User not found!',
          type: 'danger',
        });
      }

      if (error.code === 'auth/wrong-password') {
        console.log('Wrong password!');
        showMessage({
          message: 'Wrong password!',
          type: 'danger',
        });
      }
    }
  },
);

const onSubmition = (
  isSignUp: boolean,
  email: string,
  password: string,
  rePassword: string,
) => {
  if (isSignUp) {
    if (
      email.length === 0 ||
      password.length === 0 ||
      rePassword.length === 0
    ) {
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        showMessage({
          message: 'User account created & signed in!',
          type: 'success',
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          showMessage({
            message: 'That email address is already in use!',
            type: 'danger',
          });
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          showMessage({
            message: 'That email address is invalid!',
            description: 'That email address is invalid!',
            type: 'danger',
          });
        }

        console.error(error);
      });
  } else {
    if (email.length === 0 || password.length === 0) {
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account signed in!');
        showMessage({
          message: 'User account signed in!',
          type: 'success',
        });
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          showMessage({
            message: 'That email address is invalid!',
            description: 'That email address is invalid!',
            type: 'danger',
          });
        }

        if (error.code === 'auth/user-not-found') {
          console.log('User not found!');
          showMessage({
            message: 'User not found!',
            type: 'danger',
          });
        }

        if (error.code === 'auth/wrong-password') {
          console.log('Wrong password!');
          showMessage({
            message: 'Wrong password!',
            description: 'It looks like you entered the wrong password!',
            type: 'danger',
          });
        }

        console.error(error);
      });
  }
};

export const authActions = {
  onSubmition,
};
