import {createSlice} from '@reduxjs/toolkit';
import {logister, logout} from './auth.actions';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

type User = FirebaseAuthTypes.User | FirebaseAuthTypes.UserCredential | null;

interface initialStateI {
  user: User;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  } as initialStateI,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(logister.fulfilled, (state, action) => {
      if (action.payload === null || action.payload === undefined) {
        return;
      }
      state.user = action.payload;
    });
    builder.addCase(logout.fulfilled, state => {
      state.user = null;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
