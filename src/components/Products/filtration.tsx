import { resetFilteredProducts, setFilteredProducts } from '../../store/Slices/productsSlice';
import CustomButton from '../CustomButton/customButton';
import CustomInput from '../CustomInput/customInput';
import CustomRadioButton from '../CustomRadioButton/customRadioButton';
import { ButtonTypeEnum, InputTypeEnum } from '../interfaces';
import UseProductHooks from './productHooks';
import styles from './products.module.scss';

const ProductFiltration: React.FC = () => {
  const {
    control,
    reset,
    errors,
    handleSubmit,
    onSubmit,
    currencyData,
    sortingData,
    handleReset,
  } = UseProductHooks();

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '20px' }}>
      <h2>Цена</h2>
      <div className={styles['price-container']}>
        <CustomInput
          type={InputTypeEnum?.number}
          controllerName='from'
          controllerRules={{ require: false }}
          errors={errors}
          control={control}
          label='С'
        />
        <CustomInput
          type={InputTypeEnum?.number}
          controllerName='to'
          controllerRules={{ require: false }}
          errors={errors}
          control={control}
          label='До'
        />
      </div>
      <CustomRadioButton
        control={control}
        controllerName={'currency'}
        label={'Валюта'}
        controllerRules={{ required: false }}
        options={currencyData}
      />
      <CustomRadioButton
        control={control}
        controllerName={'sorting'}
        label={'Сортировка'}
        controllerRules={{ required: false }}
        options={sortingData}
      />
      <div style={{ display: 'flex', gap: '20px' }}>
        <CustomButton
          loading={false}
          buttonText={'Filter'}
          type={ButtonTypeEnum.submit}
        />
        <CustomButton
          loading={false}
          buttonText={'Reset filter'}
          type={ButtonTypeEnum.button}
          onClick={handleReset}
        />
      </div>
    </form>
  );
};

export default ProductFiltration;
