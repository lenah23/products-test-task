import './App.scss';
import AddNewProduct from './components/AddNewProductForm/addNewProduct';
import ProductFiltration from './components/Products/filtration';
import Products from './components/Products/products';

function App() {
  return (
    <div className='App'>
      <div className='main-section'>
        <div className='main-section__filtration'>
          <ProductFiltration />
        </div>
        <div className='main-section__products'>
          <Products />
        </div>
      </div>
      <div className='add-section'>
        <AddNewProduct />
      </div>
    </div>
  );
}

export default App;
