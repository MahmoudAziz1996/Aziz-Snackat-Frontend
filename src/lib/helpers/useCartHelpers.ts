import {IProduct} from '../@types/Products';

export const useCartHelpers = (items: Array<IProduct>) => {
  let totalCount = items?.slice().reduce((prev, cartItem) => {
    return prev + (cartItem.qty || 1);
  }, 0);

  totalCount = parseInt(totalCount.toFixed(2));
  let totalAmount = items?.slice().reduce((prev, cartItem) => {
    const {price, qty} = cartItem;
    let itemTotal = price * qty!!;
    return prev + itemTotal;
  }, 0);

  totalAmount = Number(totalAmount.toFixed(2));

  return [totalCount, totalAmount];
};
