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
  } = useForm<FieldValues | IProductFields>({
    defaultValues: {
      image: null
    }
  });

  const onSubmit = (data: FieldValues) => {
    const mapImageName = (fileName: string) => {
      const fileNumber = fileName.split('.')[0]; 
      return `img${fileNumber}`;
    };
    const payload = {
      name: data?.productName,
      price: data?.productPrice,
      image: data?.image?.name ? mapImageName(data.image.name) : '',
      description: data?.productDescription,
      currency: data?.currency
    };
    addNewProductReq(payload);
  };

   const handleReset = () => {
     reset({
       productName: '',
       productPrice: '',
       image: null,
       productDescription: '',
       currency: ''
     });
  };
  

  useEffect(() => {
    if (isSuccess) {
      toast.success('Product is created successfully');
      handleReset();
    }
  }, [isSuccess]);

  return {
    handleSubmit,
    onSubmit,
    isLoading,
    control,
    errors,
    isSuccess,
  };
};

export default UseAddNewProductHooks;
