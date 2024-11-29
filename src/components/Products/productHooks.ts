import { FieldValues, useForm } from 'react-hook-form';
import { useGetAllProductsListQuery } from '../../store/Requests/productsApi';
import { IProduct, ProductCurrencyEnum } from '../interfaces';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { setFilteredProducts } from '../../store/Slices/productsSlice';

export interface IFiltration {
  from: number;
  to: number;
  currency: ProductCurrencyEnum;
  sorting: string;
}

const UseProductHooks = () => {
  const { data: productsList } = useGetAllProductsListQuery();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FieldValues | IFiltration>();

  useEffect(() => {
    if (productsList) {
      dispatch(setFilteredProducts(productsList));
    }
  }, [productsList]);

  const onSubmit = (data: FieldValues) => {
    if (!productsList || !Array.isArray(productsList)) {
      dispatch(setFilteredProducts([]));
      return;
    }

    const { from, to, currency, sorting } = data;

    let filtered = [...productsList];

    if (from !== undefined) {
      filtered = filtered.filter((product) => +product.price >= +from);
    }

    if (to !== undefined) {
      filtered = filtered.filter((product) => +product.price <= +to);
    }

    if (from === 0 && to === 0) {
      filtered = [...productsList];
    }

    if (currency) {
      filtered = filtered.filter((product) => product.currency === currency);
    }

    if (sorting) {
      filtered = filtered.sort((a, b) => {
        if (sorting === 'asc') return a.price - b.price;
        if (sorting === 'desc') return b.price - a.price;
        if (sorting === 'alph') {
          // Alphabetic sorting by name
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
    }
    dispatch(setFilteredProducts(filtered));
  };

  return {
    control,
    reset,
    errors,
    onSubmit,
    handleSubmit,
  };
};

export default UseProductHooks;
