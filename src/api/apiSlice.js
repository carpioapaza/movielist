import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;

// const API_KEY = 'c5da3fdb0f6273f0998c4d86684a63fc',
// API_BASE_URL = 'https://api.themoviedb.org/3/',
// POPULAR = `${API_BASE_URL}movie/popular?api_key=${API_KEY}`,
//   image_base_url: 'https://image.tmdb.org/t/p/w1280',
//   image_base_original_url: 'https://image.tmdb.org/t/p/original',

// /movie/popular?api_key=c5da3fdb0f6273f0998c4d86684a63fc
