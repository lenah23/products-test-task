import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['products'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASEURL }),
  endpoints: (builder) => ({
    getAllProductsList: builder.query<any, void>({
      query() {
        return {
          url: `/products`,
          method: 'GET',
        };
      },
      providesTags: ['products'],
    }),
  }),
});

export const { useGetAllProductsListQuery } = productsApi;
