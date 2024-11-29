import CustomButton from "../CustomButton/customButton";
import CustomInput from "../CustomInput/customInput";
import { ButtonTypeEnum, InputTypeEnum } from "../interfaces";
import UseAddNewProductHooks from "./addNewProduct.hooks";
import styles from "./addNewProduct.module.scss";

const AddNewProduct: React.FC = () => {
  const { handleSubmit, control, onSubmit, errors, isLoading } = UseAddNewProductHooks();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles['create-product__form']}
    >
      <CustomInput
        type={InputTypeEnum?.text}
        controllerName='productName'
        controllerRules={{ require: 'Обязательно' }}
        errors={errors}
        control={control}
        label={'Имя'}
        placeholder='Name'
      />
      <CustomInput
        type={InputTypeEnum?.number}
        controllerName='productPrice'
        controllerRules={{ require: 'Обязательно' }}
        errors={errors}
        control={control}
        label={'Цена'}
        placeholder='Price'
      />
      <CustomInput
        type={InputTypeEnum?.text}
        controllerName='productDescription'
        controllerRules={{ require: 'Обязательно' }}
        errors={errors}
        control={control}
        label={'Описание'}
        placeholder='Description'
      />
      <CustomButton
        loading={isLoading}
        buttonText={'Add new product'}
        type={ButtonTypeEnum.submit}
      />
    </form>
  );
};

export default AddNewProduct;
