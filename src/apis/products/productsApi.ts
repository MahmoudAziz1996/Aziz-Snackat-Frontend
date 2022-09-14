import {request, BASE_URL} from '../request';
import {productResponse} from './types';

export const listProductApi = {
  key: 'listProductApi',
  expect: (): Promise<productResponse> => request.get(BASE_URL),
};
