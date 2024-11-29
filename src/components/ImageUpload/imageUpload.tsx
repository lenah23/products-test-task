import React, { useEffect, useState } from 'react';
import {
  Control,
  Controller,
  FieldError,
  FieldErrors,
  FieldValues,
} from 'react-hook-form';
import styles from './imageUpload.module.scss';

interface IProps {
  label?: string;
  controllerName: string;
  controllerRules: any;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  customUploadClassname?: string;
  isSuccess: boolean
}

const CustomImageUpload: React.FC<IProps> = (props) => {
  const {
    label,
    controllerName,
    controllerRules,
    errors,
    control,
    customUploadClassname,
    isSuccess,
  } = props;

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (onChange: (value: null) => void) => {
    setPreviewImage(null);
    onChange(null);
  };

  useEffect(() => {
    if (isSuccess) {
      setPreviewImage(null);
    }
  }, [isSuccess]);

  return (
    <div className={styles['upload-container']}>
      {label && <label className={styles['label']}>{label}</label>}
      <Controller
        name={controllerName}
        control={control}
        rules={controllerRules}
        render={({ field: { onChange } }) => (
          <>
            {!previewImage ? (
              <div
                className={`${styles['upload-box']} ${customUploadClassname}`}
              >
                <label className={styles['upload-label']}>
                  +
                  <input
                    type='file'
                    accept='image/*'
                    className={styles['file-input']}
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      onChange(file);
                      handleImageUpload(file);
                    }}
                  />
                </label>
              </div>
            ) : (
              <div className={styles['image-preview']}>
                <img
                  src={previewImage}
                  alt='Uploaded preview'
                  className={styles['preview-img']}
                />
                <button
                  type='button'
                  className={styles['remove-btn']}
                  onClick={() => removeImage(onChange)}
                >
                  ×
                </button>
              </div>
            )}
          </>
        )}
      />
      {(errors?.[controllerName] as FieldError)?.message && (
        <label className={styles['input-error']}>
          {(errors?.[controllerName] as FieldError).message}
        </label>
      )}
    </div>
  );
};

export default CustomImageUpload;
