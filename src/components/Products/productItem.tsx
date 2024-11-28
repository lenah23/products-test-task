import { ProductCurrencyEnum } from '../interfaces';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img8 from '../../assets/images/8.jpg';
import img9 from '../../assets/images/9.jpg';
import img10 from '../../assets/images/10.jpg';
import styles from './products.module.scss';

const images = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
};

interface IProps {
  imgName: keyof typeof images;
  productName: string;
  productPrice: number;
  productCurrency: ProductCurrencyEnum;
  productDescription: string;
}

const ProductItem: React.FC<IProps> = (props) => {
  const {
    imgName,
    productName,
    productPrice,
    productCurrency,
    productDescription,
    } = props;
    
  return (
    <div className={styles['product-item']}>
      <div className={styles['product-item__img-cont']}>
        <img className={styles['product-item__img']} src={images[imgName]} />
      </div>
      <div className={styles['product-item__content']}>
        <div className={styles['product-item__name']}>{productName}</div>
        <div className={styles['product-item__price']}>
          {productPrice} {productCurrency}
        </div>
        <div className={styles['product-item__description']}>
          {productDescription}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
