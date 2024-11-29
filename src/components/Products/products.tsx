import UseProductHooks from "./productHooks";
import ProductList from "./productList";
import styles from "./products.module.scss";

const Products: React.FC = () => {
  const { products } = UseProductHooks();

  return (
    <div className={styles["products"]}>
      <ProductList productsList={products} />
    </div>
  );
};

export default Products;
