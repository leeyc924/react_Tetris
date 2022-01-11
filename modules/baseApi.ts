import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios, { AxiosRequestConfig, AxiosError } from 'axios';

// const developmentUrl = 'http://localhost:8005/editor';
// const productionUrl = 'https://fass-editor-api.herokuapp.com/editor';


// const baseQuery = axiosBaseQuery({
//   baseUrl: process.env.NODE_ENV !== 'production' ? developmentUrl : productionUrl,
// });

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
