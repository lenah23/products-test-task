import { useGetAllProductsListQuery } from "../../store/Requests/productsApi";

const UseProductHooks = () => {

    const { data: productsList } = useGetAllProductsListQuery();

    console.log(productsList, 'productsList');
    return {
      productsList,
    };
}

export default UseProductHooks;