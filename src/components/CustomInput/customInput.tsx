import {
  Control,
  Controller,
  FieldError,
  FieldErrors,
  FieldValues,
} from 'react-hook-form';
import { InputTypeEnum } from '../interfaces';
import styles from './customInput.module.scss';

interface IProps {
  label?: string;
  type: InputTypeEnum;
  placeholder?: string;
  defaultValue?: string;
  controllerName: string;
  customInputClassname?: string;
  controllerRules: any;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
}

const CustomInput: React.FC<IProps> = (props) => {
  const {
    type,
    label,
    errors,
    control,
    placeholder,
    defaultValue,
    controllerName,
    controllerRules,
    customInputClassname,
  } = props;

  return (
    <div className={styles['input-container']}>
      {label && <label className={styles['label']}>{label}</label>}
      <Controller
        key={controllerName}
        control={control}
        name={controllerName}
        rules={controllerRules}
        render={({ field: { onChange, name, value } }) => {
          return (
            <input
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              defaultValue={defaultValue}
              className={`${styles['custom-input']} ${customInputClassname} ${
                errors?.[controllerName]?.message && styles['error']
              }`}
              name={name}
            ></input>
          );
        }}
      />
      {(errors?.[controllerName] as FieldError)?.message && (
        <label className={styles['input-error']}>
          {(errors?.[controllerName] as FieldError).message}
        </label>
      )}
    </div>
  );
};

export default CustomInput;
