import {createAsyncThunk} from '@reduxjs/toolkit';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import {errorHandlingService} from '../../../utils/errorHandling';

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
          showMessage({
            message: 'Please fill all fields!',
            type: 'danger',
          });
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
        return user;
      } else {
        if (email.length === 0 || password.length === 0) {
          return null;
        }
        const user = await auth().signInWithEmailAndPassword(email, password);
        showMessage({
          message: 'User logged in successfully!',
          type: 'success',
        });
        return user;
      }
    } catch (error: any) {
      errorHandlingService.errorMessage(error);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await auth().signOut();
    showMessage({
      message: 'User logged out successfully!',
      type: 'success',
    });
    return null;
  } catch (error: any) {
    errorHandlingService.errorMessage(error);
  }
});
