import { FieldValues, useForm } from "react-hook-form";
import { useGetAllProductsListQuery } from "../../store/Requests/productsApi";
import { IProduct, ProductCurrencyEnum } from "../interfaces";
import { useEffect, useMemo, useState } from "react";

export interface IFiltration {
  from: number,
  to: number,
  currency: ProductCurrencyEnum,
  sorting: string
}

const UseProductHooks = () => {
  const { data: productsList } = useGetAllProductsListQuery();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (productsList) {
      setProducts(productsList);
    }
  }, [productsList]);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FieldValues | IFiltration>();

  const onSubmit = (data: FieldValues) => {
    if (!productsList || !Array.isArray(productsList)) {
      setProducts([]);
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

    // if (currency) {
    //   filtered = filtered.filter((product) => product.currency === currency);
    // }

    // if (sorting) {
    //   filtered = filtered.sort((a, b) => {
    //     if (sorting === "asc") return a.price - b.price;
    //     if (sorting === "desc") return b.price - a.price;
    //     return 0; 
    //   });
    // }

    setProducts(filtered);
  };

  console.log(products, "productsproducts");

  return {
    control,
    reset,
    errors,
    products,
    onSubmit,
    handleSubmit
  };
};

export default UseProductHooks;
