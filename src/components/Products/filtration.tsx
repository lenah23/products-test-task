import CustomButton from "../CustomButton/customButton";
import CustomInput from "../CustomInput/customInput";
import CustomRadioButton from "../CustomRadioButton/customRadioButton";
import { ButtonTypeEnum, InputTypeEnum } from "../interfaces";
import UseProductHooks from "./productHooks";
import styles from "./products.module.scss";

const ProductFiltration: React.FC = () => {
  const { control, reset, errors, handleSubmit, onSubmit } = UseProductHooks();

  const currencyData = [
    {value: "usd", label: "USD"},
    {value: "uah", label: "UAH"}
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Цена</h2>
      <div className={styles["price-container"]}>
        <CustomInput
          type={InputTypeEnum?.number}
          controllerName="from"
          controllerRules={{ require: "Обязательно" }}
          errors={errors}
          control={control}
          label="С"
        />
        <CustomInput
          type={InputTypeEnum?.number}
          controllerName="to"
          controllerRules={{ require: "Обязательно" }}
          errors={errors}
          control={control}
          label="До"
        />
      </div>
      <CustomRadioButton
        control={control}
        controllerName={"currency"}
        label={"Валюта"}
        controllerRules={{ required: "Обязательно" }}
        options={currencyData}
        defaultValue={currencyData[0]?.value}
      />
      <CustomButton
        loading={false}
        buttonText={"Filter"}
        type={ButtonTypeEnum.submit}
      />
    </form>
  );
};

export default ProductFiltration;
