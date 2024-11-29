import { ButtonTypeEnum } from "../interfaces";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./customButton.module.scss";

interface IProps {
  loading: boolean;
  className?: string;
  buttonText: string;
  disabled?: boolean;
  loaderColor?: string;
  type: ButtonTypeEnum;
  onClick?: (val?: any) => void;
}

const CustomButton: React.FC<IProps> = (props) => {
  const {
    loaderColor,
    buttonText,
    className,
    disabled,
    loading,
    type,
    onClick,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles["custom-button"]} ${disabled ? styles["disabled"] : ""} ${className}`}
      disabled={disabled}
    >
      {loading ? (
        <ClipLoader
          color={loaderColor ? loaderColor : "white"}
          loading={loading}
          size={15}
        />
      ) : (
        buttonText
      )}
    </button>
  );
};

export default CustomButton;
