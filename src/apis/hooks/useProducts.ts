import {useQuery} from '@tanstack/react-query';
import {listProductApi} from '../products/productsApi';

export const useProducts = () => {
  const {
    isLoading,
    data: productList,
    error,
  } = useQuery([listProductApi.key], listProductApi.expect, {});

  return {
    isLoading,
    productList,
    error,
  };
};
