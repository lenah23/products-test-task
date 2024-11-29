import { IProduct, ProductCurrencyEnum } from "../interfaces";
import ProductItem from "./productItem";
import styles from "./products.module.scss";

interface IProps {
  productsList: IProduct[] | undefined;
}

const ProductList: React.FC<IProps> = (props) => {
  return (
    <div className={styles["products-list"]}>
      {props?.productsList?.map((item: IProduct) => {
        return (
          <ProductItem
            key={item?.id}
            imgName={item?.image}
            productName={item?.name}
            productPrice={item?.price}
            productCurrency={ProductCurrencyEnum.usd}
            productDescription={item?.description}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
