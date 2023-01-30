import {createSlice} from '@reduxjs/toolkit';
import {Article} from '../../../models/article';

interface initialStateI {
  article: Article[] | [];
}

const articleSlice = createSlice({
  name: 'auth',
  initialState: {
    article: [],
  } as initialStateI,
  reducers: {},
});

export const articleActions = articleSlice.actions;
export default articleSlice.reducer;
