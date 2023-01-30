import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {
  ErrorExeption,
  errorHandlingService,
} from '../../../utils/errorHandling';
import {authErrors, types} from '../../../constants/authErrors';

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
          throw new ErrorExeption(authErrors.EMPTY_FIELDS);
        }
        if (password !== rePassword) {
          throw new ErrorExeption(authErrors.PASSWORDS_DO_NOT_MATCH);
        }
        const user = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        errorHandlingService.showDynamicMessage(
          'User created successfully!',
          types.SUCCESS,
        );
        return user;
      } else {
        if (email.length === 0 || password.length === 0) {
          throw new ErrorExeption(authErrors.EMPTY_FIELDS);
        }
        const user = await auth().signInWithEmailAndPassword(email, password);
        errorHandlingService.showDynamicMessage(
          'User logged in successfully!',
          types.SUCCESS,
        );
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
    errorHandlingService.showDynamicMessage(
      'User logged out successfully!',
      types.SUCCESS,
    );
    return null;
  } catch (error: any) {
    errorHandlingService.errorMessage(error);
  }
});
