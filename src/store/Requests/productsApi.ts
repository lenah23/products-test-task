import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../components/interfaces';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['products'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASEURL }),
  endpoints: (builder) => ({
    getAllProductsList: builder.query<IProduct[], void>({
      query() {
        return {
          url: `/products`,
          method: 'GET',
        };
      },
      providesTags: ['products'],
    }),
    addNewProduct: builder.mutation<any, IProduct>({
      query(payload) {
        return {
          url: `/products`,
          method: 'POST',
          body: payload
        };
      },
      invalidatesTags: ['products'],
    }),
  }),
});

export const { useGetAllProductsListQuery, useAddNewProductMutation } = productsApi;
