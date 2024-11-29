import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAddNewProductMutation } from '../../store/Requests/productsApi';

interface IProductFields {
  productName: string;
  productDescription: string;
  productPrice: number;
  image: string;
}

const UseAddNewProductHooks = () => {
  const [addNewProductReq, { isLoading, isSuccess }] =
    useAddNewProductMutation();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FieldValues | IProductFields>();

  const onSubmit = (data: FieldValues) => {
    const payload = {
      name: data?.productName,
      price: data?.productPrice,
      image: data?.image?.name,
      description: data?.productDescription,
    };

    addNewProductReq(payload);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Product is created successfully');
      reset();
    }
  }, [isSuccess]);

  return {
    handleSubmit,
    onSubmit,
    isLoading,
    control,
    errors,
  };
};

export default UseAddNewProductHooks;
