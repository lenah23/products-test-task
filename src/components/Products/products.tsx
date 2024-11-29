import { RootState } from "../../store/store";
import UseProductHooks from "./productHooks";
import ProductList from "./productList";
import styles from "./products.module.scss";
import { useSelector } from "react-redux";

const Products: React.FC = () => {

  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredProducts
  );

  return (
    <div className={styles['products']}>
      <ProductList productsList={filteredProducts} />
    </div>
  );
};

export default Products;
