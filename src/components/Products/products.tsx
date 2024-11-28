import UseProductHooks from './productHooks';
import ProductList from './productList';
import styles from "./products.module.scss";

const Products: React.FC = () => {
  const { productsList } = UseProductHooks();
  return (
    <div className={styles["products"]}>
      <ProductList productsList={productsList} />
    </div>
  );
};

export default Products;
