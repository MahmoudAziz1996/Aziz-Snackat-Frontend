import Axios, {AxiosError, AxiosResponse} from 'axios';

const request = Axios.create();
const BASE_URL = 'https://fakestoreapi.com/products';

const onSuccess = function (response: AxiosResponse) {
  return {
    data: response.data,
    Headers: response.headers,
  };
};

const onError = function (error: AxiosError) {
  if (Axios.isCancel(error)) {
    return Promise.reject(error);
  }
  if (error.response) {
    return Promise.reject(error.response.data);
  }
  return Promise.reject(error);
};

request.interceptors.response.use(onSuccess, onError);

export {request, BASE_URL};
