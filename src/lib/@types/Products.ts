export interface IRating {
  rate: number;
  count: number;
}

export type ICategory =
  | 'electronics'
  | "men's clothing"
  | "women's clothing"
  | 'jewelery';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  image: string;
  rating: IRating;
  qty?: number;
}
