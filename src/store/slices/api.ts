import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const apiSlice = createApi({ baseQuery, endpoints: () => ({}) });
