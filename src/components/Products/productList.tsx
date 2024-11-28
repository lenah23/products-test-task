import { ProductCurrencyEnum } from '../interfaces';
import ProductItem from './productItem';

const ProductList: React.FC = () => {
  return (
    <div>
      <ProductItem
        imgName={'img1'}
        productName={'Iphone 16'}
        productPrice={450}
        productCurrency={ProductCurrencyEnum.usd}
        productDescription={'No description'}
      />
      <ProductItem
        imgName={'img1'}
        productName={'Iphone 16'}
        productPrice={450}
        productCurrency={ProductCurrencyEnum.usd}
        productDescription={'No description'}
      />
      <ProductItem
        imgName={'img1'}
        productName={'Iphone 16'}
        productPrice={450}
        productCurrency={ProductCurrencyEnum.usd}
        productDescription={'No description'}
      />
      <ProductItem
        imgName={'img1'}
        productName={'Iphone 16'}
        productPrice={450}
        productCurrency={ProductCurrencyEnum.usd}
        productDescription={'No description'}
      />
    </div>
  );
};

export default ProductList;
