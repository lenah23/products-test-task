import CustomButton from '../CustomButton/customButton';
import CustomInput from '../CustomInput/customInput';
import CustomRadioButton from '../CustomRadioButton/customRadioButton';
import { ButtonTypeEnum, InputTypeEnum } from '../interfaces';
import UseProductHooks from './productHooks';
import styles from './products.module.scss';

const ProductFiltration: React.FC = () => {
  const { control, reset, errors, handleSubmit, onSubmit } = UseProductHooks();

  const currencyData = [
    { value: 'usd', label: 'USD' },
    { value: 'uah', label: 'UAH' },
  ];
  const sortingData = [
    { value: 'asc', label: 'По возрастанию цены' },
    { value: 'desc', label: 'По убыванию цены' },
    { value: 'alph', label: 'По алфавиту' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        // defaultValue={currencyData[0]?.value}
      />
      <CustomRadioButton
        control={control}
        controllerName={'sorting'}
        label={'Сортировка'}
        controllerRules={{ required: false }}
        options={sortingData}
        // defaultValue={currencyData[0]?.value}
      />
      <CustomButton
        loading={false}
        buttonText={'Filter'}
        type={ButtonTypeEnum.submit}
      />
    </form>
  );
};

export default ProductFiltration;
