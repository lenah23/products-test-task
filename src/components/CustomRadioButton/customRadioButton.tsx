import {
  Control,
  Controller,
  FieldError,
  FieldErrors,
  FieldValues,
} from 'react-hook-form';
import styles from './customRadioButton.module.scss';

interface IRadioOption {
  value: string | number;
  label: string;
}

interface IProps {
  label?: string;
  options: IRadioOption[];
  controllerName: string;
  controllerRules: any;
  errors?: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  customRadioClassname?: string;
  defaultValue?: string | number;
}

const CustomRadioButton: React.FC<IProps> = (props) => {
  const {
    label,
    options,
    controllerName,
    controllerRules,
    errors,
    control,
    customRadioClassname,
    defaultValue,
  } = props;

  return (
    <div className={styles['radio-container']}>
      {label && <label className={styles['label']}>{label}</label>}
      <Controller
        key={controllerName}
        control={control}
        name={controllerName}
        rules={controllerRules}
        defaultValue={defaultValue}
        render={({ field: { onChange, name, value } }) => {
          return (
            <div className={styles['radio-group']}>
              {options.map((option) => (
                <label
                  key={option.value}
                  className={`${
                    styles['radio-label']
                  } ${customRadioClassname} ${
                    errors?.[controllerName]?.message && styles['error']
                  }`}
                >
                  <input
                    type='radio'
                    name={name}
                    value={option.value}
                    onChange={onChange}
                    checked={value === option.value}
                    className={styles['radio-input']}
                  />
                  {option.label}
                </label>
              ))}
            </div>
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

export default CustomRadioButton;
