import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../components/interfaces';

interface ProductsState {
  filteredProducts: IProduct[];
}

const initialState: ProductsState = {
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFilteredProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.filteredProducts = action.payload;
    },
    resetFilteredProducts: (state) => {
      state.filteredProducts = [];
    },
  },
});

export const { setFilteredProducts, resetFilteredProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
