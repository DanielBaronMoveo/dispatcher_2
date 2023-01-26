import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Article} from '../models/article';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://newsapi.org/v2/'}),
  tagTypes: ['Articles'],
  endpoints: builder => ({
    getTopHeadlinesArticlesInCountry: builder.query<Article, string>({
      query: country =>
        `top-headlines?country=${country}&apiKey=5cc6b38a22134a918f989a63d7e2d169`,
      providesTags: [{type: 'Articles', id: 'LIST'}],
    }),
  }),
});
