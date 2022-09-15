import {IProduct} from '../lib/@types/Products';

export enum ActionTypes {}
export interface CartState {
  totalAmount: number;
  totalCount: number;
  items: Array<IProduct>;
}
export interface IRootState {
  cart: CartState;
}
